import React from 'react'
import { Button } from 'react-bootstrap'

import './Posts.scss'
import image from '../../assets/img/products/1-paper/PT01_300x0.jpg'

const Posts = (props) => {
  const { posts, dataLoading } = props
  if (dataLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }
  return (
    <div className="productItems d-flex flex-wrap">
      {posts.map((posts) => (
        <div key={posts.id} className="productItem col-md-4">
          <div className="productPic">
            <img src={image} alt=""></img>
          </div>
          <div className="textArea">
            <div className="title">{posts.title}</div>
            <div className="price">NT$999</div>
            <div className="d-flex justify-content-center">
              <Button variant="danger">加入購物車</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Posts
