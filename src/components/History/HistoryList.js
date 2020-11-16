import React from 'react'
import CartItem from './HistoryItem'

function HistoryList(props) {
  const { cart } = props

  return (
    <div>
      <div className="d-flex">
        {cart && cart.map((item, index) => <CartItem {...item} key={index} />)}
      </div>
    </div>
  )
}

export default HistoryList
