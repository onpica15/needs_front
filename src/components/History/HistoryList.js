import React from 'react'
import CartItem from './HistoryItem'

function HistoryList(props) {
  const { cart, updateCartUnits } = props
  console.log(cart)
  return (
    <div>
      <ul className="list pl0 mt0 measure center">
        {cart &&
          cart.map((item) => (
            <CartItem
              {...item}
              key={item.id}
              updateCartUnits={updateCartUnits}
            />
          ))}
      </ul>
    </div>
  )
}

export default HistoryList
