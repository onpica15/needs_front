import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './productPage.scss'
import DetailNav from './DetailNav'

function Product(props) {

  return (
    <>
      <Container className="productDetail">
        <Row className="product-main-info justify-content-between">
          <Col md={7} className="photos-content">
            <img className="main-photo rounded" src={require('../../assets/img/products/1-paper/PT01_800x0.jpg')} />
            <div className="gallery-wrap">
              <div className="gallery-item active">
                <img src={require('../../assets/img/products/1-paper/PT01_800x1.jpg')} />
              </div>
              <div className="gallery-item">
                <img src={require('../../assets/img/products/1-paper/PT01_800x2.jpg')} />
              </div>
              <div className="gallery-item">
                <img src={require('../../assets/img/products/1-paper/PT01_800x3.jpg')} />
              </div>
              <div className="gallery-item">
                <img src={require('../../assets/img/products/1-paper/PT01_800x4.jpg')} />
              </div>
              <div className="gallery-item">
                <img src={require('../../assets/img/products/1-paper/PT01_800x5.jpg')} />
              </div>
            </div>
          </Col>
          <Col md={5} className="info-content">

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Product