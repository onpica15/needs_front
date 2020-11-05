import React, { useState } from 'react'
import { GrFavorite } from 'react-icons/gr'
import { MdFavorite } from 'react-icons/md'

import Product from './Product'
import ProductViewList from './ProductViewList'

const Posts = (props) => {
  const {
    selectCategory,
    ecoin,
    posts,
    dataLoading,
    productView,
    addToCartAction,
  } = props
  const [favore, setFavore] = useState(false)

  const addToCart = (product) => {
    addToCartAction(product)
  }
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
      {posts &&
        posts.map((posts, index) => {
          if (selectCategory && selectCategory !== posts.categories_id)
            return <></>
          if (!ecoin === false && posts.e_points_usable === 0) return <></>
          return productView ? (
            <>
              <Product key={posts.id} {...posts} addToCart={addToCart} />
            </>
          ) : (
            <ProductViewList key={index} {...posts} addToCart={addToCart} />
          )
        })}
    </div>
  )
}

export default Posts
