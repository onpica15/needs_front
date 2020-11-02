import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MemSidebar from './memmodules/MemSidebar'
import MemShop from './memmodules/MemShop'
import './member.scss'
import './member-rwd.scss'

function MemberShop() {
  return (
    <>
      <div className="container member ">
        <div className="row my-3">
          <MemSidebar />
          <MemShop />
        </div>
      </div>
    </>
  )
}

export default MemberShop
