import React, { useState, useEffect } from 'react'
import Rater from 'react-rater'
import ReviewPieChart from './charts/ReviewPieChart'
import 'react-rater/lib/react-rater.css'
import '../../../pages/BackEnd/Dashboard/styles/_review_star.scss'
import Axios from 'axios'

function Review() {
  const [reviewStar, setReviewStar] = useState()
  const [fiveStar, setFiveStar] = useState()

  const getStar = () => {
    Axios.get('http://localhost:5000/dashboard/star').then((response) => {
      const data = response.data
      let reviewStars = ''
      let avgReviewStar
      for (let i = 0; i < data.length; i++) {
        reviewStars = parseInt(reviewStars + data[i].star)
        avgReviewStar = (reviewStars / data.length).toFixed(1)
      }
      // 設定資料
      setReviewStar(avgReviewStar)
    })
  }
  const getFiveStar = () => {
    Axios.get('http://localhost:5000/dashboard/5star').then((response) => {
      const dataLength = response.data.length
      setFiveStar(dataLength)
      console.log(dataLength)
    })
  }

  useEffect(() => {
    getStar()
    getFiveStar()
  }, [])

  return (
    <>
      <div className="chart-card revenue review">
        <div className="revenue-title">賣場評價</div>
        <div className="review-score">{reviewStar ? reviewStar : ''}</div>
        <div className="review-star">
          <Rater
            total={5}
            rating={reviewStar ? reviewStar : ''}
            interactive={false}
          />
        </div>
        data length: {fiveStar}
        <div className="review-chart">
          <ReviewPieChart fiveStar={fiveStar ? fiveStar : ''} />
        </div>
      </div>
    </>
  )
}

export default Review
