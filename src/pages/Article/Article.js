import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb'
import axios from 'axios'

// import picture from '../../img/1579141548450.jpg'

import './Article.scss'

const Article = (props) => {
  const [articles, setArticles] = useState([])
  const [dataLoading, setDataLoading] = useState(false)

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
        {/* <Breadcrumb /> */}

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
