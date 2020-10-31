import React from 'react'

import { Button } from 'react-bootstrap'
import './Product.scss'
// import { GrFavorite } from 'react-icons/gr'
// import { MdFavorite } from 'react-icons/md'

const Product = (props) => {
  const { id, title, img_path, price, addToCart } = props
  return (
    <>
      <div className="productItem col-lg-4 col-md-6 col-sm-12">
        <div className="productPic">
          <img src={img_path} alt=""></img>
        </div>
        <div className="textArea">
          <div className="title">{title}</div>
          <div className="price">NT$ {price}</div>
          <div className="d-flex justify-content-center">
            <Button
              className="cart"
              variant="danger"
              onClick={() =>
                addToCart({ id, title, img_path, price, units: 1 })
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

export default Product
