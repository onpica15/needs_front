import React, { useState, useEffect } from 'react'
import BackEndSidebar from '../../../components/backend/Sidebar'
import BackEndNavbar from '../../../components/backend/Navbar'
import Templatepic1 from './images/Atlanta_pro.png'
import TemplatepicBig from './images/minimal_pro.png'
import './Styles/TemplateList.scss'

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

      <div className="template">
        <Col className="main offset-2" xs={10}>
            <Container fluid className="main-bg">
              <div className="recommend-main rounded mh-100 pb-2">
                  <img src={TemplatepicBig} alt=""></img>
              </div>
            </Container>
            </Col>
      </div>
        {/* ############### */}

        <div className="template">
          <Col className="main offset-2" xs={10}>
            <Container fluid className="main-bg">
              <CardDeck>
              {' '}
              <Card className="rounded">
                <Card.Img className="p-3" variant="top" src={Templatepic1}/>
                <div className="align-items:center">
                  <Card.Title className="text-center">Narrative</Card.Title>
                  <Card.Text className="text-center">
                    FREE
                  </Card.Text>
                  <Container fluid className="d-flex mw-100">
                  <button className="btn btn-secondary float-left">加入收藏</button>
                  <button className="btn btn-primary">立即套用</button>
                  </Container>
                </div>
              </Card>
     
              <Card className="rounded">
                <Card.Img className="p-3" variant="top" src={Templatepic1}/>
                <Card.Body>
                  <Card.Title className="text-center">Narrative</Card.Title>
                  <Card.Text className="text-center">
                    FREE
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>

              <Card className="rounded">
                <Card.Img className="p-3" variant="top" src={Templatepic1}/>
                <Card.Body>
                  <Card.Title className="text-center">Narrative</Card.Title>
                  <Card.Text>
                    FREE
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>

            </CardDeck>

            </Container>
          </Col>
          </div>
    </>
  )
}

export default TemplateList