import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Button } from 'react-bootstrap'

import ArticleClassic from '../../components/Article/ArticleClassic'
import './Article.scss'

const Article = (props) => {
  const isLogin = useSelector((state) => state.authentication.loggedIn)
  const loginRole = useSelector((state) => state.authentication.user.user)
  const [userRole, setUserRole] = useState('')
  const [articles, setArticles] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [SubscribeBtn, setSubscribeBtn] = useState(false)

  //載入資料
  useEffect(() => {
    const fetchPosts = async () => {
      setDataLoading(true)
      const url = 'http://localhost:5000/article'
      const res = await axios.get(url).catch((err) => console.log('Error', err))
      setArticles(res.data)
      setDataLoading(false)
    }
    fetchPosts()
  }, [])

  //get role ,and show the add/delete Btn
  useEffect(() => {
    if (isLogin) {
      const role = loginRole.role
      setUserRole(role)
    }
  }, [])

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <div className=" articleItems d-flex flex-wrap">
      {articles.map((value, index) => (
        <>
          <Link
            key={value.id}
            to={`/article/${value.id}`}
            className="articleItem col-lg-3 col-md-6 col-sm-12 text-decoration-none"
          >
            <div className="articlePic">
              <img src={value.image} alt=""></img>
            </div>
            <div className="textArea">
              <div className="title">{value.title}</div>
              <div className="ctx">{value.outline}</div>
            </div>
          </Link>
        </>
      ))}
    </div>
  )

  return (
    <>
      <div className="container mt-4 ">
        <div className="topic d-flex mb-2">
          <div className="col-6">
            <h5>精選文章</h5>
          </div>
          {userRole === 'needs' ? (
            <div className="col-6 d-flex justify-content-end">
              <Link to="/createArticle">新增文章</Link>
            </div>
          ) : null}
        </div>

        <ArticleClassic />

        <section className="mt-4 mb-5">
          <h5 className="mb-2">最新文章</h5>
          {dataLoading ? loading : display}
          <div className="d-flex justify-content-end">
            <Button className="btn btn-sm btn-secondary">探索更多 →</Button>
          </div>
        </section>

        <div className="subscribeArticle d-flex justify-content-between">
          <div className="textInfo">
            探索各式生活風格美學 - 實踐美好必要指南
          </div>
          <div>
            {SubscribeBtn ? (
              <Button onClick={() => setSubscribeBtn(!SubscribeBtn)}>
                已訂閱文章
              </Button>
            ) : (
              <Button onClick={() => setSubscribeBtn(!SubscribeBtn)}>
                訂閱文章
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Article
