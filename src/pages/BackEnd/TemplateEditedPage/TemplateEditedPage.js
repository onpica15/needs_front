import React, { useState, useEffect } from 'react'
import {
  Col,
  Container,
  Button,
  Accordion,
  Card,
} from 'react-bootstrap'

import './styles/TemplateEditedPage.scss'
import { GrMoreVertical } from "react-icons/gr";
import Templatepic1 from './images/Atlanta_pro.png'
import { BsFillEyeFill,BsFillEyeSlashFill } from "react-icons/bs";

function TemplateEditedPage(props) {
  return(
    <>
    <div className="template-editPage">
    <Col className="offset-2" xs={10}>
    <Container className="fluid mt-2">
    <div className="edit-bar">

        <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header className ="rounded">
            <div className="d-flex justify-content-start">
              <Button variant="light"><BsFillEyeFill/></Button>
              <Accordion.Toggle as={Button} variant="light" eventKey="0">
                  <GrMoreVertical />
                </Accordion.Toggle>    
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <img src={Templatepic1} class="main-small-pic" alt="Responsive image"></img>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <Accordion defaultActiveKey="1">
        <Card>
          <Card.Header className ="rounded">
            <div className="d-flex justify-content-start">
              <Button variant="light"><BsFillEyeFill/></Button>
              <Accordion.Toggle as={Button} variant="light" eventKey="1">
                  <GrMoreVertical />
                </Accordion.Toggle>    
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <Accordion defaultActiveKey="2">
        <Card>
          <Card.Header className ="rounded">
            <div className="d-flex justify-content-start">
              <Button variant="light"><BsFillEyeFill/></Button>
              <Accordion.Toggle as={Button} variant="light" eventKey="2">
                  <GrMoreVertical />
                </Accordion.Toggle>    
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <Accordion defaultActiveKey="3">
        <Card>
          <Card.Header className ="rounded">
            <div className="d-flex justify-content-start">
              <Button variant="light"><BsFillEyeFill/></Button>
              <Accordion.Toggle as={Button} variant="light" eventKey="3">
                  <GrMoreVertical />
                </Accordion.Toggle>    
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      {/* ########## */}

      

    </div>
    </Container>
    </Col>
    </div>
    
      
    </>
  )
}

export default TemplateEditedPage