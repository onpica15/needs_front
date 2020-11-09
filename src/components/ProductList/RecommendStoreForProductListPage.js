import React from 'react'
import { Button } from 'react-bootstrap'

const HistoryItem = () => {
  const data = [
    {
      storeName: '一分之一工作室',
      image_path: '',
    },
    {
      storeName: '喵吉星 Miao Stelle',
      image_path: '',
    },
    {
      storeName: '木匠兄妹',
      image_path: '',
    },
    {
      storeName: '品墨良行',
      image_path: '',
    },
    {
      storeName: '日本商店',
      image_path: '',
    },
  ]

  return (
    <>
      {data.map((data, index) => (
        <div
          key={index}
          className="RecommendStoreForProductListPage"
          style={{ fontSize: '16px', margin: '0 20px' }}
        >
          <div className="picture">
            <img
              src={`http://localhost:5000/img/products/${data.image_path}`}
              alt=""
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </div>
          <p className="mt-2 mb-2 product-s-title">{data.storeName}</p>
          <Button className="store-follower-btn">+關注</Button>
        </div>
      ))}
    </>
  )
}

export default HistoryItem
