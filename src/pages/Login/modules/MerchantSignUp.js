import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button, Form, Modal } from 'react-bootstrap'
import { FaUserCircle, FaLock, FaFacebook } from 'react-icons/fa'
import { AiFillGooglePlusCircle, AiFillTwitterCircle } from 'react-icons/ai'
import './MerchantSignUp.scss'

const MerchantSignUp = (props) => {
  const history = useHistory()
  const [submitted, setSubmitted] = useState(false)
  const [modalSuccessShow, setModalSuccessShow] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // const fd = new FormData(document.signUpFormData)
    // fetch('', {
    //   method: 'POST',
    //   body: fd,
    // })
    //   .then((r) => r.json())
    //   .then((obj) => {
    //     console.log('obj', obj)
    //     if (obj.success) {
    //       setModalSuccessShow(true)
    //     }
    //   })
    setModalSuccessShow(true)
    // .catch((error) => {
    //   console.log(error.toString())
    //   return error.toString()
    // })
  }

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
                <Form id="signUpFormData" onSubmit={handleSubmit}>
                  <Form.Group controlId="name">
                    <Form.Control type="text" placeholder="姓名" required />
                  </Form.Group>
                  <Form.Group controlId="mobile">
                    <Form.Control type="text" placeholder="手機" required />
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Control type="email" placeholder="信箱" required />
                  </Form.Group>
                  <Form.Group controlId="password">
                    <Form.Control type="password" placeholder="密碼" required />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    SIGNUP
                  </Button>
                </Form>
                <p>
                  <a href="#">NEEDS商店政策與規則</a>
                </p>
                <p>
                  點擊註冊代表您同意NEEDS之<a href="#">會員條款</a>與
                  <a href="#">客戶隱私權條款</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          className="signUpModal"
          centered
          show={modalSuccessShow}
          onHide={() => setModalSuccessShow(false)}
        >
          <Modal.Body>
            <h4>註冊成功</h4>
            <h4>馬上開始設計店鋪</h4>
            <Button
              onClick={() => {
                setModalSuccessShow(false)
                history.push('/')
              }}
            >
              出發
            </Button>
          </Modal.Body>
        </Modal>
      </div>
    </>
  )
}

export default MerchantSignUp
