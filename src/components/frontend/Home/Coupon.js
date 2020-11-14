import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Container, Col, Row, Button } from 'react-bootstrap'

function Coupon() {
  // const [productList, setProductList] = useState([])
  // useEffect(() => {
  //   Axios.get('http://localhost:5000/try-db').then((response) => {
  //     setProductList(response.data)
  //   })
  // }, [])
  // if (productList.length == 0) {
  //   return ''
  // }
  return (
    <>
      <Container>
        <hr />
        <Row>
          <Col xs={12} className="my-5">
            <div className="promo-coupon">
              <img
                src={require('../../../pages/Home/images/discount.jpg')}
                alt=""
              />
            </div>
          </Col>
        </Row>
        <Row className="promo-wrapper">
          <Col xs={12} md={4} className="promo-rwd">
            <div className="promo-primary">
              <img
                src={require('../../../pages/Home/images/promo0.jpg')}
                alt=""
              />
            </div>
          </Col>
          <Col xs={12} md={8} className="p-0">
            <Row className="promo-wrapper m-0">
              <Col xs={12} md={4} className="promo-rwd">
                <div className="promo1">
                  <img
                    src={require('../../../pages/Home/images/promo0-1.jpg')}
                    alt=""
                  />
                </div>
                <div className="promo-info">
                  <div className="promo-title">
                    【EL COMMUN】2021橫式週記事手帳B6 ‧白海藍鯨
                    {/* {productList[0].title} */}
                  </div>
                  <div className="promo-brand">EL COMMUN</div>
                  <span className="promo-price">NT$684</span>
                  <span className="promo-sub-price">NT$760</span>
                </div>
              </Col>
              <Col xs={12} md={4} className="promo-rwd">
                <div className="promo2">
                  <img
                    src={require('../../../pages/Home/images/promo0-2.jpg')}
                    alt=""
                  />
                </div>
                <div className="promo-info">
                  <div className="promo-title">
                    【Uptrend】 My diary ｜超級空白手帳 VII
                  </div>
                  <div className="promo-brand">Uptrend</div>
                  <span className="promo-price">NT$175</span>
                  <span className="promo-sub-price">NT$250</span>
                </div>
              </Col>

              <Col xs={12} md={4} className="promo-rwd">
                <div className="promo3">
                  <img
                    src={require('../../../pages/Home/images/promo0-3.jpg')}
                    alt=""
                  />
                </div>
                <div className="promo-info">
                  <div className="promo-title">
                    【HIGHTIDE】2021方格週記事手帳B6 ‧ 皮革綁線茶
                  </div>
                  <div className="promo-brand">小山坡</div>
                  <span className="promo-price">NT$1071</span>
                  <span className="promo-sub-price">NT$1190</span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="promo-wrapper">
          <Col xs={12} md={4} className="promo-rwd">
            <div className="promo-primary">
              <img
                src={require('../../../pages/Home/images/promo1.jpg')}
                alt=""
              />
            </div>
          </Col>
          <Col xs={12} md={8} className="p-0">
            <Row className="promo-wrapper m-0">
              <Col xs={12} md={4} className="promo-rwd">
                <div className="promo1">
                  <img
                    src={require('../../../pages/Home/images/promo1-1.jpg')}
                    alt=""
                  />
                </div>
                <div className="promo-info">
                  <div className="promo-title">【2021年月曆拼貼體驗課】</div>
                  <div className="promo-brand">樂意Loidesign</div>
                  <span className="promo-price">NT$1200</span>
                  <span className="promo-sub-price">NT$1500</span>
                </div>
              </Col>
              <Col xs={12} md={4} className="promo-rwd">
                <div className="promo2">
                  <img
                    src={require('../../../pages/Home/images/promo1-2.jpg')}
                    alt=""
                  />
                </div>
                <div className="promo-info">
                  <div className="promo-title">暖男香氛蠟燭暖香燈】</div>
                  <div className="promo-brand">A'ROMA P</div>
                  <span className="promo-price">NT$875</span>
                  <span className="promo-sub-price">NT$950</span>
                </div>
              </Col>
              <Col xs={12} md={4} className="promo-rwd">
                <div className="promo3">
                  <img
                    src={require('../../../pages/Home/images/promo1-3.jpg')}
                    alt=""
                  />
                </div>
                <div className="promo-info">
                  <div className="promo-title">迷你乾燥花束禮盒】 六色彩虹</div>
                  <div className="promo-brand">萍水相逢</div>
                  <span className="promo-price">NT$1071</span>
                  <span className="promo-sub-price">NT$1190</span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="promo-wrapper">
          <Col xs={12} md={4} className="promo-rwd">
            <div className="promo-primary">
              <img
                src={require('../../../pages/Home/images/promo2.jpg')}
                alt=""
              />
            </div>
          </Col>
          <Col xs={12} md={8} className="p-0">
            <Row className="promo-wrapper m-0">
              <Col xs={12} md={4} className="promo-rwd">
                <div className="promo1">
                  <img
                    src={require('../../../pages/Home/images/promo2-1.jpg')}
                    alt=""
                  />
                </div>
                <div className="promo-info">
                  <div className="promo-title">
                    奧樂雞燙金聖誕卡&明信片四入組
                  </div>
                  <div className="promo-brand">jzFUN</div>
                  <span className="promo-price">NT$684</span>
                  <span className="promo-sub-price">NT$760</span>
                </div>
              </Col>
              <Col xs={12} md={4} className="promo-rwd">
                <div className="promo2">
                  <img
                    src={require('../../../pages/Home/images/promo2-2.jpg')}
                    alt=""
                  />
                </div>
                <div className="promo-info">
                  <div className="promo-title">聖誕雙層玻璃杯-新show四件組</div>
                  <div className="promo-brand">好玻 GOODGLAS</div>
                  <span className="promo-price">NT$975</span>
                  <span className="promo-sub-price">NT$1100</span>
                </div>
              </Col>
              <Col xs={12} md={4} className="promo-rwd">
                <div className="promo3">
                  <img
                    src={require('../../../pages/Home/images/promo2-3.jpg')}
                    alt=""
                  />
                </div>
                <div className="promo-info">
                  <div className="promo-title">聖誕樹皮革小書</div>
                  <div className="promo-brand">來本冊子Re:mainer</div>
                  <span className="promo-price">NT$1071</span>
                  <span className="promo-sub-price">NT$1190</span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
      </Container>
    </>
  )
}

export default Coupon
