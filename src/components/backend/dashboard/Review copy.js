import React, { Component } from 'react'
import Rater from 'react-rater'
import ReviewPieChart from './charts/ReviewPieChart'
import 'react-rater/lib/react-rater.css'
import '../../../pages/BackEnd/Dashboard/styles/_review_star.scss'

class Review extends Component {
  constructor(props) {
    super(props)
    this.state = {
      star: [0],
    }
    this.getProductDetail = this.getProductDetail.bind(this)
  }

  componentDidMount() {
    async function getProductDetail() {
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
      this.setState({ star: data })
    }
    getProductDetail()
    console.log(this.state)
  }
  render() {
    return (
      <>
        <div className="chart-card revenue review">
          <div className="revenue-title">賣場評價</div>
          <div className="review-score">4.5</div>
          <div className="review-star">
            <Rater total={5} rating={1} interactive={false} />
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
