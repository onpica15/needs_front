import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import './ProductSideBar.scss'

const ProductSideBar = (props) => {
  const { categories, setSelectCategory, history } = props

  const toggleClassLinkStyle = (e) => {
    console.log(e.target.value)
  }
  // style.color = '#7f7f7f'
  return (
    <>
      <div className="allCategories" onClick={() => setSelectCategory('')}>
        所有分類
      </div>
      {categories.map((value, index) => {
        if (value.id <= 8) return
        return (
          <div className="classItem" key={index}>
            <div
              onClick={(e) => {
                e.target.style.color = 'blue'
                toggleClassLinkStyle(e)
                setSelectCategory(index + 1)
                history.push(`/productlist/${value.name}`)
              }}
            >
              {value.name}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default withRouter(ProductSideBar)
