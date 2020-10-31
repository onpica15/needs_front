import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { GrFavorite } from 'react-icons/gr'
import { MdFavorite } from 'react-icons/md'

import Product from './Product'

import image from '../../assets/img/products/1-paper/PT01_300x0.jpg'

const Posts = (props) => {
  const { posts, dataLoading, productView, addToCartAction } = props
  const [favore, setFavore] = useState(false)

  const addToCart = (product) => {
    addToCartAction(product)
  }

  const changeFavoreIcon = () => {
    setFavore((value) => !value)
  }
  //change Product view
  const ViewList = (
    <div className="productItems d-flex flex-wrap">
      {posts.map((posts) => (
        <div key={posts.id} className="productListItem d-flex col-12">
          <div className="productPic">
            <img src={image} alt=""></img>
          </div>
          <div className="textArea">
            <div className="title">{posts.title}</div>
            <div className="price">NT$ {posts.price}</div>
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

  if (dataLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }
  if (productView === 'bigPic')
    return (
      <div className="productItems d-flex flex-wrap">
        {posts.map((posts) => (
          <Product key={posts.id} {...posts} addToCart={addToCart} />
        ))}
      </div>
    )
  return ViewList
}

export default Posts
