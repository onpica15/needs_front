import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import './Product.scss'
function ProductViewList(props) {
  const { id, title, image_path, price, outline, skus, addToCart } = props
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
              NT$ {skus[0].sale_price ? skus[0].sale_price : skus[0].price}
            </div>
            <div className="price">
              {skus[0].sale_price ? ' NT$ ' + skus[0].price : ''}
            </div>
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
