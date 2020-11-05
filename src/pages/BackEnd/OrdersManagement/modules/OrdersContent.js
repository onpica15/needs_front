import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Row, Button, Accordion, Card } from 'react-bootstrap'
import { AiOutlineEdit, AiOutlineSave, AiOutlinePlus } from 'react-icons/ai'

const OrdersContent = (props) => {
  const { data } = props
  const [isEdited, SetIsEdited] = useState(false)
  const [detailsShow, setDetailsShow] = useState(false)

  const handleEdit = () => {
    SetIsEdited(!isEdited)
  }
  const handleShow = () => {
    setDetailsShow(!detailsShow)
  }

  return (
    <>
      <div className="orderList">
        <Row className="titleSec">
          <div className="title">訂單編號</div>
          <div className="title">訂購人</div>
          <div className="title">日期</div>
          <div className="title">總價</div>
          <div className="title">付款方式</div>
          <div className="title">訂單狀態</div>
          <div className="title">配送方式</div>
          <div className="actions">操作</div>
        </Row>

        {data.map((item, index) => {
          return (
            <div className="detailsSec" key={item.id}>
              <Row className="main">
                <div className="title">{item.order_number}</div>
                <div className="title">{item.order_member_name}</div>
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
                <p onClick={handleShow}>
                  <AiOutlinePlus size="18px" className="mb-1" />
                  查看明細
                </p>

                {detailsShow ? (
                  <div className="orderDetails">
                    <div className="card mb-3">
                      <div className="card-header ">商品明細</div>
                      <div className="card-title d-flex">
                        <div className="blankBox">商品圖</div>
                        <div className="col-4">商品名稱</div>
                        <div className="col-2">規格</div>
                        <div className="col-2">數量</div>
                        <div className="col-2">金額</div>
                      </div>
                      <div className="card-body d-flex align-items-center">
                        <div className="productImg">
                          <img
                            src={`http://122.116.38.12:5050/img/products/${item.order_details.product_img_path}`}
                            alt={item.order_details.product_title}
                          />
                        </div>
                        <div className="col-4">
                          {item.order_details.product_title}
                        </div>
                        <div className="col-2">
                          {item.order_details.product_specification}
                        </div>
                        <div className="col-2">
                          {item.order_details.quantity}
                        </div>
                        <div className="col-2">
                          $
                          {item.order_details.quantity *
                            Number(item.order_details.unit_price)}
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">配送明細</div>
                      <div className="card-title d-flex">
                        <div className="col-2">姓名</div>
                        <div className="col-2">電話</div>
                        <div className="col-6">地址</div>
                      </div>
                      <div className="card-body d-flex align-items-center">
                        <div className="col-2">
                          {item.delivery_details.delivery_name}
                        </div>
                        <div className="col-2">
                          {item.delivery_details.phone_number}
                        </div>
                        <div className="col-6">
                          {item.delivery_details.address}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default OrdersContent
