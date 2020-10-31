import React, { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import CheckoutNav from './CheckoutNav'
import './cart.scss'

import { FaTimes } from 'react-icons/fa'

function Cart(props) {
  return (
    <div className="cart">
      <Container>
        <CheckoutNav />
        <div className="border rounded-top">
          <Row className="cart-infobar rounded-top py-3 m-0">
            <Col md={5}>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
              </div>
              <span className="product-titlebar ml-5">日本雙山</span>
            </Col>
            <Col md={2} className="text-right pr-5">
              單價
            </Col>
            <Col md={3} className="text-center">
              數量
            </Col>
            <Col md={1} className="text-right">
              小計
            </Col>
            <Col md={1} className="text-right">
              <FaTimes />
            </Col>
          </Row>
          <Row className="cart-item py-3 m-0">
            <Col md={5} className="d-flex">
              <div className="form-check align-self-center item-check">
                <input className="form-check-input" type="checkbox" />
              </div>
              <div className="item-product ml-4 d-flex">
                <img
                  src={require('../../assets/img/products/1-paper/PT01_300x0.jpg')}
                />
                <div className="ml-5">
                  <p className="item-title">南國的孩子 手寫數字章 (22個入)</p>
                  <span>規格：單一規格</span>
                </div>
              </div>
            </Col>
            <Col
              md={2}
              className="text-right align-self-center font-point pr-5"
            >
              NT780
            </Col>
            <Col md={3} className="d-flex">
              <Form.Group className="mb-0 align-self-center">
                <div
                  className="btn-group border rounded w-75 quantity-group"
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
              </Form.Group>
            </Col>
            <Col md={1} className="text-right align-self-center font-point">
              NT780
            </Col>
            <Col md={1} className="text-right align-self-center">
              <FaTimes />
            </Col>
          </Row>
          <div className="item-hr"></div>
          <Row className="cart-item py-3 m-0">
            <Col md={5} className="d-flex">
              <div className="form-check align-self-center item-check">
                <input className="form-check-input" type="checkbox" />
              </div>
              <div className="item-product ml-4 d-flex">
                <img
                  src={require('../../assets/img/products/1-paper/PT02_300x0.jpg')}
                />
                <div className="ml-5">
                  <p className="item-title">南國的孩子 手寫數字章 (22個入)</p>
                  <span>規格：單一規格</span>
                </div>
              </div>
            </Col>
            <Col
              md={2}
              className="text-right align-self-center font-point pr-5"
            >
              NT780
            </Col>
            <Col md={3} className="d-flex">
              <Form.Group className="mb-0 align-self-center">
                <div
                  className="btn-group border rounded w-75 quantity-group"
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
              </Form.Group>
            </Col>
            <Col md={1} className="text-right align-self-center font-point">
              NT780
            </Col>
            <Col md={1} className="text-right align-self-center">
              <FaTimes />
            </Col>
          </Row>
        </div>
        <Row className="delivery-pay-info">
          <Col md={6}>
            <div className="border rounded-top cart-infobar p-3">配送方式</div>
            <div className="p-3 border border-top-0 item-title">
              <fieldset form="cartForm">
                <Form.Group as={Row} className="mb-0">
                  <Col>
                    <Form.Check
                      type="radio"
                      label="7-11 取貨"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                      className="mb-3"
                    />
                    <Form.Check
                      type="radio"
                      label="宅配到府"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                      className="mb-3"
                    />
                    <Form.Check
                      type="radio"
                      label="郵局配送"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios3"
                    />
                  </Col>
                </Form.Group>
              </fieldset>
            </div>
          </Col>
          <Col md={6}>
            <div className="border rounded-top cart-infobar p-3">訂單金額</div>
            <div className="p-3 border border-top-0 item-title">
              <div className="d-flex justify-content-between">
                <div>
                  <p>商品總計</p>
                  <p>運費總計</p>
                  <p className="mb-0">
                    其他折抵{' '}
                    <span className="font-point">（使用Ｅ幣折抵）</span>{' '}
                  </p>
                </div>
                <div className="text-right">
                  <p>NT$1440</p>
                  <p>NT$60</p>
                  <p className="mb-0 font-point">- NT$0</p>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <div>
                  <p>付款總計</p>
                </div>
                <div className="text-right">
                  <p className="font-point pay-total">NT$4200</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Cart
