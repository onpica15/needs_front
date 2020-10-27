import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { FaUserCircle, FaLock, FaFacebook } from 'react-icons/fa'
import { AiFillGooglePlusCircle, AiFillTwitterCircle } from 'react-icons/ai'
import './MerchantSignUp.scss'

const MerchantSignUp = (props) => {
  const { role, setRole, handleRole } = props
  return (
    <>
      <div className="merchantSignup container-fluid">
        <div className="wrap">
          <div className="side">
            <img
              className="logo"
              src={require('@assets/img/login/signup_logo.png')}
              alt=""
            />
            <img
              className="signUpimg"
              src={require('@assets/img/login/signup_img.jpg')}
              alt=""
            />
          </div>
          <div className="main">
            <div className="signupInput">
              <h4>商家註冊</h4>
              <div className="signupForm">
                <Form>
                  <Form.Group controlId="formBasicName">
                    <Form.Control type="text" placeholder="姓名" />
                  </Form.Group>
                  <Form.Group controlId="formBasicMobile">
                    <Form.Control type="text" placeholder="手機" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="信箱" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="密碼" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    SIGNUP
                  </Button>
                </Form>
                <p>
                  <a href="">NEEDS商店政策與規則</a>
                </p>
                <p>
                  點擊註冊代表您同意NEEDS之<a href="">會員條款</a>與
                  <a href="">客戶隱私權條款</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MerchantSignUp
