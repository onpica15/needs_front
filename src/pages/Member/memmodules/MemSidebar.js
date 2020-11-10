import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
import './MemSidebar.scss'

import {
  BsPersonFill,
  BsFillBellFill,
  BsQuestionSquareFill,
} from 'react-icons/bs'
import { FaShoppingBag, FaStore, FaCoins } from 'react-icons/fa'
import { RiMessage2Fill } from 'react-icons/ri'
import { MdAddAPhoto } from 'react-icons/md'

const MemSidebar = (props) => {
  const [avatar, setAvatar] = useState([])
  const [uploadAvatarFile, setUploadAvatarFile] = useState({})
  const isLogin = useSelector((state) => state.authentication.loggedIn)
  const loginUser = useSelector((state) => state.authentication.user)

  const getData = async (val) => {
    let url = `http://localhost:5000/member?id=${val}`
    const res = await axios.get(url).catch((err) => console.log('Error'.err))
    setAvatar(res.data[0].avatar)
    console.log('res.data[0].avatar', res.data[0].avatar)
  }
  const updateAvatar = (e) => {
    setUploadAvatarFile(e.target.files[0])
  }

  const sendAvatarToNodejs = async (e) => {
    // e.preventDefault()
    // const filename = uploadAvatarFile.name
    // const formData = { avatar: filename }
    const formData = uploadAvatarFile
    console.log('formData', formData)
    console.log('props.match.params.id', props.match.params.id)
    let url = `http://localhost:5000/member/upload/${props.match.params.id}`
    try {
      await axios.post(url, formData, )
    } catch (err) {
      if (err.response.status === 500) {
        console.log('伺服器有點問題')
      } else {
        console.log(err.response.data.msg)
      }
    }
  }
  useEffect(() => {
    if (isLogin) {
      const memId = loginUser.user.id
      getData(memId)
    } else {
      window.location.href = '/login'
    }
  }, [])
  return (
    <>
      <div className="d-flex flex-column memsidebar ">
        <img
          className="avatar mx-auto"
          src={`http://localhost:5000/img/avatar/${avatar}`}
          alt="avatar"
        />

        <div className="font-ss">
          {/* <label for="avatar" className="whiteSpacePre btn btn-info"> */}
          <div className="d-flex ml-5 wrapper">
            <div className="icons">
              <MdAddAPhoto />
            </div>
            <form onSubmit={sendAvatarToNodejs} name="form1">
              <input
                type="file"
                name="filename"
                id="filename"
                onChange={(e) => updateAvatar(e)}
              />
              <input type="submit" value="uploadAvatar" />
            </form>
          </div>
          {/* </label> */}
        </div>
        <div className="sidebar mx-auto">
          <div className="font-s">
            <Link to="/member/card/:id">
              <div className="d-flex  wrapper ">
                <div className="icons">
                  <BsPersonFill />
                </div>
                我的帳號
              </div>
            </Link>
          </div>
          <div className="font-s">
            <Link to="/member/shop">
              <div className="d-flex  wrapper">
                <div className="icons">
                  <FaShoppingBag />
                </div>
                購買清單
              </div>
            </Link>
          </div>
          <div className="font-s">
            <Link to="/member/like">
              <div className="d-flex  wrapper">
                <div className="icons">
                  <FaStore />
                </div>
                我的關注
              </div>
            </Link>
          </div>
          <div className="font-s">
            <Link to="/member/inform">
              <div className="d-flex  wrapper">
                <div className="icons">
                  <BsFillBellFill />
                </div>
                通知中心
              </div>
            </Link>
          </div>
          <div className="font-s">
            <Link to="/member/ecoin">
              <div className="d-flex  wrapper">
                <div className="icons">
                  <FaCoins />
                </div>
                <div className="whiteSpacePre">Ｅcoin </div>
              </div>
            </Link>
          </div>
          <div className="font-s">
            <Link to="/member/comment">
              <div className="d-flex  wrapper">
                <div className="icons">
                  <RiMessage2Fill />
                </div>
                我的評論
              </div>
            </Link>
          </div>
          <div className="font-s">
            <Link to="#">
              <div className="d-flex  wrapper">
                <div className="icons">
                  <BsQuestionSquareFill />
                </div>
                常見問題
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemSidebar
