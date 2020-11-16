import React, { useState, useEffect } from 'react'

import ScrollToBottom from 'react-scroll-to-bottom'
import axios from 'axios'
import Message from './Message/Message'

import './Messages.scss'

const Messages = ({ messages, name, storeName }) => {
  const [historyMessage, setHistoryMessage] = useState([])
  // get histroyMessage
  useEffect(() => {
    const getHistoryMsg = async () => {
      const url = 'http://localhost:5000/chat'
      const res = await axios(url)
      console.log(res.data)
      setHistoryMessage(res.data)
    }
    getHistoryMsg()
  }, [])

  return (
    <ScrollToBottom className="messages">
      {historyMessage.map((msg) => (
        <div key={msg.id} className="messageContainer justifyStart">
          <p className="sendText">{msg.to_name}</p>
          <div className="messageBox merchantText">
            <p className="messageText ">{msg.message}</p>
          </div>
          <p className="timestamp">{msg.time}</p>
        </div>
      ))}
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} storeName={storeName} />
        </div>
      ))}
    </ScrollToBottom>
  )
}

export default Messages
