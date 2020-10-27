import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, InputGroup, Modal } from 'react-bootstrap'
import { FaUserCircle, FaLock, FaFacebook } from 'react-icons/fa'
import { AiFillGooglePlusCircle, AiFillTwitterCircle } from 'react-icons/ai'
import './MerchantLogin.scss'

const MerchantLogin = (props) => {
  const {
    role,
    setRole,
    handleRole,
    merchantIsAuth,
    setMerchantIsAuth,
    username,
    password,
    authUsername,
    setAuthUsername,
    authPassword,
    setAuthPassword,
  } = props

  const [alertText, setAlertText] = useState('帳號或密碼錯誤')
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
    <>
      <div className="merchantLogin container-fluid">
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
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail" className="d-flex">
                  <Form.Control
                    type="email"
                    required
                    placeholder="信箱"
                    // value={username}
                    onChange={(e) => setAuthUsername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    required
                    placeholder="密碼"
                    // value={password}
                    onChange={(e) => setAuthPassword(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    {alertText}
                  </Form.Control.Feedback>
                </Form.Group>
                <div className="forgetPassword d-block">
                  <Link to="">忘記密碼</Link>
                  <Link to="/signup" className="ml-3 display-none">
                    立即註冊
                  </Link>
                </div>
                <Button
                  variant="primary"
                  type="submit"
                  // type="button"
                  onClick={() => {
                    if (
                      authUsername === username &&
                      authPassword === password
                    ) {
                      setMerchantIsAuth(true)
                      setAlertText('登入成功')
                    } else {
                      setAlertText('帳號或密碼錯誤')
                    }
                  }}
                >
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
