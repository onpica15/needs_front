import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Row, Button, Accordion, Card } from 'react-bootstrap'
import { AiOutlineEdit, AiOutlineSave, AiOutlinePlus } from 'react-icons/ai'

const OrdersContent = (props) => {
  const { data } = props
  const [isEdited, SetIsEdited] = useState(false)

  const handleEdit = () => {
    SetIsEdited(!isEdited)
  }
  return (
    <>
      <div className="orderList">
        <Row className="titleSec">
          <div className="title">訂單編號</div>
          <div className="title">日期</div>
          <div className="title">總價</div>
          <div className="title">付款方式</div>
          <div className="title">訂單狀態</div>
          <div className="title">配送方式</div>
          <div className="actions">操作</div>
        </Row>

        {data.map((item, index) => {
          return (
            <div className="detailsSection" key={item.id}>
              <Row className="main">
                <div className="title">{item.order_number}</div>
                <div className="title">{item.order_date}</div>
                <div className="title">${item.amount}</div>
                <div className="title">{item.payment_type}</div>
                {isEdited ? (
                  <div className="title">hi</div>
                ) : (
                  <div className="title">{item.order_status}</div>
                )}

                <div className="title">
                  {item.delivery_details.delivery_type}
                </div>
                <div className="actions">
                  <Button variant="light" onClick={handleEdit}>
                    {isEdited ? (
                      <AiOutlineSave size="24px" color={`#28c76f`} />
                    ) : (
                      <AiOutlineEdit size="24px" />
                    )}
                  </Button>
                </div>
              </Row>
              <div className="addition">
                <p>
                  <AiOutlinePlus size="18px" className="mb-1" />
                  查看明細
                </p>

                {/* <Accordion>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Click me!
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion> */}
                <div className="productDetails">
                  <div className="w-25">{item.order_details.product_title}</div>
                  <div className="w-25">
                    {item.order_details.product_specification}
                  </div>
                  <div className="w-25">{item.order_details.quantity}</div>
                  <div className="w-25">{item.order_details.unit_price}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default OrdersContent
