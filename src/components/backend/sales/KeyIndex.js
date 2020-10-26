import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card } from 'react-bootstrap'
import KeyIndexChart from '../../../components/backend/sales/charts/KeyIndexChart.js'

function KeyIndex() {
  const [series, setSeries] = useState([])
  const sessionDuration = {
    name: '銷售額',
    data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
  }
  const pageViews = {
    name: '訂單數',
    data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
  }
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="mb-0">關鍵指標</Card.Title>
          <Row>
            <Col xs={2}>
              <div
                className="key-card"
                onClick={(e) => {
                  setSeries([...series, sessionDuration])
                  if (e.target.classList[0] !== 'key-card') {
                    e.target.parentNode.classList.toggle('primary-top')
                  } else {
                    e.target.classList.toggle('primary-top')
                  }
                  series.forEach((item) => {
                    if (item.name === sessionDuration.name) {
                      console.log('1')
                      const checkRepeat = (item) =>
                        item.name !== sessionDuration.name
                      const newSeries = series.filter(checkRepeat)
                      setSeries([...newSeries])
                    } else if (series.indexOf(item) === -1) {
                      console.log('2')
                      setSeries([...series, sessionDuration])
                    }
                    console.log(series)
                  })
                }}
              >
                <div className="key-title">銷售額</div>
                <span className="dollar-sign">$</span>
                <span className="key-number"></span>
              </div>
            </Col>
            <Col xs={2}>
              <div
                className="key-card"
                onClick={(e) => {
                  setSeries([...series, pageViews])
                  if (e.target.classList[0] !== 'key-card') {
                    e.target.parentNode.classList.toggle('success-top')
                  } else {
                    e.target.classList.toggle('success-top')
                  }
                  series.forEach((item) => {
                    if (item.name === pageViews.name) {
                      console.log('3')
                      const checkRepeat = (item) => item.name !== pageViews.name
                      const newSeries = series.filter(checkRepeat)
                      setSeries([...newSeries])
                    } else if (series.indexOf(item) === -1) {
                      console.log('4')
                      setSeries([...series, pageViews])
                    }
                    console.log(series)
                  })
                }}
              >
                <div className="key-title">訂單</div>
                <span className="key-number"></span>
              </div>
            </Col>
            <Col xs={2}>
              <div
                className="key-card"
                onClick={(e) => {
                  if (e.target.classList[0] !== 'key-card') {
                    e.target.parentNode.classList.toggle('danger-top')
                  } else {
                    e.target.classList.toggle('danger-top')
                  }
                }}
              >
                <div className="key-title">下單轉換率</div>
                <span className="key-number"></span>
                <span className="percentage-sign">%</span>
              </div>
            </Col>
            <Col xs={2}>
              <div
                className="key-card"
                onClick={(e) => {
                  if (e.target.classList[0] !== 'key-card') {
                    e.target.parentNode.classList.toggle('warning-top')
                  } else {
                    e.target.classList.toggle('warning-top')
                  }
                }}
              >
                <div className="key-title">平均訂單金額</div>
                <span className="dollar-sign">$</span>
                <span className="key-number"></span>
              </div>
            </Col>
            <Col xs={2}>
              <div
                className="key-card"
                onClick={(e) => {
                  if (e.target.classList[0] !== 'key-card') {
                    e.target.parentNode.classList.toggle('info-top')
                  } else {
                    e.target.classList.toggle('info-top')
                  }
                }}
              >
                <div className="key-title">不重複訪客</div>
                <span className="key-number"></span>
              </div>
            </Col>
            <Col xs={2}>
              <div
                className="key-card"
                onClick={(e) => {
                  if (e.target.classList[0] !== 'key-card') {
                    e.target.parentNode.classList.toggle('secondary-top')
                  } else {
                    e.target.classList.toggle('secondary-top')
                  }
                }}
              >
                <div className="key-title">商品頁面瀏覽數</div>
                <span className="key-number"></span>
              </div>
            </Col>
          </Row>
          <Row className="my-5">
            <Col xs={12}>
              <KeyIndexChart initData={series} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  )
}

export default KeyIndex
