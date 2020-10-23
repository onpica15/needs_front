import React, { useState, useEffect } from 'react'
import BackEndSidebar from '../../../components/backend/Sidebar'
import BackEndNavbar from '../../../components/backend/Navbar'
import Templatepic1 from './images/Atlanta_pro.png'
import Templatepic2 from './images/Atlanta_pro.png'
import Templatepic3 from './images/Atlanta_pro.png'

import {
  Col,
  Container,
  Card,
  CardDeck,
  Row,
} from 'react-bootstrap'
function TemplateList(props) {
  return (
    <>
        <BackEndSidebar />
        <BackEndNavbar />

          <Col className="main offset-2" xs={10}>
            <Container fluid className="main-bg">
            <Row classname="my-3">
            {''}
            <CardDeck>
              <Row>
              <Card>
                <Card.Img variant="top" src={Templatepic1}/>
                <Card.Body>
                  <Card.Title>Narrative</Card.Title>
                  <Card.Text>
                    FREE
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              
              
              {/* <Card>
                <Card.Img variant="top" src={Templatepic2} />
                <Card.Body>
                  <Card.Title>Narrative</Card.Title>
                  <Card.Text>
                   {' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={Templatepic3} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card> */}
              </Row>
            </CardDeck>
        </Row>
        </Container>
        </Col>
    </>
  )
}

export default TemplateList