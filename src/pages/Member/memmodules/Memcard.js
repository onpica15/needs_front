import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'
import axios from 'axios' // import memcarddata from './memcarddata.json'

import { useSelector } from 'react-redux' //引入redux
import { BsPersonFill } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'

const MemCard = () => {
  const [memcarddata, setMemcarddata] = useState([])
  const [dataLoading, setDataLoading] = useState(false)

  const isLogin = useSelector((state) => state.authentication.loggedIn) //redux判斷是否為lodin狀態
  const loginUser = useSelector((state) => state.authentication.user) //redux初始值設定為空值
  //axios get data
  //先接收資料後再判斷memid,val=memid從前端先判斷需求是否有傳到後端
  const fetchPosts = async (val) => {
    setDataLoading(true)
    let url = `http://localhost:5000/member?id=${val}`
    const res = await axios.get(url).catch((err) => console.log('Error'.err))
    setMemcarddata(res.data)
    setDataLoading(false)
  }

  useEffect(() => {
    if (isLogin) {
      const memId = loginUser.user.id //確認為login狀態後,在取其id值
      fetchPosts(memId)
    } else {
      window.location.href = '/login' //若非login狀態則跳轉至login畫面
    }
  }, [])
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
                <div className="col-md-6">
                  {memcarddata.map((item, index) => {
                    return (
                      <ul>
                        <li className="d-flex">
                          <div className="item">姓名</div>
                          <span>{item.name}</span>
                        </li>
                        <li className="d-flex">
                          <div className="item">性別</div>
                          <span>{item.gender}</span>
                        </li>
                        <li className="d-flex">
                          <div className="item">生日</div>
                          <span>{item.birthday}</span>
                        </li>
                        <li className="d-flex">
                          <div className="item">年齡</div>
                          <span>{item.age}</span>
                        </li>
                        <li className="d-flex">
                          <div className="item">地址</div>
                          <span>{item.address}</span>
                        </li>
                        <li className="d-flex">
                          <div className="item">電話</div>
                          <span>{item.phone_number}</span>
                        </li>
                        <li className="d-flex">
                          <div className="item">Ｅmail</div>
                          <span>{item.email}</span>
                        </li>
                      </ul>
                    )
                  })}
                </div>

                <div className="col-md-6">
                  {memcarddata.map((item, index) => {
                    return (
                      <ul>
                        <li className="d-flex">
                          <div className="item2">信用卡資料</div>
                          {/* <span>{item.name}</span> */}
                        </li>
                        <li className="d-flex">
                          <div className="item2">e幣</div>
                          <span>{item.e_points}</span>
                        </li>
                        <li className="d-flex">
                          <div className="item2">購物紀錄</div>
                          {/* <span>{item.birthday}</span> */}
                        </li>
                        <li className="d-flex">
                          <div className="item2">入會時間</div>
                          <span>{item.creat_date}</span>
                        </li>
                        <li className="d-flex">
                          <div className="item2">退貨紀錄</div>
                          {/* <span>{item.address}</span> */}
                        </li>
                        <li className="d-flex">
                          <div className="item2">退會時間</div>
                          {/* <span>{item.phone_number}</span> */}
                        </li>
                      </ul>
                    )
                  })}
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
