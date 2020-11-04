import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { FaStore } from 'react-icons/fa'
const MemLike = () => {
  const [memlike, setMemLike] = useState([])
  const [dataLoading, setDataLoading] = useState(false)

  const isLogin = useSelector((state) => state.authentication.loggedIn)
  const loginUser = useSelector((state) => state.authentication.user)
  const fetchPosts = async (val) => {
    setDataLoading(true)
    let url = `http://localhost:5000/like?customer_id=${val}`
    const res = await axios.get(url).catch((err) => console.log('Error'.err))
    setMemLike(res.data)
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
  // function MemLike() {
  return (
    <>
      <div className="memlike">
        <div className="maincard">
          <p className="font-m">
            <div className="d-flex wrapper">
              <p className="icons">
                <FaStore />
              </p>
              <p>我的關注</p>
            </div>
          </p>

          <div className="container">
            <div className="row justify-content-around align-self-center topside">
              <Link href="#" className="col-2 d-flex topsidebox">
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
          <div className="d-flex">
            {memlike.map((item, index) => {
              return (
                <div className="likecard">
                  <div className="mark"></div>

                  <p className="font-s">{item.brand_name}</p>

                  <p className="font-s">*****</p>
                  <div className="d-flex justify-content-center">
                    <p className="font-s">粉絲數量</p>
                    <p className="font-s">267</p>
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

export default MemLike
