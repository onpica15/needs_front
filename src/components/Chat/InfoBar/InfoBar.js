import React from 'react'

import { GrClose } from 'react-icons/gr'

import './InfoBar.scss'

const InfoBar = (props) => {
  const { storeName } = props
  return (
    <>
      <div className="infoBar">
        <h5>{storeName}</h5>
        {/* <Link className="close" onClick={() => setShow(false)}>
          <GrClose size={20} />
        </Link> */}
      </div>
    </>
  )
}

export default InfoBar
