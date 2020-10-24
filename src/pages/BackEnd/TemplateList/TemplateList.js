import React, { useState, useEffect } from 'react'

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

      <div className="template">
        <Col className="main offset-2" xs={10}>
            <Container fluid className="main-bg">
              <div className="recommend-main rounded mh-100 pb-2 d-flex align-items-center ">
                <div className="pt-5 pb-2 d-flex fa-align-center align-item">
                  <img src={TemplatepicBig} class="img-fluid" alt="Responsive image"></img>
                  <div className="d-flex flex-column align-items-center justify-content-between"> 
                    <h4>Narrative</h4>
                    <h6>方案：FREE</h6>
                    <button className="btn-gray">加入願望清單</button>
                    <button className="btn-purple">立即套用</button>
                  </div>
                </div>
              </div>
            </Container>
            </Col>
      </div>
        {/* ############### */}

        <div className="template mt-3">
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

            </CardDeck>

            </Container>
          </Col>
          </div>
    </>
  )
}

export default TemplateList