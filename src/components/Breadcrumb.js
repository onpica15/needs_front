import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = (props) => {
  let path = ''
  const pathname = props.location.pathname

  switch (pathname) {
    case '/article':
      path = '文章列表'
      break
    default:
      path = ''
  }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">首頁</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {path}
          </li>
        </ol>
      </nav>
    </>
  )
}

export default Breadcrumb
