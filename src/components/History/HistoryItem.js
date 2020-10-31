import React from 'react'

import { Row, Col } from 'react-bootstrap'

const HistoryItem = (props) => {
  const { id, title, img_path, outline, price, units, updateCartUnits } = props

  return (
    <>
      <Row>
        <Col md={2}>
          <div className="product-s">
            <img
              src={require('../../assets/img/products/1-paper/PT01_300x0.jpg')}
              alt=""
            />
          </div>
          <p className="mt-2 mb-0 product-s-title">{title}</p>
          <p className="mb-0">{outline}</p>
          <p className="text-point">{price}</p>
          {/* <button
            onClick={() =>
              updateCartUnits({
                id,
                units: units + 1,
              })
            }
          >
            +
          </button>
          <button onClick={() => updateCartUnits({ id, units: units - 1 })}>
            -
          </button> */}
        </Col>
      </Row>
    </>
  )
}

export default HistoryItem
