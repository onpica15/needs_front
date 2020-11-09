import React from 'react'
import { useSelector } from 'react-redux'
import { Row, Dropdown, Form } from 'react-bootstrap'
import { AiOutlineEdit } from 'react-icons/ai'

const ProductsContent = (props) => {
  const { data } = props
  return (
    <>
      <div className="productList">
        <Row className="titleSec">
          <Form.Check aria-label="option 1" className="checkbox " />
          <div className="blankbox"></div>
          <div className="productTitle">商品名稱</div>
          <div className="specification">規格</div>
          <div className="title">價格</div>
          <div className="title">數量</div>
          <div className="title">已售出</div>
          <div className="actions">操作</div>
        </Row>

        {data.map((item, index) => {
          return (
            <Row className="detailsSection">
              <Form.Check
                aria-label="option 1"
                key={item.id}
                className="checkbox"
              />
              <div className="productImg">
                <img
                  src={`http://122.116.38.12:5050/img/products/${
                    item.image_path.split(',')[0]
                  }`}
                  alt={item.title}
                />
              </div>
              <div className="productTitle">{item.title}</div>
              <div className="specification">
                {item.specification.replace(/,/g, ',\n')}
              </div>
              <div className="title unitPrice">${item.price}</div>
              <div className="title stock">{item.stocks}</div>
              <div className="title soldAmount">1</div>
              <Dropdown className="actions">
                <Dropdown.Toggle id="dropdown-basic" variant="light">
                  <AiOutlineEdit size="24px" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">編輯</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">下架</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">即時預覽</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Row>
          )
        })}
      </div>
    </>
  )
}

export default ProductsContent
