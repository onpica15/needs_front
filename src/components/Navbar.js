import React from 'react'
import '../styles/navbar.scss'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import logo from '../images/logo.png'

function HomeNavbar() {
  return (
    <>
      <Container>
        <Navbar bg="transparent" expand="lg">
          <Navbar.Brand href="#home">
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
              <Nav.Link href="#link">文章列表</Nav.Link>
              <Nav.Link href="#link">成為商家</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link href="#home">登入｜註冊</Nav.Link>
              <Nav.Link href="#link">
                <AiOutlineShoppingCart />
              </Nav.Link>
              <Nav.Link href="#link">
                <BsSearch />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  )
}

export default HomeNavbar
