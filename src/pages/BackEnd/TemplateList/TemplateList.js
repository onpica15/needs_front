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

import { FiHeart } from 'react-icons/fi';

function TemplateList(props) {
  
  return (
    <>
    <div className="template">
        <Col className="offset-2" xs={10}>
            <Container fluid className="">
            <div className="d-flex justify-content-end ">
                <div className="main-div rounded mr-2">
                  <p>熱門程度</p>
                </div>
                <div className="main-div rounded">
                <p>pro/free</p>
                </div>
            </div>
              <hr/>
            </Container>
        </Col>
    </div>


    {/* ############# */}

      <div className="template">
        <Col className="offset-2" xs={10}>
            <Container fluid >

              <div className="main-div recommend rounded d-flex align-items-center ">

              <div className="row rounded d-flex align-items-center">
                <div className="col-8">
                <img src={Templatepic1} class="main-small-pic" alt="Responsive image"></img>
                <img src={TemplatepicBig} className="img-fluid main-bg-pic" alt="Responsive image"></img>
                </div>
                <div className="col-4 mh-100 text-adjust">
                <div className="d-flex flex-column justify-content-around ">
                    <h1 >Narrative</h1>
                    <h6 >方案：FREE</h6>
                    <div className="pb-2">
                    <button className="btn-bg gray"><FiHeart/>加入收藏</button>
                    </div>
                    <div>
                    <button className="btn-bg purple">立即套用</button>
                    </div>
                </div>
            </div>
            </div>
              </div>
            </Container>
            </Col>
      </div>
        {/* ############### */}

        <div className="template mt-5">
          <Col className="offset-2" xs={10}>
            <Container fluid >
            <Row>
              <CardDeck className="pb-3 card-adjust">
              {' '}
              <Card className="rounded">
                <Card.Img className="p-3" variant="top" src={Templatepic1}/>
                <div className="align-items:center">
                  <Card.Title className="text-center">Narrative</Card.Title>
                  <Card.Text className="text-center">
                    FREE
                  </Card.Text>
                  <Container className="d-flex p-0">
                  <button className="btn-bg gray left"><FiHeart/>加入收藏</button>
                  <button className="btn-bg purple right">立即套用</button>
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
                  <Container className="d-flex p-0">
                  <button className="btn-bg gray left"><FiHeart/>加入收藏</button>
                  <button className="btn-bg purple right">立即套用</button>
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
                  <Container className="d-flex p-0">
                  <button className="btn-bg gray left"><FiHeart/>加入收藏</button>
                  <button className="btn-bg purple right">立即套用</button>
                  </Container>
                </div>
              </Card>

            </CardDeck>
            </Row>

            <Row >
              <CardDeck className="pb-3 card-adjust">
              {' '}
              <Card className="rounded">
                <Card.Img className="p-3" variant="top" src={Templatepic1}/>
                <div className="align-items:center">
                  <Card.Title className="text-center">Narrative</Card.Title>
                  <Card.Text className="text-center">
                    FREE
                  </Card.Text>
                  <Container className="d-flex p-0">
                  <button className="btn-bg gray left"><FiHeart/>加入收藏</button>
                  <button className="btn-bg purple right">立即套用</button>
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
                  <Container className="d-flex p-0">
                  <button className="btn-bg gray left"><FiHeart/>加入收藏</button>
                  <button className="btn-bg purple right">立即套用</button>
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
                  <Container className="d-flex p-0">
                  <button className="btn-bg gray left"><FiHeart/>加入收藏</button>
                  <button className="btn-bg purple right">立即套用</button>
                  </Container>
                </div>
              </Card>

            </CardDeck>
            </Row>
            </Container>
            
          </Col>
          </div>
    </>
  )
}

export default TemplateList