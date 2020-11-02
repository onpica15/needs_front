import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Alert } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { RiShoppingCart2Line } from 'react-icons/ri'
import './productPage.scss'
import * as cart from './CartFunction'

import DetailNav from './DetailNav'
import CarouselImage from './CarouselImage'
import MerchantInfo from './MerchantInfo'
import DeliveryPaymentInfo from './DeliveryPaymentInfo'
import Review from './Review'
import MerchantOtherProducts from './MerchantOtherProducts'
import History from './History'

function ProductDetail(props) {
  console.log('--- invoke function component ---')
  const [productDetail, setProductDetail] = useState([])
  const [merchantInfo, setMerchantInfo] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [sku, setSku] = useState({})
  const [show, setShow] = useState(false)

  async function getProductDetail() {
    const url = `http://localhost:5000/products/${props.match.params.id}`
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    setProductDetail(data)
    setSku(data.skus[0])
  }

  async function getMerchantInfo() {
    const url =
      `http://localhost:5000/products/merchant/${productDetail.merchant_id}` +
      `?exclude=${props.match.params.id}`
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    setMerchantInfo(data)
  }

  function getSku(e) {
    const allSku = productDetail.skus
    const sku = allSku.find(function (item) {
      return item.specification == e.target.value
    })
    setSku(sku)
  }

  function addToCart(value) {
    cart.addToLocalStorage(value)
    setShow(true)
  }

  useEffect(() => {
    getProductDetail()
  }, [])

  useEffect(() => {
    if (productDetail.merchant_id) {
      getMerchantInfo()
    }
  }, [productDetail])

  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 2000)
  }, [show])

  return (
    <div className="product-detail">
      <Alert
        show={show}
        variant="success"
        className="add-to-cart-success"
        onClose={() => setShow(false)}
        dismissible
      >
        商品已放入購物車
      </Alert>
      <DetailNav />
      <Container className="product-main-info">
        <Row>
<<<<<<< HEAD
          <Col md={7} className="photos-content">
            <img
              className="main-photo rounded"
              src={require('../../assets/img/products/1-paper/PT01_800x0.jpg')}
            />
            <div className="gallery-wrap">
              <div className="gallery-item active">
                <img
                  src={require('../../assets/img/products/1-paper/PT01_800x1.jpg')}
                />
              </div>
              <div className="gallery-item">
                <img
                  src={require('../../assets/img/products/1-paper/PT01_800x2.jpg')}
                />
              </div>
              <div className="gallery-item">
                <img
                  src={require('../../assets/img/products/1-paper/PT01_800x3.jpg')}
                />
              </div>
              <div className="gallery-item">
                <img
                  src={require('../../assets/img/products/1-paper/PT01_800x4.jpg')}
                />
              </div>
              <div className="gallery-item">
                <img
                  src={require('../../assets/img/products/1-paper/PT01_800x5.jpg')}
                />
              </div>
            </div>
=======
          <Col md={7}>
            <CarouselImage productDetail={productDetail} />
>>>>>>> origin/master
          </Col>
          <Col md={5} className="info-content pl-0">
            <ul className="breadcrumb-wrap">
              <li>
                <Link to="/" className="breadcrumb-item">
                  所有商品
                </Link>
              </li>
              <span> {'>'} </span>
              <li>
                <Link to="/" className="breadcrumb-item active">
<<<<<<< HEAD
                  文書用品
                </Link>
              </li>
            </ul>
            <h4 className="my-3">ARTEX x 印花樂 聯名3入墨水組</h4>
            <p className="font-s">
              品牌：
              <Link to="/" className="merchant-link">
                Meow Illustration
              </Link>
            </p>
            <p className="description">
              # 兩大台灣品牌ARTEX x 印花樂 墨水控必收清單 #
              首次合作推出的聯名鋼筆墨水組，以ARTEX最暢銷的開心鋼筆系列作為設計，精緻的手工技藝、搭載黃銅製鋼筆所帶來不凡的書寫重量，讓筆身沉穩且具質感；出水流暢、品質穩定，適合拿來用於日常的書寫。墨水以鬱綠、蒼藍和晨棕三個實用的顏色作為主體，商品的主題圍繞著「山林、海洋、日光」進行設計，象徵著台灣的環境「群山聳立、四面環海、金輝斜照」。
=======
                  {productDetail.name}
                </Link>
              </li>
            </ul>
            <h4 className="my-3">{productDetail.title}</h4>
            <p className="font-s">
              品牌：
              <Link to="/" className="merchant-link">
                {merchantInfo.brand_name}
              </Link>
>>>>>>> origin/master
            </p>
            <p className="description">{productDetail.outline}</p>
            <div className="price-wrap">
              <span className="discount">
                NT${sku.sale_price ? sku.sale_price : sku.price}
              </span>
              <span className="price">
                {sku.sale_price ? 'NT$' + sku.price : ''}
              </span>
            </div>
            <Form
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <Form.Group>
                <Form.Control as="select" custom onChange={getSku}>
                  {productDetail.skus &&
                    productDetail.skus.map((value, index) => {
                      return (
                        <option key={index}>
                          {value.specification === '-'
                            ? '單一規格'
                            : value.specification}
                        </option>
                      )
                    })}
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <div
<<<<<<< HEAD
                  className="btn-group border rounded"
                  role="group"
                  aria-label="Basic example"
                >
                  <button type="button" className="btn btn-sm border-right">
                    +
                  </button>
                  <Form.Control
                    type="number"
                    placeholder="1"
                    className="quantity border-0 rounded-0"
                  />
                  <button type="button" className="btn btn-sm border-left">
                    -
=======
                  className="btn-group border rounded w-50"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    className="btn btn-sm border-right px-3"
                    onClick={() => setQuantity(Math.max(quantity - 1, 1))}
                  >
                    -
                  </button>
                  <Form.Control
                    type="number"
                    value={quantity}
                    className="quantity border-0 rounded-0"
                    onChange={(e) => {
                      setQuantity(e.target.value)
                    }}
                    onBlur={(e) => {
                      setQuantity(
                        Math.min(Math.max(e.target.value, 1), sku.stocks)
                      )
                    }}
                  />
                  <button
                    type="button"
                    className="btn btn-sm border-left px-3"
                    onClick={() =>
                      setQuantity(Math.min(quantity + 1, sku.stocks))
                    }
                  >
                    +
>>>>>>> origin/master
                  </button>
                </div>
                <span className="stock">庫存：還剩 {sku.stocks} 件</span>
              </Form.Group>
<<<<<<< HEAD
              <button className="btn btn-danger mt-3 w-100" type="submit">
=======
              <button
                className="btn btn-danger mt-3 w-100"
                type="button"
                onClick={() => {
                  addToCart({
                    id: productDetail.id,
                    skuid: sku.id,
                    amount: quantity,
                  })
                }}
              >
>>>>>>> origin/master
                <RiShoppingCart2Line className="cart-icon" />
                放入購物車
              </button>
            </Form>
            <button className="btn btn-outline-danger mt-3 w-100">
              <i className="far fa-heart mr-3"></i>收藏商品
            </button>
          </Col>
        </Row>
      </Container>
<<<<<<< HEAD
      <div className="merchant-info">
        <Container>
          <Row className="justify-content-between py-4">
            <Col md={1}>
              <img
                className="merchant-logo rounded"
                src={require('../../assets/img/brands/pommedepin111_300x300.jpg')}
              />
            </Col>
            <Col md={3}>
              <h5 className="mb-3">Meow Illustration</h5>
              <button className="btn btn-sm btn-danger mr-2">+ 加入關注</button>
              <button className="btn btn-sm btn-secondary">
                <AiOutlineShop /> 逛逛店家
              </button>
            </Col>
            <Col md={3}>
              <p>
                評價：<span className="text-point">4.8 (3,680個評價)</span>
              </p>
              <p className="m-0">
                加入時間：<span className="text-point">16個月 前</span>
              </p>
            </Col>
            <Col md={2}>
              <p>
                粉絲：<span className="text-point">210</span>
              </p>
              <p className="m-0">
                商品：<span className="text-point">23</span>
              </p>
            </Col>
            <Col md={2}>
              <p>
                回應速度：<span className="text-point">1 日</span>
              </p>
              <p className="m-0">
                平均出貨速度：<span className="text-point">7 日</span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
=======
      <MerchantInfo merchantInfo={merchantInfo} />
>>>>>>> origin/master
      <Container>
        <h5 className="mt-4">商品介紹</h5>
        <hr />
        <div className="product-detail-content d-flex justify-content-center">
          <div
            dangerouslySetInnerHTML={{ __html: productDetail.description }}
          ></div>
        </div>
        <h5 className="mt-5">運費與其他資訊</h5>
        <hr />
        <DeliveryPaymentInfo />
        <h5 className="mt-5">購買評價</h5>
        <hr />
<<<<<<< HEAD
        <div className="review">
          <div className="d-flex justify-content-between review-item">
            <div className="mr-5">
              <img
                className="avatar rounded"
                src={require('../../assets/img/brands/pommedepin111_300x300.jpg')}
              />
            </div>
            <div>
              <p>An Ling Zheng 於 2020-09-06 01:41 留下評論</p>
              <p className="review-desc">
                比預期的時間還早拿到，這本被自己設定為紀錄每日的生活反思及自省，找著超喜歡的中日夾雜（風格）書封，太開心了～接下來書寫的過程中也能感受到身心被洗滌呀！已經第四年用了，非常很喜歡，每年都很美！
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between reply">
            <div>
              <p>店家 於 2020-09-06 03:41 回覆</p>
              <p className="reply-desc m-0">
                親愛的顧客您好！感謝您購買本次商品，您的評價是對我們的肯定；您的支持與愛護，是我們的動力來源！期待您的下次光臨，非常感謝您的評價！謝謝！
              </p>
            </div>
            <div>
              <img
                className="avatar rounded mr-3"
                src={require('../../assets/img/brands/pommedepin111_300x300.jpg')}
              />
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <button className="btn btn-sm btn-outline-secondary">
            閱讀更多
            <FiChevronDown />
          </button>
        </div>
=======
        <Review />
>>>>>>> origin/master
        <h5 className="mt-5">店家其他商品</h5>
        <hr />
        <MerchantOtherProducts merchantInfo={merchantInfo} />
        <h5 className="mt-5">最近預覽</h5>
        <hr />
        <History />
        <div className="mb-5"></div>
      </Container>
    </div>
  )
}

export default ProductDetail
