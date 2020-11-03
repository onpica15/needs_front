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

import { RiMessage2Fill } from 'react-icons/ri'
const MemComment = () => {
  const [memcomment, setMemcomment] = useState([])
  const [dataLoading, setDataLoading] = useState(false)

  const isLogin = useSelector((state) => state.authentication.loggedIn)
  const loginUser = useSelector((state) => state.authentication.user)
  const fetchPosts = async (val) => {
    setDataLoading(true)
    let url = `http://localhost:5000/comment?id=${val}`
    const res = await axios.get(url).catch((err) => console.log('Error'.err))
    setMemcomment(res.data)
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
  // }
  // function MemComment() {
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
            {memcomment.map((item, index) => {
              return (
                <div className="textbox">
                  <div>
                    <p></p>
                  </div>
                  <div>
                    <p>{item.buyer_message}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default MemComment
