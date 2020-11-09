import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import './ProductSideBar.scss'

const ProductSideBar = (props) => {
  const { categories, setSelectCategory, history } = props
  const [clickStyle, setClickStyle] = useState(false)

  const toggleClassLinkStyle = (id) => {
    const Index = categories.findIndex((p) => p.id === id)
    if (Index !== -1) {
      setClickStyle(!clickStyle)
    }
  }

  return (
    <>
      <div className="allCategories" onClick={() => setSelectCategory('')}>
        所有分類
      </div>
      {categories.map((value, index) => {
        if (value.id <= 8) return <></>
        return (
          <div className="classItem" key={index}>
            <div
              className={clickStyle ? 'classLink active' : 'classLink'}
              onClick={() => {
                toggleClassLinkStyle(value.id)
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
