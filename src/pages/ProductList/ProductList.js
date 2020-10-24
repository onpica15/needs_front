import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'react-bootstrap'

import Posts from '../../components/ProductList/Posts'
import Pagination from '../../components/ProductList/Pagination'
import ProductSideBar from './ProductSidebar'
import Filter from './Filter/Filter'
import SideFilter from './Filter/SideFilter'

import axios from 'axios'

const ProductList = (props) => {
  const [posts, setPosts] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  const [error, setError] = useState(null)

  const [sort, setSort] = useState()
  const [count, setCount] = useState(0)

  // axios get data
  useEffect(() => {
    const fetchPosts = async () => {
      setDataLoading(true)
      const url = 'http://localhost:5000/try-db'
      const res = await axios.get(url)
      setPosts(res.data)
      setDataLoading(false)
    }
    fetchPosts()
  }, [])

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  //   ListProducts(){

  //     if(xxx.sort !==''){
  //         xxx.propducts.sort((a,b) =>(xxx.sort === 'lowest')
  //         ? (a.price > b.price? 1: -1)
  //         : (a.price < b.price? 1:-1))
  //     } else {
  //         xxx.propducts.sort((a,b) => (a.id<b.id ? 1: -1))
  //     }
  //     return {filteredProducts: xxx.propducts}
  //   }

  //   useEffect(() => {
  //     fetch('http://localhost:5000')
  //       .then((res) => res.json())
  //       .then((data) => [(propducts = data), (filteredProducts = data)])
  //   })

  //   const handleChangeSort = (event) => {
  //     const handleChangeSort = event.target.value
  //     const handleChangeRes = setSort.sort((a, b) => {
  //       if (handleChangeSort === '請選擇') a.id > b.id ? 1 : -1
  //       if (handleChangeSort === '價格由低到高') a.price > b.price ? 1 : -1

  //       if (handleChangeSort === '價格由高到低') {
  //         a.price < b.price ? 1 : -1
  //       }
  //     })
  //   }

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="#">首頁</Breadcrumb.Item>
        <Breadcrumb.Item active>文章列表</Breadcrumb.Item>
      </Breadcrumb>
      <div className="container d-flex">
        <div className="col-2">
          <ProductSideBar />
          <SideFilter />
        </div>
        <div className="col-10">
          <Filter totalPosts={posts.length} />
          <Posts posts={currentPosts} dataLoading={dataLoading} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  )
}

export default ProductList
