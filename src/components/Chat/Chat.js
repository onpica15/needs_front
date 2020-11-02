import React, { useState, useEffect } from 'react'
import quertString from 'query-string'
import io from 'socket.io-client'

import './Chat.scss'

import InfoBar from './InfoBar/InfoBar'
import Input from './Input/Input'
import Messages from './Messages/Messages'

import { useDispatch, useSelector } from 'react-redux'

const ENDPOINT = 'http://localhost:5000'

let socket

const Chat = ({ location }) => {
  const name = useSelector((state) => state.authentication.user.user.username)
  console.log(name)
  const [room, setRoom] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    // const { name, room } = quertString.parse(location.search)

    socket = io(ENDPOINT)
    setRoom(room)

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
