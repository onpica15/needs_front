import React, { useState } from 'react'
import { Col, Row, Button, Modal } from 'react-bootstrap'
import { AiOutlinePlusCircle } from 'react-icons/ai'

function AddAdsModal() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <Button className="btn-primary" onClick={handleShow}>
        <div className="addAds">新增廣告</div>
      </Button>
      <Modal className="ads-modal-wrapper" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>新增首頁廣告</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={3}></Col>
            <Col xs={6}>
              <div className="upload-ads-img">
                <AiOutlinePlusCircle size={60} color="#787878" />
              </div>
            </Col>
            <Col xs={3}></Col>
          </Row>
          <Row>
            <Col xs={12}></Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            取消
          </Button>
          <Button variant="primary" onClick={handleClose}>
            上傳廣告
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddAdsModal
