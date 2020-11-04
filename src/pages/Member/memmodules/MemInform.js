import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
  Switch,
} from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'

import { BsFillBellFill } from 'react-icons/bs'
const MemInform = () => {
  const [meminform, setMemInform] = useState([])
  const [dataLoading, setDataLoading] = useState(false)

  const isLogin = useSelector((state) => state.authentication.loggedIn)
  const loginUser = useSelector((state) => state.authentication.user)
  const fetchPosts = async (val) => {
    setDataLoading(true)
    let url = `http://localhost:5000/inform?customer_id=${val}`
    const res = await axios.get(url).catch((err) => console.log('Error'.err))
    setMemInform(res.data)
    setDataLoading(false)
  }
  useEffect(() => {
    if (isLogin) {
      const memId = loginUser.user.id
      fetchPosts(memId)
    } else {
      window.location.href = '/login'
    }
  }, [])

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
                  <p className="font-s">所有通知</p>
                </div>
              </Link>
              <Link href="#" className="col-2 d-flex topsidebox">
                <div className="m-auto">
                  <p className="font-s">關注通知</p>
                </div>
              </Link>

              <Link href="#" className="col-2 d-flex topsidebox">
                <div className="m-auto">
                  <p className="font-s">NEEDS公告</p>
                </div>
              </Link>
            </div>
          </div>
          {meminform.map((item, index) => {
            return (
              <div className="informbar d-flex justify-content-start">
                <div className="sign"></div>
                <div className="textbox">
                  <div>
                    <p>
                      {item.brand_name}[ {item.status} ]
                    </p>
                  </div>
                  <div>
                    <p>{item.inform}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default MemInform
