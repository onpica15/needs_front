import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
function MemInform() {
  return (
    <>
      <div className="meminform container">
        <div className="row">
          <div className="informbar d-flex justify-content-start">
            <div className="sign"></div>
            <div className="textbox">
              <div>
                <p>一分之一工作室</p>
              </div>
              <div>
                <p>*****</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemInform
