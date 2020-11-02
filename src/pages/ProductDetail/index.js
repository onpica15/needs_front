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
          <Col md={7}>
            <CarouselImage productDetail={productDetail} />
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
                  </button>
                </div>
                <span className="stock">庫存：還剩 {sku.stocks} 件</span>
              </Form.Group>
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
      <MerchantInfo merchantInfo={merchantInfo} />
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
        <Review />
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
