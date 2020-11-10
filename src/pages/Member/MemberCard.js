import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MemSidebar from './memmodules/MemSidebar'
import MemCard from './memmodules/Memcard'
import './member.scss'
import './member-rwd.scss'

function MemberCard(props) {
  return (
    <>
      <div className="container member">
        <div className="row my-3">
          <div className="col-3">
            <MemSidebar {...props} />
          </div>
          <div className="col-9">
            <MemCard {...props} />
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberCard
