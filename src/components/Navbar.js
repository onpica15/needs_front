import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai'
// import { BsSearch } from 'react-icons/bs'
import { userActions } from '../actions'
import '../styles/navbar.scss'
import logo from '../images/logo.png'

function HomeNavbar() {
  //從redux中取出登入狀態
  const isLogin = useSelector((state) => state.authentication.loggedIn)
  const { logout } = userActions

  return (
    <>
      {/* <Container fluid> */}
      <Navbar bg="transparent" expand="lg">
        <Navbar.Brand href="/">
          <Link to="/">
            {' '}
            <div className="nav-logo">
              <img src={logo} alt="" />
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">所有分類</Nav.Link>
            <Nav.Link href="/article">文章列表</Nav.Link>
            <Nav.Link href="/investment">成為商家</Nav.Link>
          </Nav>
          <Nav className={isLogin ? `d-none` : `d-block`}>
            <Nav.Link href="/login">
              <span className="mr-1">登入</span>
              <span className="pl-1 separator">註冊</span>
            </Nav.Link>
          </Nav>
          <Nav className={isLogin ? `d-block` : `d-none`}>
            <Nav.Link
              href=""
              onClick={(e) => {
                e.preventDefault()
                logout()
              }}
            >
              登出
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#link">
              <AiOutlineShoppingCart size="30px" style={{ color: '#d44f44' }} />
            </Nav.Link>
            <Nav.Link href="#link">
              <AiOutlineSearch size="30px" />
              {/* <BsSearch size="24px" /> */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* </Container> */}
    </>
  )
}

export default HomeNavbar
