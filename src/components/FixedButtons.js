import React, { useState } from 'react'
import {
  AiOutlineVerticalAlignTop,
  AiOutlineShoppingCart,
  AiOutlineMessage,
} from 'react-icons/ai'

// Chat component
import Chat from './Chat/Chat'
import './Chat/Chat.scss'

const FixedButtons = (props) => {
  const [showChat, setShowChat] = useState(false)
  const showChatToggle = () => {
    showChat ? setShowChat(false) : setShowChat(true)
  }

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
          <AiOutlineMessage
            onClick={() => showChatToggle(showChatToggle)}
            size="28px"
          />
        </div>
      </div>
      {/* <div style={{ display: showChat ? 'block' : 'none' }}>
        <Chat showChatToggle={showChatToggle} />
      </div> */}
    </>
  )
}

export default FixedButtons
