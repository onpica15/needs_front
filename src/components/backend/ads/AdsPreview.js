import React from 'react'
import { Card, Carousel, Row, Col } from 'react-bootstrap'
import CTR from '../../../components/backend/ads/charts/CTR'
import AdsChart1 from './charts/AdsChart1'
import AdsChart2 from './charts/AdsChart2'
import AdsChart3 from './charts/AdsChart3'

function AdsPreview() {
  return (
    <>
      <Card>
        <Card.Body>
          <div className="ads-preview-card-header">
            <Card.Title className="mb-3">廣告預覽</Card.Title>
            <div className="ads-type">首頁廣告</div>
          </div>
          <div className="ads-preview">
            <Carousel indicators={false} interval={50000}>
              <Carousel.Item>
                <Card>
                  <Row>
                    {/* <Col xs={3}></Col> */}
                    <Col xs={6}>
                      <Card.Img
                        variant="top"
                        src={require('../../../images/backend/ads/ads1.jpg')}
                      />
                    </Col>
                    {/* <Col xs={3}></Col> */}
                    <Col xs={6}>
                      <Card.Body className="ads-chart-wrapper">
                        <Card.Title>封面照片</Card.Title>
                        <Card.Text>
                          活動廣告的主頁照片，於首頁展示三樣欲曝光商品，增加點閱率。
                          <br />
                          <br />
                          可點選輪播查看展示之商品，並從圓餅圖中判斷商品個別點擊率之比例。
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card>
                  <Row>
                    <Col xs={6}>
                      <Card.Img
                        variant="top"
                        src={require('../../../images/backend/ads/ads2.jpg')}
                      />
                    </Col>
                    <Col xs={6}>
                      <Card.Body className="ads-chart-wrapper">
                        <Card.Title className="ads-title">
                          LABAN CAMBRIDGE 劍橋鋼筆
                        </Card.Title>
                        <AdsChart1 />
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card>
                  <Row>
                    <Col xs={6}>
                      <Card.Img
                        variant="top"
                        src={require('../../../images/backend/ads/ads3.jpg')}
                      />
                    </Col>
                    <Col xs={6}>
                      <Card.Body className="ads-chart-wrapper">
                        <Card.Title className="ads-title">
                          【Uptrend My diary ｜超級空白手帳 VII】
                        </Card.Title>
                        <AdsChart2 />
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card>
                  <Row>
                    <Col xs={6}>
                      <Card.Img
                        variant="top"
                        src={require('../../../images/backend/ads/ads4.jpg')}
                      />
                    </Col>
                    <Col xs={6}>
                      <Card.Body className="ads-chart-wrapper">
                        <Card.Title className="ads-title">
                          【HIGHTIDE】2021方格週記事手帳B6 ‧ 皮革綁線茶
                        </Card.Title>
                        <AdsChart3 />
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Carousel.Item>
            </Carousel>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default AdsPreview
