import React from 'react'
import CartItem from './HistoryItem'

function HistoryList(props) {
  const { cart, updateCartUnits } = props
  console.log(cart)
  return (
    <div>
      <div className="d-flex">
        {cart &&
          cart.map((item) => (
            <CartItem
              {...item}
              key={item.id}
              updateCartUnits={updateCartUnits}
            />
          ))}
      </div>
    </div>
  )
}

export default HistoryList
