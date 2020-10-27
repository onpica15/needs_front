import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { FaUserCircle, FaLock, FaFacebook } from 'react-icons/fa'
import { AiFillGooglePlusCircle, AiFillTwitterCircle } from 'react-icons/ai'
import './Login.scss'

const MerchantLogin = () => {
  return (
    <>
      <div className="loginSec container-fluid">
        <div className="side">
          <div className="logo">
            <img
              src={require('@assets/img/logo/logo_icon_whiite.png')}
              alt=""
            />
          </div>
          <div className="text">
            <p>想創立自有品牌嗎？</p>
            <p>手刀註冊加入NEEDS</p>
          </div>
          <Button variant="link">SIGN UP</Button>
        </div>
        <div className="main">
          <div className="loginRole">
            <a href="#member">會員</a>
            <span className="mx-1"> | </span> <a href="#merchant">商家</a>
          </div>
          <div className="loginInput">
            <h4>商家登入</h4>
            <div className="socialMedia">
              <a href="">
                <FaFacebook size="44px" color="#3b5998" />
              </a>
              <a href="">
                <AiFillGooglePlusCircle size="50px" color="#dd4b39" />
              </a>
              <a href="">
                <AiFillTwitterCircle size="50px" color="#26a6d1" />
              </a>
            </div>
            <div className="loginForm">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  {/* <InputGroup.Prepend>
                    <InputGroup.Text>
                      <FaUserCircle />
                    </InputGroup.Text>
                  </InputGroup.Prepend> */}
                  <Form.Control type="email" placeholder="信箱" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="密碼" />
                </Form.Group>
                <a href="" className="d-block">
                  忘記密碼
                </a>
                <Button variant="primary" type="submit">
                  LOGIN
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MerchantLogin
