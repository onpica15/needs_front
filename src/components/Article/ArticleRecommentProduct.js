import React from 'react'
import { Link } from 'react-router-dom'

import './ArticleRecommentProduct.scss'

const ArticleRecommentProduct = (props) => {
  const data = [
    {
      img:
        'http://localhost:5000/articleImg/Classic/899129dbd090c48a7d9611f487ec37d9-700x700.jpg',
      title: 'Uptrend My diary ｜超級空白手帳 VII ',
      merchant: 'Uptrend',
      price: 'NT$250',
      salePrice: 'NT$175',
    },
    {
      img:
        'http://localhost:5000/articleImg/Classic/899129dbd090c48a7d9611f487ec37d9-700x700.jpg',
      title: 'Uptrend My diary ｜超級空白手帳 VII ',
      merchant: 'Uptrend',
      price: 'NT$250',
      salePrice: 'NT$175',
    },
    {
      img:
        'http://localhost:5000/articleImg/Classic/899129dbd090c48a7d9611f487ec37d9-700x700.jpg',
      title: 'Uptrend My diary ｜超級空白手帳 VII ',
      merchant: 'Uptrend',
      price: 'NT$250',
      salePrice: 'NT$175',
    },
    {
      img:
        'http://localhost:5000/articleImg/Classic/899129dbd090c48a7d9611f487ec37d9-700x700.jpg',
      title: 'Uptrend My diary ｜超級空白手帳 VII ',
      merchant: 'Uptrend',
      price: 'NT$250',
      salePrice: 'NT$175',
    },
    {
      img:
        'http://localhost:5000/articleImg/Classic/899129dbd090c48a7d9611f487ec37d9-700x700.jpg',
      title: 'Uptrend My diary ｜超級空白手帳 VII ',
      merchant: 'Uptrend',
      price: 'NT$250',
      salePrice: 'NT$175',
    },
    {
      img:
        'http://localhost:5000/articleImg/Classic/899129dbd090c48a7d9611f487ec37d9-700x700.jpg',
      title: 'Uptrend My diary ｜超級空白手帳 VII ',
      merchant: 'Uptrend',
      price: 'NT$250',
      salePrice: 'NT$175',
    },
  ]
  return (
    <>
      {data.map((value, id) => (
        <Link
          to="/article"
          className="ArticleRecommentProduct text-decoration-none"
        >
          <div key={value.id} className="picture mr-2">
            <img src={value.img} alt=""></img>
          </div>
          <div className="textArea">
            <div className="">{value.title}</div>
            <div className="btmArea mt-2">
              <span className="merchant">{value.merchant}</span>
              <div className="priceArea">
                <span className="price">{value.price}</span>
                <span className="sale">{value.salePrice}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}

export default ArticleRecommentProduct
