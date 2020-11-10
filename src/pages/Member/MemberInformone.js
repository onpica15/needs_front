import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MemSidebar from './memmodules/MemSidebar'
import MemuInform from './memmodules/MemInformone'
import './member.scss'
import './member-rwd.scss'

function MemberInform() {
  return (
    <>
      <div className="container member ">
        <div className="row my-3">
          <div className="col-lg-2 col-sm-1">
            <MemSidebar />
          </div>
          <div className="col-lg-10 col-sm-12">
            <MemuInform />
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberInform
