import React from 'react'
import {
  AiOutlineVerticalAlignTop,
  AiOutlineShoppingCart,
  AiOutlineMessage,
} from 'react-icons/ai'

const FixedButtons = () => {
  return (
    <>
      <div className="fixedBtn">
        <div className="toTop">
          <AiOutlineVerticalAlignTop
            size="28px"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>
        <div className="toCart">
          <AiOutlineShoppingCart size="28px" />
        </div>
        <div className="toSupport">
          <AiOutlineMessage size="28px" />
        </div>
      </div>
    </>
  )
}

export default FixedButtons
