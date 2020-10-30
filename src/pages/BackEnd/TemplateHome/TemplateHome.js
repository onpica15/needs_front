import React, { useState, useEffect } from 'react'

import { Col, Container } from 'react-bootstrap'

import TemplatepicBig from './images/minimal_pro.png'
import './Styles/TemplateHome.scss'
import '../../../styles/Backend/_backend.scss'

import { MdVisibility, MdVisibilityOff, MdEdit } from 'react-icons/md'

function TemplateHome(props) {
  return (
    <>
      <div className="template-home">
        <Col className="offset-2" xs={10}>
          <Container className="w-80">
            <h2 className="mt-4">主題</h2>
            <button className="mt-4 btn-light">
              <MdVisibility /> 查看目前主頁
            </button>
            <hr />
            <h1 className="mt-4">當前主題</h1>
            <button className="mt-3 btn-purple">
              <MdEdit /> 編輯當前主題
            </button>

            <div className="main-div rounded mt-5 main-adjust">
              <div className="col-6">
                <div className="d-flex flex-column">
                  <img
                    src={TemplatepicBig}
                    className="img-fluid bg-img"
                    alt="Responsive image"
                  ></img>
                  <button className="mt-4 btn-large">前往主題商店</button>
                </div>
              </div>
              <div className="col-6"></div>
            </div>

            <h1 className="mt-4">收藏的主題</h1>
            <hr />
          </Container>
        </Col>
      </div>
    </>
  )
}

export default TemplateHome
