import React from 'react'
import './styles/index.scss'
import KeyIndex from '../../../components/backend/sales/KeyIndex'
import { Col, Container, Row } from 'react-bootstrap'

function Sales() {
  return (
    <>
      <div className="ads-wrapper">
        <Col className="main offset-2" xs={10}>
          <Container className="main-bg">
            <Row className="my-3">
              <Col xs={12}>
                <KeyIndex />
              </Col>
            </Row>
          </Container>
        </Col>
      </div>
    </>
  )
}

export default Sales
