import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { GrFavorite } from 'react-icons/gr'
import { MdFavorite } from 'react-icons/md'

import './Posts.scss'
import image from '../../assets/img/products/1-paper/PT01_300x0.jpg'

const Posts = (props) => {
  const { posts, dataLoading } = props
  const [favore, setFavore] = useState(false)

  const changeFavoreIcon = () => {
    setFavore((value) => !value)
  }

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
        <div key={posts.id} className="productItem col-lg-4 col-md-6 col-sm-12">
          <div className="productPic">
            <img src={image} alt=""></img>
          </div>
          <div className="textArea">
            <div className="title">{posts.title}</div>
            <div className="price">NT$999</div>
            <div className="d-flex justify-content-center">
              <Button className="cart" variant="danger">
                加入購物車
              </Button>
              <label className="favore">
                <input
                  type="radio"
                  value={favore}
                  onClick={changeFavoreIcon}
                  checked={favore}
                />
                {favore ? (
                  <GrFavorite size={30} />
                ) : (
                  <MdFavorite color={'#D44F44'} size={30} />
                )}
              </label>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Posts
