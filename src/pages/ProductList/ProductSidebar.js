import React, { useState, useEffect } from 'react'
import { Link, Route } from 'react-router-dom'

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

  // const category = ({ to, text, exact }) => {
  //   return (
  //     <Route
  //       path={to}
  //       exact={exact}
  //       children={({ match }) => {
  //         console.log('match', match)
  //         return (
  //           <Link to={to}>
  //             <li style={match ? Styles.li1 : Styles.li1}>{text}</li>
  //           </Link>
  //         )
  //       }}
  //     />
  //   )
  // }

  const display = Categories.map((value, index) => (
    <div className="classItem" key={index}>
      <Link to={'/productlist/' + index}>{value.name}</Link>
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
