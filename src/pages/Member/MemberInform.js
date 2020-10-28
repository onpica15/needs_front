import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MemSidebar from './memmodules/MemSidebar'
import MemuInform from './memmodules/MemInform'
import './member.scss'

function MemberInform() {
  return (
    <>
      <div className="container member ">
        <div className="row my-3">
          <MemSidebar />
          <MemuInform />
      </div>
      </div>
    </>
  )
}

export default MemberInform
