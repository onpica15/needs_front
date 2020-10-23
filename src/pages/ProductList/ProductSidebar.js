import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './ProductSideBar.scss'

const ProductSideBar = (props) => {
  const [Categories] = useState([
    { name: '紙品/貼紙' },
    { name: '筆記本/年曆' },
    { name: '文具用品' },
    { name: '書籍周邊' },
    { name: '婚禮週邊' },
    { name: '生活收納' },
    { name: '文具用品' },
    { name: '創意小物' },
    { name: '手作體驗' },
  ])

  const display = Categories.map((value, index) => (
    <div className="classItem" key={index}>
      <Link to="">{value.name}</Link>
    </div>
  ))

  return (
    <>
      <div className="allCategories">所有分類</div>
      {display}
    </>
  )
}

export default ProductSideBar
