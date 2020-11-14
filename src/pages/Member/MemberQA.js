import React from 'react'
import MemSidebar from './memmodules/MemSidebar'
import MemQA from './memmodules/MemQA'
import './member.scss'

function MemberShop() {
  return (
    <>
      <div className="container member ">
        <div className="row my-3">
          <div className="col-lg-2 col-sm-1">
            <MemSidebar />
          </div>
          <div className="col-lg-10 col-sm-12">
            <MemQA />
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberShop
