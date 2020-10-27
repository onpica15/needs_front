import React, { useState } from 'react'
import Chart from 'react-apexcharts'
import { Row, Col, Card } from 'react-bootstrap'

function BuyerAnalytics() {
  return (
    <>
      <Card className="mt-3">
        <Card.Body>
          <Card.Title className="mb-3">買家分析</Card.Title>
          <Row>
            <Col xs={4}>
                <div className="buyer-chart-wrapper">

                </div>
            </Col>
            <Col xs={8}></Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  )
}

export default BuyerAnalytics
