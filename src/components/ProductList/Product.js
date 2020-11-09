import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import './Product.scss'
// import { GrFavorite } from 'react-icons/gr'
// import { MdFavorite } from 'react-icons/md'

const Product = (props) => {
  const { id, title, image_path, price, skus, addToCart } = props

  return (
    <>
      <div
        className="productItem col-lg-4 col-md-6
      col-sm-6 col-xs-12"
      >
        <Link to={`/products/${id}`}>
          <div className="productPic">
            <img
              src={`http://localhost:5000/img/products/${image_path}`}
              alt=""
            ></img>
          </div>
        </Link>
        <div className="textArea">
          <div className="title">{title}</div>
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

export default Product
