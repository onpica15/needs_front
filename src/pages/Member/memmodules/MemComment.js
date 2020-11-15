import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

import { RiMessage2Fill } from 'react-icons/ri'
import './MemComment.scss'

const MemComment = () => {
  const [memcomment, setMemcomment] = useState([])
  const [type, setType] = useState('already')
  const [buyer_message, setBuyermessage] = useState('')
  const [comment_id, setCommentid] = useState('')
  const [id, setId] = useState(0)

  const isLogin = useSelector((state) => state.authentication.loggedIn)
  const loginUser = useSelector((state) => state.authentication.user)
  const getData = async (val) => {
    let url = `http://localhost:5000/comment?customer_id=${val}&filter=${type}`
    const res = await axios.get(url).catch((err) => console.log('Error'.err))
    console.log('res.data', res.data)

    setMemcomment(res.data.rows)
    console.log('res.data.rows', res.data.rows)
    setBuyermessage(res.data.rows[0].buyer_message)
    setCommentid(res.data.rows[0].comment_id)
    console.log(
      'res.data.rows[0].buyer_message',
      res.data.rows[0].buyer_message
    )
    console.log('res.data.rows[0].comment_id', res.data.rows[0].comment_id)
  }

  const updatecomment = async (val) => {
    // const newData = { buyer_message, id }
    let url = `http://localhost:5000/comment?comment_id=${val}&filter=${type}`
    const res = await axios
      .post(url, [buyer_message, comment_id])
      .catch((err) => console.log('Error'.err))
    console.log('post-res', res)
    console.log('post-res-data', res.data)
  }
  useEffect(() => {
    if (isLogin) {
      const memId = loginUser.user.id
      console.log('aaa')
      getData(memId)
      setId(memId)
      console.log('memId', memId)
      console.log('type', type)
    } else {
      window.location.href = '/login'
    }
  }, [type])
  const display = (
    <>
      <div className="memComment">
        <div className="maincard">
          <div className="font-m">
            <div className="d-flex wrapper">
              <p className="icons">
                <RiMessage2Fill />
              </p>
              <p>我的評論</p>
            </div>
          </div>

          <div className="container">
            <div className="row justify-content-around align-self-center topside">
              <div className="col-2 d-flex topsidebox">
                <div className="m-auto" onClick={(e) => setType('already')}>
                  <p className="font-s">歷史評論</p>
                </div>
              </div>
              <div className="col-2 d-flex topsidebox">
                <div className="m-auto" onClick={(e) => setType('notyet')}>
                  <p className="font-s">尚未評論</p>
                </div>
              </div>
            </div>
          </div>
          {memcomment.map((item, index) => {
            return (
              <div>
                {type === 'already' ? (
                  <>
                    <div className="informbar d-flex justify-content-center">
                      <img
                        className="sign"
                        src={`http://localhost:5000/img/products/${item.image_path}`}
                        alt="products"
                      />

                      <div className="textbox">
                        <div>
                          <p>{item.brand_name}</p>
                        </div>
                        <div>
                          <p>{item.buyer_message}</p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="informbar d-flex justify-content-center">
                    <img
                      className="sign"
                      src={`http://localhost:5000/img/products/${item.image_path}`}
                      alt="products"
                    />

                    <div className="textbox">
                      <div>
                        <p>{item.brand_name}</p>
                      </div>
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          value={buyer_message}
                          onChange={(event) => {
                            setBuyermessage(event.target.value)
                          }}
                        />
                        <p>{item.buyer_message}</p>
                        {console.log('item.buyer_message', item.buyer_message)}
                        <button
                          onClick={() => {
                            updatecomment(id)
                          }}
                          className="btn btn-primary"
                        >
                          儲存
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
  return display
}

export default MemComment
