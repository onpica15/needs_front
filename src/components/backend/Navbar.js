import React from 'react'
import { Link } from 'react-router-dom'
import {
  Col,
  Container,
  Nav,
  Dropdown,
  NavItem,
  NavLink,
} from 'react-bootstrap'
import avatar from '../../pages/BackEnd/Dashboard/images/book.jpg'
import customer from '../../pages/BackEnd/Dashboard/images/australia-customer.jpg'
import BreadcrumbBackend from './Breadcrumb'
import { userActions } from '../../actions/index'

function Navbar() {
  const openFullscreen = () => {
    const elem = document.body
    if (elem.requestFullscreen) {
      elem.requestFullscreen()
    }
  }

  //logout
  const { logout } = userActions

  return (
    <>
      <div className="backend-navbar-wrapper">
        <Col className="main offset-2" xs={10}>
          <Container fluid className="main-bg">
            <div className="main-navbar d-flex">
              <BreadcrumbBackend />
              <Nav variant="pills" activeKey="1" onSelect={openFullscreen}>
                <Nav.Item className="nav-icon">
                  <Nav.Link eventKey="1" href="#/home">
                    <i className="fas fa-expand"></i>
                  </Nav.Link>
                </Nav.Item>
                <Dropdown as={NavItem} className="nav-icon">
                  <Dropdown.Toggle as={NavLink}>
                    <i className="far fa-bell"></i>
                    <span className="badge badge-pill badge-primary nav-badge">
                      5
                    </span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu-right notification-dropdown">
                    <Dropdown.Item className="dropdown-menu-header">
                      <div className="notifier">
                        <i className="far fa-envelope pr-2"></i>5則新通知
                      </div>
                    </Dropdown.Item>
                    <div className="scrollable-container">
                      <Dropdown.Item>
                        <Link to="#">
                          <div className="media d-flex align-items-start">
                            <div className="media-user">
                              <img src={customer} alt="" />
                            </div>
                            <div className="media-body">
                              <div className="media-heading">奧客</div>
                              <div className="media-text">
                                太陽餅裡面沒太陽！我要退貨！！
                              </div>
                            </div>
                            <small className="media-time">9小時之前</small>
                          </div>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to="#">
                          <div className="media d-flex align-items-start">
                            <div className="media-user">
                              <img src={customer} alt="" />
                            </div>
                            <div className="media-body">
                              <div className="media-heading">奧客</div>
                              <div className="media-text">
                                太陽餅裡面沒太陽！我要退貨！！
                              </div>
                            </div>
                            <small className="media-time">9小時之前</small>
                          </div>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to="#">
                          <div className="media d-flex align-items-start">
                            <div className="media-user">
                              <img src={customer} alt="" />
                            </div>
                            <div className="media-body">
                              <div className="media-heading">奧客</div>
                              <div className="media-text">
                                太陽餅裡面沒太陽！我要退貨！！
                              </div>
                            </div>
                            <small className="media-time">9小時之前</small>
                          </div>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to="#">
                          <div className="media d-flex align-items-start">
                            <div className="media-user">
                              <img src={customer} alt="" />
                            </div>
                            <div className="media-body">
                              <div className="media-heading">奧客</div>
                              <div className="media-text">
                                太陽餅裡面沒太陽！我要退貨！！
                              </div>
                            </div>
                            <small className="media-time">9小時之前</small>
                          </div>
                        </Link>
                      </Dropdown.Item>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
                <NavItem className="staff-info">
                  <div
                    style={{
                      padding: '0px 0.5rem 0.5rem',
                      textAlign: 'end',
                    }}
                  >
                    Book33
                  </div>
                  <div
                    className="staff-status"
                    style={{ padding: '0 0.5rem', fontSize: '14px' }}
                  >
                    <i className="fas fa-circle status-online"></i>上線
                  </div>
                </NavItem>
                <Dropdown as={NavItem}>
                  <Dropdown.Toggle as={NavLink}>
                    <div className="staff-avatar">
                      <img src={avatar} alt="" />
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-staff dropdown-menu-right">
                    <Dropdown.Item>
                      <Link to="/">
                        <i class="fas fa-home pr-2"></i>
                        回到首頁
                      </Link>
                      <div className="dropdown-divider"></div>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <i className="fas fa-user pr-2" />
                      個人資料
                      <div className="dropdown-divider"></div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={(e) => {
                        e.preventDefault()
                        logout()
                      }}
                    >
                      <i className="fas fa-sign-out-alt pr-2" />
                      登出
                      {/* <div className="dropdown-divider"></div> */}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </div>
          </Container>
        </Col>
      </div>
    </>
  )
}

export default Navbar
