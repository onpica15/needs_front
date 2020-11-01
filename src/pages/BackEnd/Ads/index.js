import React, { useState } from 'react'
import './styles/index.scss'
import { Col, Container, Row, Card } from 'react-bootstrap'
import AdsPreview from '../../../components/backend/ads/AdsPreview'
import InProgressAds from '../../../components/backend/ads/InProgressAds'
import CTR from '../../../components/backend/ads/charts/CTR'
import CTRBar from '../../../components/backend/ads/charts/CTRBar'
import CPCPie from '../../../components/backend/ads/charts/CPCPie'
import AdsCalendar from '../../../components/backend/dashboard/AdsCalendar'
import moment from 'moment'
import 'moment/locale/zh-tw'

function Ads() {
  let dateArray = []
  for (let i = 0; i < 7; i++) {
    let date = moment().subtract(i, 'days').format('MMM Do')
    dateArray.push(date)
  }
  dateArray = dateArray.reverse()

  const [durationDays, setDurationDays] = useState([...dateArray])
  return (
    <>
      <div className="ads-wrapper">
        <Col className="main offset-2" xs={10}>
          <Container fluid className="main-bg">
            <Row className="my-3">
              <Col xs={8}>
                <AdsPreview></AdsPreview>
              </Col>
              <Col xs={4}>
                <Card>
                  <Card.Body
                    style={{ paddingBottom: '0', height: 'calc(100% + 200px)' }}
                  >
                    <Card.Title className="mb-3">成本</Card.Title>
                    <CPCPie></CPCPie>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="my-3">
              <Col xs={12}>
                <InProgressAds></InProgressAds>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <Card>
                  <Card.Body>
                    <Card.Title className="mb-3">曝光/點擊次數</Card.Title>
                    <CTR durationDays={durationDays}></CTR>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6}>
                <Card>
                  <Card.Body>
                    <Card.Title className="mb-3">Click Through Rate</Card.Title>
                    <CTRBar durationDays={durationDays}></CTRBar>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="my-3">
              <Col xs={12}>
                <Card>
                  <Card.Body>
                    <Card.Title className="mb-3">活動日期</Card.Title>
                    <AdsCalendar></AdsCalendar>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Col>
      </div>
    </>
  )
}

export default Ads
