import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'

function History(props) {
  return (
    <div>
      <Row>
        <Col md={2}>
          <div className="product-s">
            <img
              src={require('../../assets/img/products/1-paper/PT01_300x0.jpg')}
            />
          </div>
          <p className="mt-2 mb-0 product-s-title">
            南國的孩子 手寫數字章 (22個入)
          </p>
          <p className="mb-0">小山坡</p>
          <p className="text-point">NT$1135</p>
        </Col>
        <Col md={2}>
          <div className="product-s">
            <img
              src={require('../../assets/img/products/1-paper/PT02_300x0.jpg')}
            />
          </div>
          <p className="mt-2 mb-0 product-s-title">
            南國的孩子 手寫數字章 (22個入)
          </p>
          <p className="mb-0">小山坡</p>
          <p className="text-point">NT$1135</p>
        </Col>
        <Col md={2}>
          <div className="product-s">
            <img
              src={require('../../assets/img/products/1-paper/PT03_300x0.jpg')}
            />
          </div>
          <p className="mt-2 mb-0 product-s-title">
            南國的孩子 手寫數字章 (22個入)
          </p>
          <p className="mb-0">小山坡</p>
          <p className="text-point">NT$1135</p>
        </Col>
        <Col md={2}>
          <div className="product-s">
            <img
              src={require('../../assets/img/products/1-paper/PT04_300x0.jpg')}
            />
          </div>
          <p className="mt-2 mb-0 product-s-title">
            南國的孩子 手寫數字章 (22個入)
          </p>
          <p className="mb-0">小山坡</p>
          <p className="text-point">NT$1135</p>
        </Col>
        <Col md={2}>
          <div className="product-s">
            <img
              src={require('../../assets/img/products/1-paper/PT05_300x0.jpg')}
            />
          </div>
          <p className="mt-2 mb-0 product-s-title">
            南國的孩子 手寫數字章 (22個入)
          </p>
          <p className="mb-0">小山坡</p>
          <p className="text-point">NT$1135</p>
        </Col>
        <Col md={2}>
          <div className="product-s">
            <img
              src={require('../../assets/img/products/1-paper/PT06_300x0.jpg')}
            />
          </div>
          <p className="mt-2 mb-0 product-s-title">
            南國的孩子 手寫數字章 (22個入)
          </p>
          <p className="mb-0">小山坡</p>
          <p className="text-point">NT$1135</p>
        </Col>
      </Row>
    </div>
  )
}

export default History
