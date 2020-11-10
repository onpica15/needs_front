import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

import './Chat.scss'

import InfoBar from './InfoBar/InfoBar'
import Input from './Input/Input'
import Messages from './Messages/Messages'

import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const ENDPOINT = 'http://localhost:5000'

let socket

const Chat = () => {
  const { search } = useLocation()
  const searchParams = new URLSearchParams(search)
  const name = useSelector((state) => state.authentication.user.user.username)
  const room = searchParams.get('room') + name
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    socket = io(ENDPOINT)

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error)
      }
    })
  }, [ENDPOINT])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message])
    })
  }, [])

  const sendMessage = (event) => {
    event.preventDefault()

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

  return (
    <div className="outerContainer">
      <div className="chat">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  )
}

export default Chat
