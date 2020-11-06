import React from 'react'
import { Button } from 'react-bootstrap'

import './Product.scss'
function ProductViewList(props) {
  const { id, title, image_path, sale_price, price, outline, addToCart } = props
  return (
    <>
      <div className="productListItem d-flex col-12">
        <div className="productPic">
          <img
            src={`http://localhost:5000/img/products/${image_path}`}
            alt=""
          ></img>
        </div>
        <div className="textArea">
          <div className="title">{title}</div>
          <div className="outline">{outline}</div>
          <div className="d-flex justify-content-center">
            <div className="priceDiscount">
              NT$ {sale_price ? sale_price : price}
            </div>
            <div className="price">{sale_price ? ' NT$ ' + price : ''}</div>
          </div>
          <div className="d-flex justify-content-center">
            <Button
              className="cart"
              variant="danger"
              onClick={() =>
                addToCart({ id, title, image_path, price, units: 1 })
              }
            >
              加入購物車
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductViewList
