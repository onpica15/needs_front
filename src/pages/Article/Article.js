import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'react-bootstrap'

// import picture from '../../img/1579141548450.jpg'

import './Article.scss'
import FigureImage from 'react-bootstrap/esm/FigureImage'

const Article = (props) => {
  const [articles, setArticles] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(null)

  //載入資料
  async function getArticleFromServer() {
    setDataLoading(true)

    const url = 'http://localhost:5000/try-db'
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    try {
      const response = await fetch(request)
      const data = await response.json()
      setArticles(data)
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    getArticleFromServer()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false)
    }, 1000)
  }, [articles])

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
    <div className=" articleItems d-flex flex-wrap justify-content-around">
      {articles.map((value, index) => (
        <div key={value.id} className="articleItem col-3">
          <div className="articlePic">
            <img src={value.image} alt=""></img>
          </div>
          <div className="textArea">
            <div className="title">{value.title}</div>
            <div className="ctx">{value.outline}</div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <>
      <div className="wrap">
        <Breadcrumb>
          <Breadcrumb.Item href="#">首頁</Breadcrumb.Item>
          <Breadcrumb.Item active>文章列表</Breadcrumb.Item>
        </Breadcrumb>

        <div className="topic d-flex">
          <div className="col-6">
            <h2>精選文章</h2>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <Link to="/createArticle">新增文章</Link>
          </div>
        </div>
        {/* itemArea */}
        {dataLoading ? loading : display}
      </div>
    </>
  )
}

export default Article
