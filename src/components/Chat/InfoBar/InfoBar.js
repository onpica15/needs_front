import React from 'react'

import './InfoBar.scss'
// import closeIcon from '../../icons/closeIcon.png'
// src = { closeIcon }

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      {/* <img className='onlineIcon' alt='online image'></img> */}
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      {/* <a href='/'><img alt='close image'></img></a> */}
    </div>
  </div>
)

export default InfoBar
