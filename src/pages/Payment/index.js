import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Accordion, Card } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { IoIosArrowDown } from 'react-icons/io'
import { useSelector } from 'react-redux'
import './cartPayment.scss'

import CheckoutNav from './CheckoutNav'
import CartItems from './CartItems'

function Payment(props) {
  const [products, setProducts] = useState([])
  const loginUser = useSelector((state) => state.authentication.user)
  const [userInfo, setUserInfo] = useState()

  async function getUserInfo() {
    // const url = `http://localhost:5000/cart/user/${loginUser.user.id}`
    const url = ``
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
    setUserInfo(data)
  }

  useEffect(() => {
    setProducts(props.orderItems)
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    console.log(products)
  }, [products])

  return (
    <div className="cart-payment-page">
      <Container>
        <CheckoutNav />
        <Accordion defaultActiveKey="0" className="mb-4">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              <div className="sum">
                總計 NT$ {products.length ? products.sum : 0}
                <IoIosArrowDown />
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                {products.length ? <CartItems products={products} /> : ''}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <div className="border rounded-top mb-4">
          <Row className="infobar rounded-top py-3 m-0">
            <Col md={12}>收件資訊</Col>
          </Row>
          <Form className="pl-3 pt-3">
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2" className="item-title">
                收件人名稱
              </Form.Label>
              <Col sm="5">
                <Form.Control type="text" placeholder="Normal text" />
              </Col>
              <Col sm="4" className="align-self-center">
                ＊請填入收件人真實姓名，以確保順利收件
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2" className="item-title">
                收件人電話
              </Form.Label>
              <Col sm="5">
                <Form.Control type="text" placeholder="Normal text" />
              </Col>
              <Col sm="4" className="align-self-center">
                ＊配送人員將以此區資料聯繫
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2" className="item-title">
                收件人地址
              </Form.Label>
              <Col sm="5">
                <Form.Control type="text" placeholder="Normal text" />
              </Col>
            </Form.Group>
          </Form>
        </div>
        <Row className="delivery-pay-info">
          <Col md={6}>
            <div className="border rounded-top infobar p-3">訂單備註</div>
            <div className="p-3 border border-top-0 item-title">
              <Form.Group className="mb-2">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="（ 選填 ）有什麼想告訴店家的嗎？"
                />
              </Form.Group>
            </div>
          </Col>
          <Col md={6}>
            <div className="border rounded-top infobar p-3">付款方式</div>
            <div className="p-3 border border-top-0 item-title">
              <fieldset form="cartForm">
                <Form.Group as={Row} className="mb-0">
                  <Col>
                    <Form.Check
                      type="radio"
                      label="信用卡號付款 ( VISA / MasterCard / JCB 信用卡 )"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                      className="mb-3"
                    />
                    <Form.Check
                      type="radio"
                      label="ATM 轉帳繳費"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                      className="mb-3"
                    />
                    <Form.Check
                      type="radio"
                      label="7-11 ibon 代碼繳費"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios3"
                    />
                  </Col>
                </Form.Group>
              </fieldset>
              {/* <Link to={`/cart_list`}> */}
              <button className="btn btn-danger w-100 mt-3">確認付款</button>
              {/* </Link> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const mapStateToProps = (store) => {
  return { orderItems: store.orderItems }
}

export default connect(mapStateToProps)(Payment)
