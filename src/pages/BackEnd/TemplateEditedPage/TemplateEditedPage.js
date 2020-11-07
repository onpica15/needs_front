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
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

function TemplateEditedPage(props) {
const [eyeshow,setEyeShow]= useState(true)

// fileuplaod

const [loading,setLoading] = useState(false)
const handleChange = info => {
  if (info.file.status === 'uploading') {
    this.setState({ loading: true });
    return;
  }
  if (info.file.status === 'done') {
    // Get this url from response in real world.
    getBase64(info.file.originFileObj, imageUrl =>
      this.setState({
        imageUrl,
        loading: false,
      }),
    );
  }
};

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}


  return(
    <>
    <div className="template-editPage">
    <Col className="offset-2" xs={10}>
    <div className="container-fluid mt-2">

    {/* edit-bar */}
    <div className="d-flex ">
    <div className="edit-bar">
        <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header className ="rounded">
            <div className="d-flex justify-content-start">
            {/* onClick={toggleShowHandler} */}
              <Button variant="light" ><BsFillEyeFill/></Button>
              <Accordion.Toggle as={Button} variant="light" eventKey="0">
                  <GrMoreVertical />
                </Accordion.Toggle>    
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              sec1(圖＋文字＋換顏色)
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
            sec2(選商品)
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
            sec3(選活動)
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
            sec4(換圖片＋敘述)
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        </Accordion>
        </div>
        {/* change section*/}

        <div className="change-section">

        </div>
    </div>

    </div>
    </Col>
    </div>
    
      
    </>
  )
}

export default TemplateEditedPage