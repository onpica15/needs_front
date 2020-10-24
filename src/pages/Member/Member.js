import React, { useState } from 'react'
import MemSidebar from './memmodules/MemSidebar'
// import MemCard from './memmodules/Memcard'
import MemShop from './memmodules/MemShop'
import './member.scss'

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <MemSidebar />

          {/* <MemCard /> */}

          <MemShop />
        </div>
      </div>
    </>
  )
}

export default App
