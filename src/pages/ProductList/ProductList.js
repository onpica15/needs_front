import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addToCartAction, updateCartUnits } from '../../actions/index'
import { Breadcrumb } from 'react-bootstrap'

import Posts from '../../components/ProductList/Posts'
import Pagination from '../../components/ProductList/Pagination'
import ProductSideBar from './ProductSidebar'
import Filter from './Filter/Filter'
import SideFilter from './Filter/SideFilter'

//test
import HistoryList from '../../components/History/HistoryList'

import axios from 'axios'

const ProductList = (props) => {
  const [posts, setPosts] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(12)

  const [sort, setSort] = useState('')
  const [productView, setProductView] = useState('bigPic')

  const { cart, addToCartAction, updateCartUnits } = props

  // axios get data
  useEffect(() => {
    const fetchPosts = async () => {
      console.log(sort)
      setDataLoading(true)
      let url = 'http://localhost:5000/productlist' + sort
      console.log(url)
      const res = await axios.get(url).catch((err) => console.log('Error', err))
      setPosts(res.data)
      setDataLoading(false)
    }
    fetchPosts()
  }, [sort])

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = (pageNumber) => {
    window.scrollTo(0, 0)
    setCurrentPage(pageNumber)
  }

  // TopFilter handle
  const handleSort = (event) => {
    console.log(event.target.value)
    setSort(event.target.value)
  }

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
          <Filter
            totalPosts={posts.length}
            handleSort={handleSort}
            setSort={setSort}
            setProductView={setProductView}
          />
          <Posts
            posts={currentPosts}
            dataLoading={dataLoading}
            productView={productView}
            addToCartAction={addToCartAction}
          />

          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </div>
      </div>
      <div className="container mt-5">
        <h5 className="d-flex justify-content-center">推薦商家</h5>
        <HistoryList cart={cart} updateCartUnits={updateCartUnits} />
      </div>
      <div className="container mt-5">
        <h5 className="d-flex justify-content-center">最近瀏覽</h5>
        <HistoryList cart={cart} updateCartUnits={updateCartUnits} />
      </div>
    </>
  )
}

const mapStateToProps = ({ cart }) => {
  return { cart }
}

export default connect(mapStateToProps, { addToCartAction, updateCartUnits })(
  ProductList
)
