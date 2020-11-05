import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addToCartAction, updateCartUnits } from '../../actions/index'
// import { Breadcrumb } from 'react-bootstrap'

import Breadcrumbs from '../../components/Breadcrumbs'
import ForProductListCarousel from '../../components/ProductList/ForProductListCarousel'
import Posts from '../../components/ProductList/Posts'
import Pagination from '../../components/ProductList/Pagination'
import ProductSideBar from './ProductSidebar'
import Filter from './Filter/Filter'
import SideFilter from './Filter/SideFilter'

import './ProductList.scss'

//test
import HistoryList from '../../components/History/HistoryList'
import RecommendStoreForProductListPage from '../../components/ProductList/RecommendStoreForProductListPage'

import axios from 'axios'

const ProductList = (props) => {
  // getdata
  const [posts, setPosts] = useState([])
  const [categories, setCategories] = useState([])
  const [dataLoading, setDataLoading] = useState(false)

  //set page
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(12)

  // topFilter handle
  const [sort, setSort] = useState('')
  const [productView, setProductView] = useState(true)

  //set select Index to filter of Category
  const [selectCategory, setSelectCategory] = useState('')
  // 0 = can't use  1 = use
  const [ecoin, setEcoin] = useState(false)
  // set price filter
  const [price, setPrice] = useState([500, 6000])

  //Redux addCart
  const { cart, addToCartAction, updateCartUnits } = props

  useEffect(() => {
    getCategories()
  }, [])

  // axios get data
  useEffect(() => {
    const fetchPosts = async () => {
      setDataLoading(true)
      let url = 'http://localhost:5000/productlist' + sort
      const res = await axios.get(url).catch((err) => console.log('Error', err))
      setPosts(res.data)
      setDataLoading(false)
    }
    fetchPosts()
  }, [sort, price])

  //get all data

  const getCategories = async () => {
    setDataLoading(true)
    let url = 'http://localhost:5000/productlist/categories'
    const res = await axios
      .get(url)
      .catch((err) => console.log(`'Can't get categories`))
    setCategories(res.data)
    setDataLoading(false)
  }

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

    const sortRes = posts.sort((a, b) => {
      if (sort === '-price') {
        return a.skus[0].sale_price < b.skus[0].sale_price ? 1 : -1
      }
      if (sort === 'price') {
        return a.skus[0].sale_price > b.skus[0].sale_price ? 1 : -1
      }
    })
    setPosts(sortRes)
  }

  return (
    <>
      <ForProductListCarousel />
      <div className="container productlist">
        <Breadcrumbs />
        {/* <Breadcrumb>
          <Breadcrumb.Item href="#">首頁</Breadcrumb.Item>
          <Breadcrumb.Item href="#">文章列表</Breadcrumb.Item>
          <Breadcrumb.Item active>所有分類</Breadcrumb.Item>
        </Breadcrumb> */}
        {/* Filter */}
        <div className="d-flex">
          <div className="sideFilter">
            <ProductSideBar
              categories={categories}
              setSelectCategory={setSelectCategory}
            />
            <SideFilter
              setEcoin={setEcoin}
              ecoin={ecoin}
              setPrice={setPrice}
              price={price}
            />
          </div>
          <div className="mainProductList">
            <Filter
              totalPosts={posts.length}
              handleSort={handleSort}
              setSort={setSort}
              setProductView={setProductView}
            />

            {/* dataView */}
            <Posts
              posts={currentPosts}
              dataLoading={dataLoading}
              productView={productView}
              addToCartAction={addToCartAction}
              ecoin={ecoin}
              price={price}
              selectCategory={selectCategory}
            />

            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            />
          </div>
        </div>

        {/* RecommendStore */}
        <h5 className="d-flex justify-content-center">推薦商家</h5>
        <div className="container mt-5 d-flex">
          <RecommendStoreForProductListPage />
        </div>
        <div className="container mt-5">
          <h5 className="d-flex justify-content-center">最近瀏覽</h5>
          <HistoryList cart={cart} updateCartUnits={updateCartUnits} />
        </div>
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
