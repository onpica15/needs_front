import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { RiMessage2Fill } from 'react-icons/ri'
function MemComment() {
  return (
    <>
      <div className="meminform">
        <div className="maincard">
          <p className="font-m">
            <div className="d-flex wrapper">
              <p className="icons">
                <RiMessage2Fill />
              </p>
              <p>我的評論</p>
            </div>
          </p>

          <div className="container">
            <div className="row justify-content-around align-self-center topside">
              <Link to="#" className="col-2 d-flex topsidebox">
                <div className="m-auto">
                  <p className="font-s">歷史評論</p>
                </div>
              </Link>
              <Link href="#" className="col-2 d-flex topsidebox">
                <div className="m-auto">
                  <p className="font-s">尚未評論</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="informbar d-flex justify-content-center">
            <div className="sign"></div>
            <div className="textbox">
              <div>
                <p>海景手札</p>
              </div>
              <div>
                <p>非常有質感的手札,好滿意！</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemComment
