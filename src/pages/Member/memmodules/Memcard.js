import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'
import axios from 'axios'

// import memcarddata from './memcarddata.json'
import { createStore, combineReducers } from 'redux'
import { connect } from 'react-redux'

import { BsPersonFill } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'

const MemCard = () => {
  // const store = createStore(reducer)

  //可使用 store 的內建函式 getState() 確認目前 store 內所保管的資料console.log(store.getState())  // {name: 'Jack'}

  // const userid = props.match.params.userid
  // console.log(userid)
//   function doPost(e) {
//     var param = JSON.parse(Object.keys(e.parameter)[0]); // 這段是重點！！！！
//     var name = param.name;
//     var age = param.age;
//     var replyMsg = {
//         name: name,
//         age: age,
//         text: '你的名字是 '+name+'，年紀 '+age+' 歲～'
//     };    
//     var JSONString = JSON.stringify(replyMsg);
//     return ContentService.createTextOutput(JSONString).setMimeType(ContentService.MimeType.JSON);
// }
  const [memcarddata, setMemcarddata] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  //axios get data
  useEffect(() => {
    const fetchPosts = async () => {
      setDataLoading(true)
      let url = 'http://localhost:5000/member'
      const res = await axios.get(url).catch((err) => console.log('Error'.err))
      setMemcarddata(res.data)
      setDataLoading(false)
    }
    fetchPosts()
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
