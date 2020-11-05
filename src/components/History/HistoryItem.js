import React from 'react'

import './historyItem.scss'

const HistoryItem = (props) => {
  const {
    id,
    title,
    image_path,
    outline,
    price,
    units,
    updateCartUnits,
  } = props

  return (
    <>
      <div className="historyItem">
        <div className="picture">
          <img
            src={`http://localhost:5000/img/products/${image_path}`}
            alt=""
          />
        </div>
        <p className="mt-2 mb-0 product-s-title">{title}</p>
        <p className="mb-0">{outline}</p>
        <p className="text-point">{price}</p>
        {/* <p className="text-point">{price * units}</p> */}
        {/* <button
          onClick={() => updateCartUnits({ id, price, units: units + 1 })}
        >
          +
        </button>
        <button
          onClick={() => updateCartUnits({ id, price, units: units - 1 })}
        >
          -
        </button> */}
      </div>
    </>
  )
}

export default HistoryItem
