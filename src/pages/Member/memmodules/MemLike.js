import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
function MemLike() {
  return (
    <>
      <div className="memlike container">
        <div className="row">
          <div className="likecard">
            <div className="mark"></div>
            <div>
              <span>一分之一工作室</span>
            </div>
            <div>
              <span>*****</span>
            </div>
            <div>
              <span>粉絲數量 267</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemLike
