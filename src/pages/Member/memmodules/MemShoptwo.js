import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
const MemShoptwo = () => {
  return (
    <>
      <div className="memshop">
        <div className="card">
          <h4>
            <div className="d-flex wrapper">
              <div className="icons">
                <FaShoppingBag />
              </div>
              購買清單
            </div>
          </h4>

          <div className="container">
            <div className="row justify-content-center">
              <div className="text-center">
                <div className="card-header">
                  <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                      <a className="nav-link box align-self-center" href="#">
                        <span>購買清單</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        歷史清單
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        待付款
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        待出貨
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        待收貨
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link disabled"
                        href="#"
                        tabindex="-1"
                        aria-disabled="true"
                      >
                        取消
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <div className="d-flex fo">
                      <div>訂購編號</div>
                      <div>20201006_SC4_0003816</div>
                    </div>
                  </h5>
                  <p className="card-text">
                    <div className="shoppinglist">
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
                              <div>
                                <div>南國的孩子 手寫數字章 (22個入)</div>
                                <div>規格：單一規格</div>
                              </div>
                            </td>
                            <td>2020/10/06</td>
                            <td>NT$780</td>
                            <td>3</td>
                            <td>NT$2340</td>
                            <td>完成Ｖ</td>
                          </tr>
                        </tbody>
                        <tbody bgcolor="white">
                          <tr>
                            <td className="d-flex">
                              <div className="box"></div>
                              <div>
                                <div>南國的孩子 手寫數字章 (22個入)</div>
                                <div>規格：單一規格</div>
                              </div>
                            </td>
                            <td>2020/10/06</td>
                            <td>NT$780</td>
                            <td>3</td>
                            <td>NT$2340</td>
                            <td>完成Ｖ</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </p>
                  <a href="#" className="btn btn-primary">
                    詳細清單
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemShoptwo
