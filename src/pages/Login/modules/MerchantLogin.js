import React, { useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { userActions, roleActions } from '../../../actions'
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { FaUserCircle, FaLock, FaFacebook } from 'react-icons/fa'
import { AiFillGooglePlusCircle, AiFillTwitterCircle } from 'react-icons/ai'
import './MerchantLogin.scss'

const MerchantLogin = (props) => {
  const { username, password, setUsername, setPassword } = props
  const [submitted, setSubmitted] = useState(false)
  const currentRole = useSelector((state) => state.role.type)
  const alertMsg = useSelector((state) => state.alert.message)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    if (username && password) {
      props.login(username, password, currentRole)
    }
  }

  return (
    <>
      <div className="merchantLogin container-fluid">
        <div className="side">
          <div className="logo">
            <Link to="#needs" onClick={props.setNeeds}>
              <img
                src={require('@assets/img/logo/logo_icon_whiite.png')}
                alt=""
              />
            </Link>
          </div>
          <div className="text">
            <p>想創立自有品牌嗎？</p>
            <p>手刀註冊加入NEEDS</p>
          </div>
          <Link to="/signup">SIGN UP</Link>
        </div>
        <div className="main">
          <div className="loginRole">
            <Link to="#member" className="pr-1" onClick={props.setMember}>
              會員
            </Link>
            <Link
              to="#merchant"
              className={`pl-1 seperator ${
                currentRole === 'merchant' ? 'actived' : ''
              }`}
              onClick={props.setMerchant}
            >
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
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group controlId="email" className="d-flex">
                  <Form.Control
                    type="email"
                    required
                    placeholder="信箱"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Control
                    type="password"
                    required
                    placeholder="密碼"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <p className={alertMsg ? 'alertmsg' : ''}>{alertMsg}</p>
                <div className="forgetPassword d-block">
                  <Link to="">忘記密碼</Link>
                  <Link to="/signup" className="ml-3 display-none">
                    立即註冊
                  </Link>
                </div>
                <Button variant="primary" type="submit">
                  LOGIN
                </Button>
              </Form>
              {/* For Logout Test */}
              {/* <Button
                variant="primary"
                className="mt-2"
                type="button"
                onClick={() => props.logout()}
              >
                LOGOUT
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (store) => {
  const { loggingIn } = store.authentication
  const role = store.role
  return { loggingIn, role }
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout,
  setMember: roleActions.setMember,
  setMerchant: roleActions.setMerchant,
  setNeeds: roleActions.setNeeds,
}

export default connect(mapStateToProps, actionCreators)(MerchantLogin)
