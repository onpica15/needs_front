import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MemSidebar from './memmodules/MemSidebar'
import MemEcoin from './memmodules/MemEcoin'
import './member.scss'

function MemberEcoin() {
  return (
    <>
      <div className="container member ">
        <div className="row my-5">
          <MemSidebar />
          <MemEcoin />
      </div>
      </div>
    </>
  )
}

export default MemberEcoin
