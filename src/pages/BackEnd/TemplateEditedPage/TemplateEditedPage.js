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
import { BsFillEyeFill,BsFillEyeSlashFill } from "react-icons/bs";

import TemplateUpload from './TemplateUpload'
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import Narrative from '../../MerchantHome/Narrative'



function TemplateEditedPage(props) {
const [eyeshow,setEyeShow]= useState(true)
const toggleEyeShow = (e) => setEyeShow(!eyeshow);

// fileuplaod


  return(
    <>
    <div className="template-editPage">
    <Col className="offset-2" xs={10}>
    <div className="container-fluid mt-2">

    {/* edit-bar */}
    <Col className="xs={10} p-0">
    <div className="d-flex ">
    <div className="space">
    <div className="edit-bar">
        <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header className ="rounded">
            <div className="d-flex justify-content-start">
            {/* onClick={toggleShowHandler} */}
              <Button variant="light" onClick={toggleEyeShow}> 
              {eyeshow?<BsFillEyeFill/>:<BsFillEyeSlashFill/>}
              </Button>
              <Accordion.Toggle as={Button} variant="light" eventKey="0">
                  <GrMoreVertical />
                </Accordion.Toggle>    
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <TemplateUpload />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        </Accordion>

        <Accordion defaultActiveKey="1">
        <Card>
          <Card.Header className ="rounded">
            <div className="d-flex justify-content-start">
            <Button variant="light" onClick={toggleEyeShow}> 
              {eyeshow ? <BsFillEyeFill/>:<BsFillEyeSlashFill/>}
              </Button>
              <Accordion.Toggle as={Button} variant="light" eventKey="1">
                  <GrMoreVertical />
                </Accordion.Toggle>    
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
            sec2(選商品)
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        </Accordion>

        <Accordion defaultActiveKey="2">
        <Card>
          <Card.Header className ="rounded">
            <div className="d-flex justify-content-start">
            <Button variant="light" onClick={toggleEyeShow}> 
              {eyeshow?<BsFillEyeFill/>:<BsFillEyeSlashFill/>}
              </Button>
              <Accordion.Toggle as={Button} variant="light" eventKey="2">
                  <GrMoreVertical />
                </Accordion.Toggle>    
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
            sec3(選活動)
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        </Accordion>

        <Accordion defaultActiveKey="3">
        <Card>
          <Card.Header className ="rounded">
            <div className="d-flex justify-content-start">
            <Button variant="light" onClick={toggleEyeShow}> 
              {eyeshow?<BsFillEyeFill/>:<BsFillEyeSlashFill/>}
              </Button>
              <Accordion.Toggle as={Button} variant="light" eventKey="3">
                  <GrMoreVertical />
                </Accordion.Toggle>    
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
            sec4(換圖片＋敘述)
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        </Accordion>
        </div>
    </div>

        {/* change section*/}

        <div className="change-section rounded">
            <Narrative />
        </div>
    </div>
    </Col>

    </div>
    </Col>
    </div>
    
      
    </>
  )
}

export default TemplateEditedPage