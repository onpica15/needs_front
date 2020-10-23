import React from 'react'
import SocialMediaChart from '../../../components/backend/dashboard/charts/SocialMedia'
import BrowseChart from '../../../components/backend/dashboard/charts/Browse'
import SalesChart from '../../../components/backend/dashboard/charts/Sales'
import TurnoverChart from '../../../components/backend/dashboard/charts/Turnover'
import RevenueChart from '../../../components/backend/dashboard/charts/Revenue'
import Review from '../../../components/backend/dashboard/Review'
import DispatchStatus from '../../../components/backend/dashboard/DispatchStatus'
import DispatchContent from '../../../components/backend/dashboard/DispatchContent'
import AdsCalendar from '../../../components/backend/dashboard/AdsCalendar'
import AdsPreview from '../../../components/backend/dashboard/AdsPreview'
import './styles/index.scss'
import { Col, Container, Row } from 'react-bootstrap'

function Dashboard() {
  return (
    <>
      <div className="dashboard-wrapper">
        <Col className="main offset-2" xs={10}>
          <Container fluid className="main-bg">
            <Row className="my-3">
              {' '}
              <Col xs={3}>
                <SocialMediaChart />
              </Col>
              <Col xs={3}>
                <BrowseChart />
              </Col>
              <Col xs={3}>
                <SalesChart />
              </Col>
              <Col xs={3}>
                <TurnoverChart />
              </Col>
            </Row>
            <Row className="my-3">
              <Col xs={8}>
                <RevenueChart />
              </Col>{' '}
              <Col xs={4}>
                <Review />
              </Col>
            </Row>
            <Row className="my-3 dispatch-status">
              <Col xs={3}>
                <DispatchStatus />
              </Col>
              <Col xs={9}>
                <DispatchContent />
              </Col>
            </Row>
            <Row className="my-3 dispatch-status">
              <Col xs={6}>
                <AdsCalendar />
              </Col>
              <Col xs={6}>
                <AdsPreview />
              </Col>
            </Row>
          </Container>
        </Col>
      </div>
    </>
  )
}

export default Dashboard
