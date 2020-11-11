import React from 'react'
import Product from './Product'
import ProductViewList from './ProductViewList'

const Posts = (props) => {
  const { showPosts, dataLoading, productView } = props

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
      {showPosts &&
        showPosts.map((posts, index) => {
          return productView ? (
            <>
              <Product key={posts.id} {...posts} />
            </>
          ) : (
            <ProductViewList key={index} {...posts} />
          )
        })}
    </div>
  )
}

export default Posts
