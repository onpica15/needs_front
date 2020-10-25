import React from 'react'

import './Input.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

const Input = ({ setMessage, sendMessage, message }) => (
    <form className="form">
            <button className="fab fab_camera">
                <FontAwesomeIcon icon={faCamera} className="faCamera"/>
            </button>
        <textarea
            className='input'
            type='text'
            placeholder='Type a message..'
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null} />
        <button className="fab fab_send" onClick={e => sendMessage(e)}>
            <FontAwesomeIcon icon={faShare} />
        </button>

    </form >
)

export default Input