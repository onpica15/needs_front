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
  const [allposts, setAllPosts] = useState([])
  //filter allposts and show this data
  const [showPosts, setShowPosts] = useState([])
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
  const [filterprice, setFilterPrice] = useState([500, 6000])
  const [Price, setPrice] = useState([])
  const [SalePirce, setSalePirce] = useState([])

  //Redux addCart
  const { cart, updateCartUnits } = props

  useEffect(() => {
    getCategories()
  }, [])

  // axios get data
  useEffect(() => {
    const fetchPosts = async () => {
      setDataLoading(true)
      let url = 'http://localhost:5000/productlist?sort=' + sort
      const res = await axios.get(url).catch((err) => console.log('Error', err))
      setAllPosts(res.data)
      setShowPosts(res.data)

      setDataLoading(false)
    }
    fetchPosts()
  }, [sort])

  // Filter everything
  useEffect(() => {
    if (selectCategory) {
      setShowPosts(
        allposts.filter((value) => value.categories_id === selectCategory)
      )
    } else {
      setShowPosts(allposts)
    }
  }, [selectCategory])

  // check Ecoin can be used , 1 is can useing .if not, Getting all Ecoin
  useEffect(() => {
    ecoin
      ? setShowPosts(allposts.filter((value) => value.e_points_usable === 1))
      : setShowPosts(allposts)
  }, [ecoin])

  // set price filter
  const showprice = () => {
    showPosts.sale_price
      ? console.log(showPosts.sale_price)
      : console.log(showPosts.sale_price)
  }
  showprice()

  // if (sale_price)
  // showPosts.sale_price
  //   ? setShowPosts(allposts.filter((value) => value.sale_price <= price))
  //   : setShowPosts(allposts)

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
  const currentPosts = showPosts.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = (pageNumber) => {
    window.scrollTo(0, 0)
    setCurrentPage(pageNumber)
  }

  const handleSort = (event) => {
    console.log(event.target.value)
    setSort(event.target.value)
  }

  return (
    <>
      <ForProductListCarousel />
      <div className="container productlist">
        <Breadcrumbs />

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
              setFilterPrice={setFilterPrice}
              filterprice={filterprice}
            />
          </div>
          <div className="mainProductList container-fluid">
            <Filter
              totalPosts={showPosts.length}
              handleSort={handleSort}
              setSort={setSort}
              setProductView={setProductView}
            />

            {/* dataView */}
            <Posts
              showPosts={currentPosts}
              dataLoading={dataLoading}
              productView={productView}
            />

            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={showPosts.length}
              paginate={paginate}
            />
          </div>
        </div>

        {/* RecommendStore */}
        <h5 className="mt-5 d-flex justify-content-center">推薦商家</h5>
        <div className="container d-flex">
          <RecommendStoreForProductListPage />
        </div>
        <div className="container mt-5 overflow-hidden">
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

export default connect(mapStateToProps, {
  updateCartUnits,
})(ProductList)
