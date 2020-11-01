import React, { useState, useEffect } from 'react'
import quertString from 'query-string'
import io from 'socket.io-client'

import './Chat.scss'

import InfoBar from './InfoBar/InfoBar'
import Input from './Input/Input'
import Messages from './Messages/Messages'

import { useDispatch, useSelector } from 'react-redux'

const ENDPOINT = 'localhost:5000'

let socket

const Chat = ({ location }) => {
  const user = useSelector((state) => state.user)
  console.log(user)
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [room, setRoom] = useState('123')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    // const { user, room } = quertString.parse(location.search)

    socket = io(ENDPOINT)
    setName('123')
    setRoom('abc')

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
      <div className="container chat">
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
