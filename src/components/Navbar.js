import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai'
import { connect } from 'react-redux'

import { userActions } from '../actions'
import '../styles/navbar.scss'
import logo from '../images/logo.png'

import SerarchBox from './SearchBox/SerarchBox'

function HomeNavbar(props) {
  //從actions中引入登出函式
  const { logout } = userActions

  //從redux中取出登入狀態
  const isLogin = useSelector((state) => state.authentication.loggedIn)
  const loginUser = useSelector((state) => state.authentication.user)

  //依登入狀態決定登出按鈕的樣式
  const logoutBtn = () => {
    switch (loginUser.user.role) {
      case 'member':
        return (
          <Nav.Link
            href=""
            onClick={(e) => {
              e.preventDefault()
              logout()
            }}
          >
            {loginUser.user.username}會員登出
          </Nav.Link>
        )
      case 'merchant':
        return (
          <>
            <Nav.Link
              href=""
              onClick={(e) => {
                e.preventDefault()
                logout()
              }}
            >
              {loginUser.user.username}商家登出
            </Nav.Link>
          </>
        )
      default:
        return (
          <>
            <Nav.Link
              href=""
              onClick={(e) => {
                e.preventDefault()
                logout()
              }}
            >
              {loginUser.user.uername}後台登出
            </Nav.Link>
          </>
        )
    }
  }

  return (
    <>
      {/* <Container fluid> */}
      <div className="navBlock">
        <Navbar bg="white" expand="lg" fixed="top">
          {/* <Navbar bg="transparent" expand="lg"> */}
          <Navbar.Brand href="/">
            <Link to="/">
              <div className="nav-logo">
                <img src={logo} alt="" />
              </div>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/productlist">所有分類</Nav.Link>
              <Nav.Link href="/articles">文章列表</Nav.Link>
              <Nav.Link href="/investment">成為商家</Nav.Link>
            </Nav>
            <Nav className={isLogin ? `d-none` : `d-block`}>
              {isLogin === false ? (
                <Nav.Link href="/login">
                  <span className="mr-1">登入</span>
                  <span className="pl-1 separator">註冊</span>
                </Nav.Link>
              ) : (
                ''
              )}
            </Nav>
            <Nav>{isLogin === true ? logoutBtn() : ''}</Nav>
            <Nav>
              {isLogin === false ? (
                <Link to={`/login`} className="mx-3 text-decoration-none">
                  <AiOutlineShoppingCart size="20px" className="cart-icon" />
                  <span className="cart-amount">{props.cartAmount || 0}</span>
                </Link>
              ) : (
                <Link to={`/cart_list`} className="mx-3 text-decoration-none">
                  <AiOutlineShoppingCart size="20px" className="cart-icon" />
                  <span className="cart-amount">{props.cartAmount || 0}</span>
                </Link>
              )}
            </Nav>
            <Nav>
              <div className="d-flex">
                <AiOutlineSearch
                  size="20px"
                  style={{ transform: 'translateY(8px)' }}
                />
                <SerarchBox />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* </Container> */}
      </div>
    </>
  )
}

const mapStateToProps = (store) => {
  return { cartAmount: store.cartAmount }
}

// export default HomeNavbar
export default connect(mapStateToProps)(HomeNavbar)
