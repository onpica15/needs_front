import React, { useState } from 'react'
import { Col, Row, Button, Modal, Form } from 'react-bootstrap'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import Axios from 'axios'

function AddAdsModal() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const sendData = () => {
    const d = {
      title: document.form1.title.value,
      budget: document.form1.title.budget,
      bid: document.form1.title.bid,
      startdate: document.form1.title.startdate,
      enddate: document.form1.title.enddate,
    }
    Axios.post('http://localhost:5000/dashboard/addnewads', d).then(
      (response) => {
        console.log(response.data)
      }
    )
  }
  return (
    <>
      <Button className="btn-primary" onClick={handleShow}>
        <div className="addAds">新增廣告</div>
      </Button>
      <Modal className="ads-modal-wrapper" show={show} onHide={handleClose}>
        <Form
          name="form1"
          method="post"
          onSubmit={() => {
            sendData()
            return false
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>新增首頁廣告</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col xs={12}>
                <Row>
                  <Col xs={3}></Col>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label className="w-100">
                        <Form.File id="cover" label="cover">
                          <input type="file" id="cover" className="d-none" />
                          <div className="upload-ads-img">
                            <AiOutlinePlusCircle size={60} color="#787878" />
                          </div>
                        </Form.File>
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col xs={3}></Col>
                </Row>
                <Form.Group controlId="forTitle">
                  <Form.Label>廣告名稱</Form.Label>
                  <Form.Control type="text" placeholder="發大財" name="title" />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                <Form.Group controlId="forBudget">
                  <Form.Label>投放預算</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="最少1000"
                    name="budget"
                  />
                </Form.Group>
                <Form.Group controlId="forBid">
                  <Form.Label>點擊出價</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="決定你在首頁出現順序"
                    name="bid"
                  />
                </Form.Group>
                <Form.Group controlId="forStartDate">
                  <Form.Label>起始時間</Form.Label>
                  <Form.Control type="date" placeholder="" name="startdate" />
                </Form.Group>
                <Form.Group controlId="forEndDate">
                  <Form.Label>結束時間</Form.Label>
                  <Form.Control type="date" placeholder="" name="enddate" />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={handleClose}>
              取消
            </Button>
            <Button variant="primary" type="submit">
              上傳廣告
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default AddAdsModal
