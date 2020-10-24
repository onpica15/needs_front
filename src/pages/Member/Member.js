import React, { useState } from 'react'
import MemSidebar from './memmodules/MemSidebar'
// import MemCard from '../../components/MemCard'
import MemShop from './memmodules/MemShop'
import './member.scss'

function App() {
  return (
    <>
      <div className="container-fluid row member">
        <div className="row">
          <div className="col-md-2 offset-2">
            <MemSidebar />
          </div>
        </div>

        {/* <MemCard /> */}
        <div className="col-md-8">
          <MemShop />
        </div>
      </div>
    </>
  )
}

export default App
