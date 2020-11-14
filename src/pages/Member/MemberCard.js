import React, { useState } from 'react'
import MemSidebar from './memmodules/MemSidebar'
import MemCard from './memmodules/MemCard'
import './member.scss'

function MemberCard(props) {
  const [showsidebar, setShowsidebar] = useState(false)
  const hiddenSidebar = () => {
    setShowsidebar(!showsidebar)
  }

  return (
    <>
      <button claccName="hiddenBtn" onClick={hiddenSidebar}>
        >>>>>>>>>>>>
      </button>
      <div className="container member">
        <div className="row my-3 d-flex">
          <div
            className="col-lg-2"
            style={{
              transition: 'all .3s ease',
              transform: showsidebar ? 'translateX(-500px)' : 'translateX(0px)',
            }}
          >
            <MemSidebar {...props} />
          </div>

          <div className="col-lg-10">
            <MemCard {...props} />
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberCard
