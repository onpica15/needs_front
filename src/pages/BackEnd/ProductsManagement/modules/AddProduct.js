import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Modal, Button } from 'react-bootstrap'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import '@ckeditor/ckeditor5-build-classic/build/translations/zh'
import Axios from 'axios'
import NumberFormat from 'react-number-format'
import { FiUpload, FiX } from 'react-icons/fi'
import Spec from './Spec'
import SpecItem from './SpecItem'

const AddProduct = (props) => {
  const {
    showAddProd,
    setShowAddProd,
    getData,
    merchantId,
    type,
    getCategories,
    categories,
    specCount,
    createSpec,
    formData,
    setFormData,
    imgList,
    setImgList,
    preview,
    setPreview,
    alertShow,
    setAlertShow,
    error,
    success,
    clear,
    alerMsg,
    alerType,
  } = props

  const dispatch = useDispatch()

  const defaultData = {
    title: '【IWI】 Concision 簡約鋼筆',
    category: 22,
    specification0: '霧黑',
    specification1: '霧銀',
    price: '600',
    salePrice: '540',
    launchDate: '2020-11-16',
    stock: 20,
    outline:
      'IWI Concision簡約鋼珠筆/鋼筆使用極簡主義的設計語言，以一體式結構的上下黃銅筆管完成具有獨特性與原創性的線條；傾斜的頂端與尾部設計，點綴富有彈性的筆夾，輔以簡單的色彩，適合喜愛純粹極簡生活風格的你。',
  }

  //清除已選擇按鈕
  const removeSelected = (e, index) => {
    e.preventDefault()
    const preArr = [...preview]
    const selectedArr = [...imgList]
    preArr.splice(index, 1)
    selectedArr.splice(index, 1)
    setPreview(preArr)
    setImgList(selectedArr)
  }

  const handleSetForm = (e, key, data) => {
    switch (key) {
      case 'file':
        const files = e.target.files

        //先把img透過for迴圈寫入imgRow物件
        const imgRow = []
        const imgPre = []
        for (let i = 0; i < files.length; i++) {
          const img = files[i]
          imgRow.push(img)
          imgPre.push(URL.createObjectURL(img))
        }
        //將imgRow物件set進ImgList State中
        setImgList(imgRow)
        setPreview(imgPre)
        break

      case 'description':
        setFormData({ ...formData, [key]: data })
        break

      default:
        const value = e.target.value
        setFormData({ ...formData, [key]: value })
        break
    }
    // if (key === 'file') {
    //   const files = e.target.files

    //   //先把img透過for迴圈寫入imgRow物件
    //   const imgRow = []
    //   const imgPre = []
    //   for (let i = 0; i < files.length; i++) {
    //     const img = files[i]
    //     imgRow.push(img)
    //     imgPre.push(URL.createObjectURL(img))
    //   }
    //   //將imgRow物件set進ImgList State中
    //   setImgList(imgRow)
    //   setPreview(imgPre)
    // } else {
    //   const value = e.target.value
    //   setFormData({ ...formData, [key]: value })
    // }
  }

  const specItemArr = []
  for (let i = 0; i <= specCount.count; i++) {
    specItemArr.push(<SpecItem key={i} index={i} />)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const postData = new FormData()

    //把files state append進postData
    imgList.forEach((img) => {
      postData.append('imgList', img)
    })

    //把文字formData set進postData
    postData.set('formData', JSON.stringify(formData))

    Axios.post(
      `http://localhost:5000/bk-products-api?id=${merchantId}&prodType=0`,
      postData
    ).then((res) => {
      if (!res.data.success) {
        setAlertShow(true)
        setTimeout(() => {
          dispatch(clear())
          setAlertShow(false)
        }, 1500)
        return dispatch(error('新增失敗'))
      }
      setAlertShow(true)
      setShowAddProd(false)
      getData(merchantId, type)
      setTimeout(() => {
        dispatch(clear())
        setAlertShow(false)
      }, 1500)
      return dispatch(success('新增成功'))
    })
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <>
      <Modal
        className="addProdModal"
        show={showAddProd}
        onHide={(e) => {
          setShowAddProd(false)
          setFormData({})
          setPreview([])
        }}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title onClick={() => setFormData(defaultData)}>
            實體商品上架
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group controlId="title">
              <p className="warningInfo">*為必填欄位</p>
              <Form.Label>
                商品名稱<span className="redStar">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                required
                value={formData.title}
                onChange={(e) => handleSetForm(e, 'title')}
              />
            </Form.Group>
            <Form.Label>商品圖片</Form.Label>
            <Form.Group controlId="file" className="uploadImg">
              <Form.Label>
                <FiUpload size="35px" />
                上傳圖片
                <div className="preBox">
                  {preview.map((item, index) => {
                    return (
                      <>
                        <img src={item} alt="" />
                        <FiX
                          size="24px"
                          color="#ea5455"
                          className="removebtn"
                          onClick={(e) => removeSelected(e, index)}
                        />
                      </>
                    )
                  })}
                </div>
              </Form.Label>
              <Form.File
                className="position-relative"
                required
                name="file"
                feedbackTooltip
                multiple
                onChange={(e) => {
                  handleSetForm(e, 'file')
                }}
              />
            </Form.Group>
            <Form.Group controlId="category">
              <Form.Label>
                商品類別<span className="redStar">*</span>
              </Form.Label>
              <Form.Control
                as="select"
                value={formData.category}
                required
                onChange={(e) => handleSetForm(e, 'category')}
              >
                <option value="" disabled selected hidden>
                  請選擇
                </option>
                {categories.map((item, index) => {
                  const arr = item.category.split(',')
                  return (
                    <>
                      <option
                        key={item.id}
                        value={item.id}
                        className="parentCat"
                        disabled
                      >
                        {item.parentCategory}
                      </option>
                      {arr.map((itm, idx) => {
                        return (
                          itm && (
                            <>
                              <option key={idx} value={itm.split(':')[0]}>
                                {itm.split(':')[1]}
                              </option>
                            </>
                          )
                        )
                      })}
                    </>
                  )
                })}
              </Form.Control>
            </Form.Group>

            <Spec
              formData={formData}
              handleSetForm={handleSetForm}
              specCount={specCount}
              createSpec={createSpec}
            >
              {specItemArr}
            </Spec>
            <Form.Group>
              <Form.Label htmlFor="price">
                商品定價<span className="redStar">*</span>
              </Form.Label>
              <NumberFormat
                className="form-control"
                thousandSeparator={true}
                prefix={'$'}
                id="price"
                required
                value={formData.price}
                onChange={(e) => handleSetForm(e, 'price')}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="salePrice">商品促銷價</Form.Label>
              <NumberFormat
                className="form-control"
                thousandSeparator={true}
                prefix={'$'}
                id="salePrice"
                value={formData.salePrice}
                onChange={(e) => handleSetForm(e, 'salePrice')}
              />
            </Form.Group>
            <Form.Group controlId="launchDate">
              <Form.Label>
                商品上架日<span className="redStar">*</span>
              </Form.Label>
              <Form.Control
                type="date"
                required
                value={formData.launchDate}
                onChange={(e) => handleSetForm(e, 'launchDate')}
              />
            </Form.Group>
            <Form.Group controlId="stock">
              <Form.Label>
                商品庫存<span className="redStar">*</span>
              </Form.Label>
              <Form.Control
                type="number"
                required
                value={formData.stock}
                onChange={(e) => handleSetForm(e, 'stock')}
              />
            </Form.Group>
            <Form.Group controlId="outline">
              <Form.Label>
                商品摘要<span className="redStar">*</span>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows="5"
                required
                value={formData.outline}
                onChange={(e) => handleSetForm(e, 'outline')}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                商品詳細介紹<span className="redStar">*</span>
              </Form.Label>
              <CKEditor
                data="<p>開始新增商品介紹吧...</p>"
                editor={ClassicEditor}
                config={{
                  language: 'zh',
                }}
                onReady={(editor) => {
                  console.log('Editor is ready to use!', editor)
                }}
                onChange={(e, editor) => {
                  const data = editor.getData()
                  handleSetForm(e, 'description', data)
                }}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline-danger"
              onClick={(e) => {
                setShowAddProd(false)
                setFormData({})
                setPreview([])
              }}
            >
              取消
            </Button>
            <Button variant="secondary">預覽商品頁</Button>
            <Button variant="primary" type="submit">
              上架商品
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      <Modal show={alertShow} centered className="alertModal">
        <Modal.Body className={alerType}>{alerMsg}</Modal.Body>
      </Modal>
    </>
  )
}

export default AddProduct
