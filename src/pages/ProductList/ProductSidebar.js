import React from 'react'

import './ProductSideBar.scss'

const ProductSideBar = (props) => {
  const { categories, setSelectCategory } = props

  return (
    <>
      <div className="allCategories">所有分類</div>
      {categories.map((value, index) => (
        <div className="classItem" key={index}>
          <div onClick={() => setSelectCategory(index + 1)}>{value.name}</div>
        </div>
      ))}
    </>
  )
}

export default ProductSideBar
