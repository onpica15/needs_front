import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import { FaTimes } from 'react-icons/fa'
import * as storage from './localStorage'

function CartItem(props) {
  const {
    product,
    merchantCarts,
    setMerchantCarts,
    cart,
    setCart,
    checkOne,
  } = props

  function updateSkuAmount(skuId, increment) {
    console.log(skuId, increment)
    setMerchantCarts(
      merchantCarts.map((cartItems) => {
        cartItems.products.map((item) => {
          if (item.skuid === skuId) {
            console.log('found')
            item.amount = Math.min(
              Math.max(item.amount + increment, 1),
              item.stocks
            )
            const newCartItem = { skuid: skuId, amount: item.amount }
            setCart(
              storage.saveCartItems(
                storage.replaceCartItem(storage.getCartItems(), newCartItem)
              )
            )
          }
          return item
        })
        return cartItems
      })
    )
  }

  return (
    <>
      <Row className="cart-item py-3 m-0">
        <Col md={5} className="d-flex">
          <div className="form-check align-self-center item-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={product.isChecked}
              onChange={(e) => checkOne(product.skuid, e.target.checked)}
            />
          </div>
          <div className="item-product ml-4 d-flex">
            <img
              src={`http://localhost:5000/img/products/${product.image_s}`}
              alt=""
            />
            <div className="ml-5">
              <p className="item-title">{product.title}</p>
              <span>
                規格：
                {product.specification === '-' ? '單一規格' : product.specification}
              </span>
            </div>
          </div>
        </Col>
        <Col md={2} className="text-right align-self-center pr-5">
          <p className="font-point mb-1">
            NT$
            {product.sale_price ? product.sale_price : product.price}
          </p>
          <del>{product.sale_price ? 'NT$' + product.price : ''}</del>
        </Col>
        <Col md={3} className="d-flex">
          <Form.Group className="mb-0 align-self-center">
            <div
              className="btn-group border rounded w-75 quantity-group"
              role="group"
              aria-label="Basic example"
            >
              <button
                type="button"
                className="btn btn-sm border-right px-3"
                onClick={() => updateSkuAmount(product.skuid, -1)}
              >
                -
              </button>
              <Form.Control
                type="number"
                value={product.amount}
                className="quantity border-0 rounded-0"
                // onChange={(e) => {
                //   setQuantity(e.target.value)
                // }}
                // onBlur={(e) => {
                //   setQuantity(
                //     Math.min(
                //       Math.max(e.target.value, 1),
                //       sku.stocks
                //     )
                //   )
                // }}
              />
              <button
                type="button"
                className="btn btn-sm border-left px-3"
                onClick={() => updateSkuAmount(product.skuid, 1)}
              >
                +
              </button>
            </div>
          </Form.Group>
        </Col>
        <Col md={1} className="text-right align-self-center font-point p-0">
          NT$
          {product.sale_price
            ? product.sale_price * product.amount
            : product.price * product.amount}
        </Col>
        <Col md={1} className="text-right align-self-center">
          <FaTimes />
        </Col>
      </Row>
      <div className="item-hr"></div>
    </>
  )
}

export default CartItem
