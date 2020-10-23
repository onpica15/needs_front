import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'react-bootstrap'

import ProductSideBar from './ProductSidebar'
import Filter from './Filter/Filter'
import SideFilter from './Filter/SideFilter'

const ProductList = (props) => {
  const [sort, setSort] = useState()

  const [ProductList, setProductList] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(null)

  //載入資料
  async function getProductFromServer() {
    setDataLoading(true)

    const url = 'http://localhost:5000/try-db'
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    try {
      const response = await fetch(request)
      const data = await response.json()
      setProductList(data)
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    getProductFromServer()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false)
    }, 1000)
  }, [ProductList])

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <div className="productItems d-flex flex-wrap justify-content-around">
      {ProductList.map((value, index) => (
        <div key={value.id} className="productItem col-3">
          <div className="productPic">
            <img src={value.image} alt=""></img>
          </div>
          <div className="textArea">
            <div className="title">{value.title}</div>
            <div className="ctx">{value.outline}</div>
          </div>
        </div>
      ))}
    </div>
  )

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
      <div className="container d-flex">
        <div className="col-2">
          <ProductSideBar />
          <SideFilter />
        </div>
        <div className="col-10">
          <Filter />
          {dataLoading ? loading : display}
        </div>
      </div>
    </>
  )
}

export default ProductList
