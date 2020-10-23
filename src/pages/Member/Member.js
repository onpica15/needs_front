import React, { useState } from 'react'
import MemSidebar from '../../components/MemSidebar'
// import MemCard from '../../components/MemCard'
import MemShop from '../../components/MemShop'
import '../../styles/member.scss'

function App() {
  return (
    <>
      <div className="container-fluid row">
        <MemSidebar />
        {/* <MemCard /> */}
        <MemShop />
      </div>
    </>
  )
}

export default App
