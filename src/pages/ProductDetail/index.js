import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './productPage.scss'
import { Carousel } from 'react-responsive-carousel'

import DetailNav from './DetailNav'
import DeliveryPaymentInfo from './DeliveryPaymentInfo'
import MerchantOtherProducts from './MerchantOtherProducts'
import History from './History'

import { RiShoppingCart2Line } from 'react-icons/ri'
import { AiOutlineShop } from 'react-icons/ai'
import { FiChevronDown } from 'react-icons/fi'

function ProductDetail(props) {
  console.log('--- invoke function component ---')
  const [productDetail, setProductDetail] = useState([])
  const [productSku, setProductSku] = useState([])
  const [productImage, setProductImage] = useState([])
  console.log(productImage)

  async function getProductDetail() {
    // 連接的伺服器資料網址
    const url = 'https://run.mocky.io/v3/74c68711-ea53-4706-9b1f-54df744ea46c'

    // 注意header資料格式要設定，伺服器才知道是json格式
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
    // 設定資料
    setProductDetail(data)
    setProductSku(data.skus)
    setProductImage(data.images)
  }

  useEffect(() => {
    getProductDetail()
  }, [])

  return (
    <div className="product-detail">
      <DetailNav />
      <Container className="product-main-info">
        <Row>
          <Col md={7} className="photos-content">
            <Carousel className="w-88">
              {productImage.map((value) => {
                return (
                  <div>
                    <img
                      className="w-100"
                      src={require(`../../assets/img/products/${value}`)}
                      alt=""
                    />
                  </div>
                )
              })}
            </Carousel>
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
                  {productDetail.category}
                </Link>
              </li>
            </ul>
            <h4 className="my-3">{productDetail.title}</h4>
            <p className="font-s">
              品牌：
              <Link to="/" className="merchant-link">
                {productDetail.merchant}
              </Link>
            </p>
            <p className="description">{productDetail.outline}</p>
            <div className="price-wrap">
              <span className="discount">NT$780</span>
              <span className="price">NT$980</span>
            </div>
            <Form>
              <Form.Group>
                <Form.Control as="select">
                  {productSku.map((value, index) => {
                    return <option>{value.name}</option>
                  })}
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <div
                  className="btn-group border rounded"
                  role="group"
                  aria-label="Basic example"
                >
                  <button type="button" className="btn btn-sm border-right">
                    -
                  </button>
                  <Form.Control
                    type="number"
                    placeholder="1"
                    className="quantity border-0 rounded-0"
                  />
                  <button type="button" className="btn btn-sm border-left">
                    +
                  </button>
                </div>
                <span className="stock">庫存：還剩10件</span>
              </Form.Group>
              <button className="btn btn-danger mt-3 w-100" type="submit">
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
      <div className="merchant-info">
        <Container>
          <Row className="justify-content-between py-4">
            <Col md={1}>
              <img
                className="merchant-logo rounded"
                src={require('../../assets/img/brands/pommedepin111_300x300.jpg')}
                alt=""
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
      <Container>
        <h5 className="mt-4">商品介紹</h5>
        <hr />
        <div className="product-detail-content row justify-content-center">
          <div
            dangerouslySetInnerHTML={{ __html: productDetail.description }}
          ></div>
        </div>
        <h5 className="mt-5">運費與其他資訊</h5>
        <hr />
        <DeliveryPaymentInfo />
        <h5 className="mt-5">購買評價</h5>
        <hr />
        <div className="review">
          <div className="d-flex justify-content-between review-item">
            <div className="mr-5">
              <img
                className="avatar rounded"
                src={require('../../assets/img/brands/pommedepin111_300x300.jpg')}
                alt=""
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
                alt=""
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
        <h5 className="mt-5">店家其他商品</h5>
        <hr />
        <MerchantOtherProducts />
        <h5 className="mt-5">最近預覽</h5>
        <hr />
        <History />
        <div className="mb-5"></div>
      </Container>
    </div>
  )
}

export default ProductDetail
