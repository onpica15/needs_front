import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MemSidebar from './memmodules/MemSidebar'
// import MemCard from '../../components/MemCard'
import MemShop from './memmodules/MemShop'
import MemLike from './memmodules/MemLike'
import MemuInform from './memmodules/MemInform'
import './member.scss'

function Member() {
  return (
    <>
      <div className="container-fluid row member">
        <MemSidebar />
        {/* <MemCard /> */}
        <MemShop />
        {/* <MemLike /> */}
        {/* <MemuInform/> */}
      </div>
    </>
  )
}

export default Member
