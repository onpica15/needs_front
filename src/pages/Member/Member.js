import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MemSidebar from './memmodules/MemSidebar'
import MemCard from './memmodules/Memcard'
import MemShop from './memmodules/MemShop'
// import MemLike from './memmodules/MemLike'
import MemuInform from './memmodules/MemInform'
import './member.scss'

function Member() {
  return (
    <>
      <div className="container member ">
        <div className="row my-5">
          <MemSidebar />
          {/* <MemCard /> */}
          <MemShop />
          {/* <MemLike /> */}
          {/* <MemuInform /> */}
        </div>
      </div>
    </>
  )
}

export default Member
