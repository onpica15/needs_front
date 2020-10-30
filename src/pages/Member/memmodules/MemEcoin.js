import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { FaCoins } from 'react-icons/fa'
function MemEcoin() {
  return (
    <>
      <div className="memecoin">
        <div className="maincard">
          <p className="font-m">
            <div className="d-flex wrapper">
              <p className="icons">
                <FaCoins />
              </p>
              <p>Ｅcoin</p>
            </div>
          </p>

          <div className="container">
            <div className="row justify-content-around align-self-center topside">
              <Link href="#" className="col-2 d-flex topsidebox">
                <div className="m-auto">
                  <p className="font-s">代幣查詢</p>
                </div>
              </Link>
              <Link href="#" className="col-2 d-flex topsidebox">
                <div className="m-auto">
                  <p className="font-s">發放紀錄</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="container d-flex justify-content-around">
            <div className="row coincard ">
              <div className="m-auto one">
                <p className="font-m my-3">代幣查詢</p>
                <p className="font-m my-3">10</p>
              </div>
            </div>
            <div className="row  justify-content-around coincard ">
              <div className="m-auto two">
                <p className="font-m my-3">待發放</p>
                <p className="font-m my-3">50</p>
              </div>
            </div>
            <div className="row  justify-content-around coincard ">
              <div className="m-auto three">
                <p className="font-m my-3">即將到期</p>
                <p className="font-m my-3">0</p>
              </div>
            </div>
          </div>
          <div className="explain">
            <p className="font-m">
              E coin說明
              <br />
            </p>
            <p className="font-s">
              訂單金額每滿100元，可獲得1點。
              <br />
              訂單金額以單次出貨的總金額計算，扣除運費與取消訂單的商品。
              <br />
              贈送的E coin，將於訂單出貨過鑑賞期後發放。
              <br />
              E coin可跨店使用，折抵無上限，但不可折抵運費。
              <br />
              折抵後購物金額(不含運費)至少為1元。
              <br />
              E
              coin效期為30天起，將依行銷活動贈予之規定時間不等，請於到期日前使用完畢，E
              coin過期即失效亦無法回補。
              <br />
              詳情請見E coin使用說明。
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemEcoin
