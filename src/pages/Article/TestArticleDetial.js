import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Breadcrumb } from 'react-bootstrap'

const TestArticleDetial = (props) => {
  const { showHTML } = props
  //   const [getDetial, setGetDetial] = useState('')

  //   useEffect(() => {
  //     const fetchPosts = async () => {
  //       const url = 'http://localhost:5000/api/articles/88'
  //       const res = await axios.get(url).catch((err) => console.log('Error', err))
  //       setGetDetial(res.data)
  //     }
  //     fetchPosts()
  //   }, [])
  console.log(showHTML)

  return (
    <>
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item href="#">首頁</Breadcrumb.Item>
          <Breadcrumb.Item href="/article">文章列表</Breadcrumb.Item>
          <Breadcrumb.Item active>精選5款人氣筆記本套推薦</Breadcrumb.Item>
        </Breadcrumb>
        {<div dangerouslySetInnerHTML={{ __html: showHTML }} />}
      </div>
    </>
  )
}

export default TestArticleDetial
