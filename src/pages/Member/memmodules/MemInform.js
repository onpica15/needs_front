import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { BsFillBellFill } from 'react-icons/bs'
function MemInform() {
  return (
    <>
      <div className="meminform">
        <div className="maincard">
          <p className="font-m">
            <div className="d-flex wrapper">
              <p className="icons">
                <BsFillBellFill />
              </p>
              <p>通知中心</p>
            </div>
          </p>

          <div className="container">
            <div className="row justify-content-around align-self-center topside">
              <Link to="#" className="col-2 d-flex topsidebox">
                <div className="m-auto">
                  <p className="font-s">關注商家</p>
                </div>
              </Link>
              <Link href="#" className="col-2 d-flex topsidebox">
                <div className="m-auto">
                  <p className="font-s">關注商品</p>
                </div>
              </Link>

              <Link href="#" className="col-2 d-flex topsidebox">
                <div className="m-auto">
                  <p className="font-s">歷史關注</p>
                </div>
              </Link>
            </div>
          </div>

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
