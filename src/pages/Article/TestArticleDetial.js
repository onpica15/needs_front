import React, { useState, useEffect } from 'react'
import axios from 'axios'

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

  return <>{<div dangerouslySetInnerHTML={{ __html: showHTML }} />}</>
}
export default TestArticleDetial
