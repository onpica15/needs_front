import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MemSidebar from './memmodules/MemSidebar'
import MemComment from './memmodules/MemComment'
import './member.scss'
import './member-rwd.scss'

function MemberComment() {
  return (
    <>
      <div className="container member ">
        <div className="row my-3">
          <MemSidebar />
          <MemComment />
        </div>
      </div>
    </>
  )
}

export default MemberComment
