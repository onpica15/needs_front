import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillMessage } from 'react-icons/ai'
// import { connect } from 'react-redux'
// import { login } from '../../actions/index'
import { useDispatch, useSelector } from 'react-redux'

import './Join.scss'

import Chat from './Chat'

const Join = (props) => {
  const [show, setShow] = useState(false)
  const username = useSelector((state) => state.authentication.username)
  const dispatch = useDispatch()
  // const [room, setRoom] = useState('商家')

  return (
    <>
      {show ? <Chat /> : ''}
      <Link
        className="customChat"
        onClick={() => setShow(true)}
        // to={`/chat?name=${username}&room=123`}
      >
        <AiFillMessage size={50} />
      </Link>
    </>
  )
}

export default Join
