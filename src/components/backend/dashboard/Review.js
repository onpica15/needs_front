import React, { useState, useEffect } from 'react'
import Rater from 'react-rater'
import ReviewPieChart from './charts/ReviewPieChart'
import 'react-rater/lib/react-rater.css'
import '../../../pages/BackEnd/Dashboard/styles/_review_star.scss'

function Review() {
  const [reviewStar, setReviewStar] = useState()

  async function getStar() {
    // 連接的伺服器資料網址
    const url = 'http://localhost:5000/dashboard/star'

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    // 設定資料
    setReviewStar(...data)
  }

  useEffect(() => {
    getStar()
  }, [])

  return (
    <>
      <div className="chart-card revenue review">
        <div className="revenue-title">賣場評價</div>
        <div className="review-score">{reviewStar ? reviewStar.star : ''}</div>
        <div className="review-star">
          <Rater
            total={5}
            rating={reviewStar ? reviewStar.star : ''}
            interactive={false}
          />
        </div>
        <div className="review-chart">
          <ReviewPieChart />
        </div>
      </div>
    </>
  )
}

export default Review
