import React, { Component } from 'react'
import Rater from 'react-rater'
import ReviewPieChart from './charts/ReviewPieChart'
import 'react-rater/lib/react-rater.css'
import '../../../styles/backend/_review_star.scss'

class Review extends Component {
  render() {
    const rating = 4.5
    return (
      <>
        <div className="chart-card revenue review">
          <div className="revenue-title">賣場評價</div>
          <div className="review-score">4.5</div>
          <div className="review-star">
            <Rater total={5} rating={rating} interactive={false} />
          </div>
          <div className="review-chart">
            <ReviewPieChart />
          </div>
        </div>
      </>
    )
  }
}

export default Review
