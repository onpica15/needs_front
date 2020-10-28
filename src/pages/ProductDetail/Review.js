import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

function Review(props) {
  return (
    <>
      <div className="review">
        <div className="d-flex justify-content-between review-item">
          <div className="mr-5">
            <img
              className="avatar rounded"
              src={require('../../assets/img/brands/pommedepin111_300x300.jpg')}
              alt=""
            />
          </div>
          <div>
            <p>An Ling Zheng 於 2020-09-06 01:41 留下評論</p>
            <p className="review-desc">
              比預期的時間還早拿到，這本被自己設定為紀錄每日的生活反思及自省，找著超喜歡的中日夾雜（風格）書封，太開心了～接下來書寫的過程中也能感受到身心被洗滌呀！已經第四年用了，非常很喜歡，每年都很美！
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-between reply">
          <div>
            <p>店家 於 2020-09-06 03:41 回覆</p>
            <p className="reply-desc m-0">
              親愛的顧客您好！感謝您購買本次商品，您的評價是對我們的肯定；您的支持與愛護，是我們的動力來源！期待您的下次光臨，非常感謝您的評價！謝謝！
            </p>
          </div>
          <div>
            <img
              className="avatar rounded mr-3"
              src={require('../../assets/img/brands/pommedepin111_300x300.jpg')}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <button className="btn btn-sm btn-outline-secondary">
          閱讀更多
          <FiChevronDown />
        </button>
      </div>
    </>
  )
}

export default Review
