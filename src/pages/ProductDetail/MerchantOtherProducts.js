import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'

function MerchantOtherProducts(props) {
  const { merchantInfo } = props
  return (
    <div>
      <Row>
        {merchantInfo.products &&
          merchantInfo.products.map((value, index) => {
            return (
              <Col md={2}>
                <div className="product-s">
                  {value.image ? (
                    <img
                      className="merchant-logo rounded"
                      src={require(`../../assets/img/products/${value.image}`)}
                      alt=""
                    />
                  ) : (
                    ''
                  )}
                </div>
                <div className="minh-66">
                  <p className="mt-2 mb-0 product-s-title">{value.title}</p>
                </div>
                {value.sale_price ? (
                  <p className="text-point">
                    NT${value.sale_price}
                    <span className="ml-2 subtitle">
                      <del>NT${value.price}</del>
                    </span>
                  </p>
                ) : (
                  <p className="text-point">NT${value.price}</p>
                )}
              </Col>
            )
          })}
      </Row>
    </div>
  )
}

export default MerchantOtherProducts
