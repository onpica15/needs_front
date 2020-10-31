import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { BsPersonFill } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'
const MemCard = () => {
  return (
    <>
      <div className="memcard">
        <div className="col-md-10">
          <div className="maincard">
            <p className="font-m">
              <div className="d-flex wrapper">
                <p className="icons">
                  <BsPersonFill />
                </p>
                <p>會員資料</p>

                <Link to="#" className="icons">
                  <FaEdit />
                </Link>
              </div>
            </p>
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <ul>
                    <li>姓名</li>
                    <li>性別</li>
                    <li>生日</li>
                    <li>年齡</li>
                    <li>地址</li>
                    <li>電話</li>
                    <li>Ｅmail</li>
                  </ul>
                </div>

                <div className="col-md-5">
                  <ul>
                    <li>信用卡資料</li>
                    <li>e幣</li>
                    <li>購物紀錄</li>
                    <li>入會時間</li>
                    <li>退貨紀錄</li>
                    <li>退會時間</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemCard
