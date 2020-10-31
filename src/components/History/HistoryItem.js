import React from 'react'

import './historyItem.scss'

const HistoryItem = (props) => {
  const { id, title, img_path, outline, price, units, updateCartUnits } = props

  return (
    <>
      <div className="historyItem">
        <div className="picture">
          <img
            src={require('../../assets/img/products/1-paper/PT01_300x0.jpg')}
            alt=""
          />
        </div>
        <p className="mt-2 mb-0 product-s-title">{title}</p>
        <p className="mb-0">{outline}</p>
        <p className="text-point">{price}</p>
        <p className="text-point">{price * units}</p>
        <button
          onClick={() => updateCartUnits({ id, price, units: units + 1 })}
        >
          +
        </button>
        <button
          onClick={() => updateCartUnits({ id, price, units: units - 1 })}
        >
          -
        </button>
      </div>
    </>
  )
}

export default HistoryItem
