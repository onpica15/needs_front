import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = (props) => {
  const { postsPerPage, totalPosts, paginate } = props
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a
                href="/productlist/"
                number
                className="page-link"
                onClick={() => paginate(number)}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Pagination
