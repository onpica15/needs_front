import React, { useState, useEffect } from 'react'
import { AiOutlineVerticalAlignTop, AiOutlineMessage } from 'react-icons/ai'
import { useSelector } from 'react-redux'

// Chat component
import Chat from './Chat/Chat'
import './Chat/Chat.scss'

const FixedButtons = (props) => {
  const isLogin = useSelector((state) => state.authentication.loggedIn)
  const loginUser = useSelector((state) => state.authentication.user)

  const [showChat, setShowChat] = useState(false)
  const showChatToggle = () => {
    showChat ? setShowChat(false) : setShowChat(true)
  }

  // useEffect(() => {
  //     showChat ? setShowChat(false) : setShowChat(true)
  //   }
  // }, [showChat])

  return (
    <>
      <div className="fixedBtn">
        <div className="toTop">
          <AiOutlineVerticalAlignTop
            size="28px"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>
        <div className="toSupport">
          <AiOutlineMessage
            onClick={() => showChatToggle(showChatToggle)}
            to={`/products/`}
            size="25px"
          />
        </div>
      </div>
      {/* <div style={{ display: showChat ? 'block' : 'none' }}>
        <Chat showChatToggle={showChatToggle} />
      </div> */}

      <div>{showChat ? <Chat showChatToggle={showChatToggle} /> : null}</div>
    </>
  )
}

export default FixedButtons
