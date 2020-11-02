import React from 'react'
import { Link } from 'react-router-dom'

import { GrClose } from 'react-icons/gr'

import './InfoBar.scss'
// import closeIcon from '../../icons/closeIcon.png'
// src = { closeIcon }

const InfoBar = (props) => {
  const { setShow, room } = props
  return (
    <>
      <div className="infoBar">
        <h5>123</h5>
        {/* <Link className="close" onClick={() => setShow(false)}>
          <GrClose size={20} />
        </Link> */}
      </div>
    </>
  )
}

export default InfoBar
