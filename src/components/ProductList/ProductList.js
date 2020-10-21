import React, { useState, useEffect } from 'react'

import Filter from './Filter'

const ProductList = (props) => {
  const [sort, setSort] = useState()

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
      <Filter />
    </>
  )
}

export default ProductList
