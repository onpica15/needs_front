import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MemSidebar from './memmodules/MemSidebar'
import MemLike from './memmodules/MemLike'
import './member.scss'

function MemberLike() {
  return (
    <>
      <div className="container member ">
        <div className="row my-3">
          <MemSidebar />
          <MemLike />
        </div>
      </div>
    </>
  )
}

export default MemberLike
