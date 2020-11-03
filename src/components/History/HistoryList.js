import React from 'react'
import CartItem from './HistoryItem'

function HistoryList(props) {
  const { cart, updateCartUnits } = props

  return (
    <div>
      <div className="d-flex">
        {cart &&
          cart.map((item, index) => (
            <CartItem {...item} key={index} updateCartUnits={updateCartUnits} />
          ))}
      </div>
    </div>
  )
}

export default HistoryList
