import React from 'react'
import './styles/index.scss'
import KeyIndex from '../../../components/backend/sales/KeyIndex'
import BuyerAnalytics from '../../../components/backend/sales/BuyerAnalytics'
import MerchantsRank from '../../../components/backend/sales/MerchantsRank'
import CategoriesRank from '../../../components/backend/sales/CategoriesRank'

import { Col, Container, Row } from 'react-bootstrap'

function Sales() {
  return (
    <>
      <div className="sales-wrapper">
        <Col className="main offset-2" xs={10}>
          <Container fluid className="main-bg">
            <Row className="my-3">
              <Col xs={12}>
                <KeyIndex />
              </Col>
              <Col xs={12}>
                <BuyerAnalytics />
              </Col>
            </Row>
            <Row className="my-3">
              <Col xs={7}>
                <MerchantsRank />
              </Col>
              <Col xs={5}>
                <CategoriesRank />
              </Col>
            </Row>
          </Container>
        </Col>
      </div>
    </>
  )
}

export default Sales
