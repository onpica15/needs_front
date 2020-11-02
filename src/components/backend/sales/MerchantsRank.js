import React, { useState, useEffect } from 'react'
import { Card, Tabs, Tab, Table } from 'react-bootstrap'
import Axios from 'axios'

function MerchantsRank() {
  const [totalRevenue, setTotalRevenue] = useState([])
  const [dataTableForRevenue, setDataTableForRevenue] = useState([])
  const [dataTableForAmount, setDataTableForAmount] = useState([])
  const getProductRank = () => {
    Axios.get('http://localhost:5000/dashboard/merchantsellrank').then(
      (response) => {
        const data = response.data
        let dataTitleArray = []
        let revenueArray = []
        for (let i = 0; i < data.length; i++) {
          dataTitleArray.push(data[i].title)
          revenueArray.push(data[i].unit_price)
        }
        console.log(dataTitleArray, revenueArray)
        let result = {}
        dataTitleArray.forEach((x) => {
          result[x] = (result[x] || 0) + 1
        })
        let allProduct = Object.keys(result)
        let totalAmount = Object.values(result)
        console.log(allProduct, totalAmount)
        for (let i = 0; i < allProduct.length; i++) {
          dataTableForAmount.push(
            <>
              <tr>
                <td>{i + 1}</td>
                <td>{allProduct[i]}</td>
                <td>{totalAmount[i]}</td>
              </tr>
            </>
          )
        }
        setDataTableForAmount(dataTableForAmount)

        for (let i = 0; i < data.length; i++) {
          revenueArray.push(data[i].unit_price)
        }
        // console.log(totalAmount, revenueArray)
        setTotalRevenue(totalRevenue)
      }
    )
  }
  useEffect(() => {
    getProductRank()
  }, [])

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="mb-3">商品排名</Card.Title>
          <div className="rank-wrapper">
            <Tabs
              defaultActiveKey="saleMoney"
              id="uncontrolled-tab-example"
              className="mt-3 rank-tabs"
            >
              <Tab eventKey="saleMoney" title="銷售額">
                <Table borderless className="">
                  <thead className="rank-header">
                    <tr>
                      <th>排名</th>
                      <th>商品</th>
                      <th>銷售額</th>
                    </tr>
                  </thead>
                  <tbody className="rank-body">{dataTableForAmount}</tbody>
                </Table>
              </Tab>
              <Tab eventKey="saleDigit" title="售出件數">
                <Table borderless className="">
                  <thead className="rank-header">
                    <tr>
                      <th>排名</th>
                      <th>商品</th>
                      <th>售出件數</th>
                    </tr>
                  </thead>
                  <tbody className="rank-body">{dataTableForAmount}</tbody>
                </Table>
              </Tab>
              {/* <Tab eventKey="browse" title="頁面瀏覽數">
                <Table borderless className="">
                  <thead className="rank-header">
                    <tr>
                      <th>排名</th>
                      <th>商品</th>
                      <th>頁面瀏覽數</th>
                    </tr>
                  </thead>
                  <tbody className="rank-body">
                    <tr>
                      <td>1</td>
                      <td>【Ｍister】歐式復古羽毛筆沾水鋼筆禮盒</td>
                      <td>1200</td>
                    </tr>
                  </tbody>
                </Table>
              </Tab>
              <Tab eventKey="turnover" title="付款訂單轉換率">
                <Table borderless className="">
                  <thead className="rank-header">
                    <tr>
                      <th>排名</th>
                      <th>商品</th>
                      <th>付款訂單轉換率</th>
                    </tr>
                  </thead>
                  <tbody className="rank-body">
                    <tr>
                      <td>1</td>
                      <td>【Ｍister】歐式復古羽毛筆沾水鋼筆禮盒</td>
                      <td>5%</td>
                    </tr>
                  </tbody>
                </Table>
              </Tab> */}
            </Tabs>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default MerchantsRank
