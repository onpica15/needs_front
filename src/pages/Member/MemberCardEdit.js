import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MemSidebar from './memmodules/MemSidebar'
import MemCardEdit from './memmodules/MemCardEdit'
import './member.scss'
import './member-rwd.scss'

function MemberCardEdit(props) {
  return (
    <>
      <div className="container member">
        <div className="row my-3">
          <MemSidebar {...props} />
          <MemCardEdit {...props} />
        </div>
      </div>
    </>
  )
}

export default MemberCardEdit
