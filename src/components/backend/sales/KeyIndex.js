import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card } from 'react-bootstrap'
import moment from 'moment'
import 'moment/locale/zh-tw'
import KeyIndexChart from '../../../components/backend/sales/charts/KeyIndexChart.js'

function KeyIndex() {
  moment.locale('zh-tw')

  let dateArray = []
  for (let i = 0; i < 7; i++) {
    let date = moment().subtract(i, 'days').format('MMM Do')
    dateArray.push(date)
  }
  dateArray = dateArray.reverse()

  const salesDigits = {
    order: 1,
    name: '銷售額',
    data: [4500, 5200, 3800, 2400, 3300, 2600, 2100],
  }
  const amountOfOrders = {
    order: 2,
    name: '訂單數',
    data: [35, 41, 62, 42, 13, 18, 29],
  }
  const turnOverPercentage = {
    order: 3,
    name: '下單轉換率',
    data: [8, 4, 6, 3, 2, 5, 7],
  }
  let averageMoneyArray = []
  for (let i = 0; i < 7; i++) {
    let averageMoney = Math.floor(salesDigits.data[i] / amountOfOrders.data[i])
    averageMoneyArray.push(averageMoney)
  }
  const averageMoneyPerOrder = {
    order: 4,
    name: '平均訂單金額',
    data: [...averageMoneyArray],
  }
  const noneRepeatVisitors = {
    order: 5,
    name: '不重複訪客',
    data: [170, 250, 300, 420, 288, 388, 217],
  }
  const pageViewsOfMerchants = {
    order: 6,
    name: '頁面瀏覽數',
    data: [436, 674, 700, 891, 603, 788, 567],
  }

  const [series, setSeries] = useState([salesDigits])
  const [durationDays, setDurationDays] = useState([...dateArray])

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="mb-1">關鍵指標</Card.Title>
          <Row>
            <Col xs={2}>
              <div
                className="key-card primary-top"
                onClick={(e) => {
                  console.log('1', series)
                  setSeries([...series, salesDigits])
                  if (e.target.classList[0] !== 'key-card') {
                    e.target.parentNode.classList.toggle('primary-top')
                  } else {
                    e.target.classList.toggle('primary-top')
                  }
                  series.forEach((item) => {
                    if (item.name === salesDigits.name) {
                      console.log('1')
                      const checkRepeat = (item) =>
                        item.name !== salesDigits.name
                      const newSeries = series.filter(checkRepeat)
                      setSeries([...newSeries])
                    } else if (series.indexOf(item) === -1) {
                      console.log('2')
                      setSeries([...series, salesDigits])
                    }
                    console.log(series)
                  })
                }}
              >
                <div className="key-title">銷售額</div>
                <span className="dollar-sign">$</span>
                <span className="key-number">
                  {salesDigits.data.reduce((a, b) => {
                    return a + b
                  }, 0)}
                </span>
              </div>
            </Col>
            <Col xs={2}>
              <div
                className="key-card"
                onClick={(e) => {
                  setSeries([...series, amountOfOrders])
                  if (e.target.classList[0] !== 'key-card') {
                    e.target.parentNode.classList.toggle('success-top')
                  } else {
                    e.target.classList.toggle('success-top')
                  }
                  series.forEach((item) => {
                    if (item.name === amountOfOrders.name) {
                      console.log('3')
                      const checkRepeat = (item) =>
                        item.name !== amountOfOrders.name
                      const newSeries = series.filter(checkRepeat)
                      setSeries([...newSeries])
                    } else if (series.indexOf(item) === -1) {
                      console.log('4')
                      setSeries([...series, amountOfOrders])
                    }
                    console.log(series)
                  })
                }}
              >
                <div className="key-title">訂單</div>
                <span className="key-number">
                  {amountOfOrders.data.reduce((a, b) => {
                    return a + b
                  }, 0)}
                </span>
              </div>
            </Col>
            <Col xs={2}>
              <div
                className="key-card"
                onClick={(e) => {
                  setSeries([...series, turnOverPercentage])
                  if (e.target.classList[0] !== 'key-card') {
                    e.target.parentNode.classList.toggle('danger-top')
                  } else {
                    e.target.classList.toggle('danger-top')
                  }
                  series.forEach((item) => {
                    if (item.name === turnOverPercentage.name) {
                      console.log('1')
                      const checkRepeat = (item) =>
                        item.name !== turnOverPercentage.name
                      const newSeries = series.filter(checkRepeat)
                      setSeries([...newSeries])
                    } else if (series.indexOf(item) === -1) {
                      console.log('2')
                      setSeries([...series, turnOverPercentage])
                    }
                    console.log(series)
                  })
                }}
              >
                <div className="key-title">下單轉換率</div>
                <span className="key-number">
                  {turnOverPercentage.data.reduce((a, b) => {
                    return a + b
                  }, 0) / 7}
                </span>
                <span className="percentage-sign">%</span>
              </div>
            </Col>
            <Col xs={2}>
              <div
                className="key-card"
                onClick={(e) => {
                  setSeries([...series, averageMoneyPerOrder])
                  if (e.target.classList[0] !== 'key-card') {
                    e.target.parentNode.classList.toggle('warning-top')
                  } else {
                    e.target.classList.toggle('warning-top')
                  }
                  series.forEach((item) => {
                    if (item.name === averageMoneyPerOrder.name) {
                      console.log('1')
                      const checkRepeat = (item) =>
                        item.name !== averageMoneyPerOrder.name
                      const newSeries = series.filter(checkRepeat)
                      setSeries([...newSeries])
                    } else if (series.indexOf(item) === -1) {
                      console.log('2')
                      setSeries([...series, averageMoneyPerOrder])
                    }
                    console.log(series)
                  })
                }}
              >
                <div className="key-title">平均訂單金額</div>
                <span className="dollar-sign">$</span>
                <span className="key-number">
                  {averageMoneyPerOrder.data.reduce((a, b) => {
                    return a + b
                  }, 0)}
                </span>
              </div>
            </Col>
            <Col xs={2}>
              <div
                className="key-card"
                onClick={(e) => {
                  setSeries([...series, noneRepeatVisitors])
                  if (e.target.classList[0] !== 'key-card') {
                    e.target.parentNode.classList.toggle('info-top')
                  } else {
                    e.target.classList.toggle('info-top')
                  }
                  series.forEach((item) => {
                    if (item.name === noneRepeatVisitors.name) {
                      console.log('1')
                      const checkRepeat = (item) =>
                        item.name !== noneRepeatVisitors.name
                      const newSeries = series.filter(checkRepeat)
                      setSeries([...newSeries])
                    } else if (series.indexOf(item) === -1) {
                      console.log('2')
                      setSeries([...series, noneRepeatVisitors])
                    }
                    console.log(series)
                  })
                }}
              >
                <div className="key-title">不重複訪客數</div>
                <span className="key-number">
                  {noneRepeatVisitors.data.reduce((a, b) => {
                    return a + b
                  }, 0)}
                </span>
              </div>
            </Col>
            <Col xs={2}>
              <div
                className="key-card"
                onClick={(e) => {
                  setSeries([...series, pageViewsOfMerchants])
                  if (e.target.classList[0] !== 'key-card') {
                    e.target.parentNode.classList.toggle('secondary-top')
                  } else {
                    e.target.classList.toggle('secondary-top')
                  }
                  series.forEach((item) => {
                    if (item.name === pageViewsOfMerchants.name) {
                      console.log('1')
                      const checkRepeat = (item) =>
                        item.name !== pageViewsOfMerchants.name
                      const newSeries = series.filter(checkRepeat)
                      setSeries([...newSeries])
                    } else if (series.indexOf(item) === -1) {
                      console.log('2')
                      setSeries([...series, pageViewsOfMerchants])
                    }
                    console.log(series)
                  })
                }}
              >
                <div className="key-title">商品頁面瀏覽數</div>
                <span className="key-number">
                  {pageViewsOfMerchants.data.reduce((a, b) => {
                    return a + b
                  }, 0)}
                </span>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={12}>
              <KeyIndexChart
                initData={series.sort((a, b) => a.order - b.order)}
                durationDays={durationDays}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  )
}

export default KeyIndex
