import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { FaUserCircle, FaLock, FaFacebook } from 'react-icons/fa'
import { AiFillGooglePlusCircle, AiFillTwitterCircle } from 'react-icons/ai'
import './MemberLogin.scss'

const MemberLogin = (props) => {
  const { role, setRole, handleRole } = props

  return (
    <>
      <div className="memberLogin container-fluid">
        {/* <div className="mask"></div> */}
        <div className="side">
          <div className="logo">
            <img
              src={require('@assets/img/logo/logo_icon_whiite.png')}
              alt=""
            />
          </div>
          <div className="text">
            <p>第一次來NEEDS嗎？</p>
            <p>手刀註冊加入會員</p>
          </div>
          <Link to="/signup">SIGN UP</Link>
        </div>

        <div className="main">
          <div className="loginRole">
            <Link to="#member" onClick={(e) => handleRole('member')}>
              會員
            </Link>
            <span className="mx-1"> | </span>
            <Link to="#merchant" onClick={(e) => handleRole('merchant')}>
              商家
            </Link>
          </div>
          <div className="loginInput">
            <h4>會員登入</h4>
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
                  <Form.Control type="email" placeholder="手機/信箱" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="密碼" />
                </Form.Group>
                <div className="forgetPassword d-block">
                  <Link to="">忘記密碼</Link>
                  <Link to="/signup" className="ml-3 display-none">
                    立即註冊
                  </Link>
                </div>
                <Button variant="secondary" type="submit">
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

export default MemberLogin
