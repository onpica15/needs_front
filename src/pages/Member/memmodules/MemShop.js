import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { FaShoppingBag } from 'react-icons/fa'
function MemShop() {
  return (
    <>
      <div className="memshop">
        <div className="maincard">
          <p className="font-m">
            <div className="d-flex wrapper">
              <p className="icons">
                <FaShoppingBag />
              </p>
              <p>購買清單</p>
            </div>
          </p>

          <div className="container">
            <div className="row justify-content-around align-self-center topside">
              <Link href="#" className="col-2 d-flex topsidebox">
                <div className="m-auto">
                  <p className="font-s">歷史清單</p>
                </div>
              </Link>
              <Link href="#" className="col-2 d-flex topsidebox">
                <div className="m-auto">
                  <p className="font-s">待付款</p>
                </div>
              </Link>

              <Link href="#" className="col-2 d-flex topsidebox">
                <div className="m-auto">
                  <p className="font-s">待出貨</p>
                </div>
              </Link>

              <Link href="#" className="col-2 d-flex topsidebox">
                <div className="m-auto">
                  <p className="font-s">待收貨</p>
                </div>
              </Link>

              <Link href="#" className="col-2 d-flex topsidebox">
                <div className="m-auto">
                  <p className="font-s">取消</p>
                </div>
              </Link>

              <div className="shoppinglist">
                <div className="d-flex fo">
                  <div>訂購編號</div>
                  <div>20201006_SC4_0003816</div>
                </div>

                <table className="table table-striped listhead">
                  <thead>
                    <tr>
                      <th className="">日本雙山</th>
                      <th className="">訂購日期</th>
                      <th className="">單價</th>
                      <th className="">數量</th>
                      <th className="">小計</th>
                      <th className="">狀態</th>
                    </tr>
                  </thead>
                  <tbody bgcolor="white">
                    <tr>
                      <td className="d-flex">
                        <div className="box"></div>
                        <div className="align-self-center">
                          <p className="font-s">
                            南國的孩子 手寫數字章 (22個入)
                          </p>
                          <p className="font-s">規格：單一規格</p>
                        </div>
                      </td>
                      <td>2020/10/06</td>
                      <td>NT$780</td>
                      <td>3</td>
                      <td>NT$2340</td>
                      <td>Ｖ</td>
                    </tr>
                  </tbody>
                  <tbody bgcolor="white">
                    <tr>
                      <td className="d-flex">
                        <div className="box"></div>
                        <div className="align-self-center">
                          <p className="font-s">
                            南國的孩子 手寫數字章 (22個入)
                          </p>
                          <p className="font-s">規格：單一規格</p>
                        </div>
                      </td>
                      <td>2020/10/06</td>
                      <td>NT$780</td>
                      <td>3</td>
                      <td>NT$2340</td>
                      <td>Ｖ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemShop
