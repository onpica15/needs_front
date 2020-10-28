import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MemSidebar from './memmodules/MemSidebar'
import MemCard from './memmodules/Memcard'
import './member.scss'

function MemberCard() {
  return (
    <>
      <div className="container member ">
        <div className="row my-3">
          <MemSidebar />
          <MemCard />
      </div>
      </div>
    </>
  )
}

export default MemberCard
