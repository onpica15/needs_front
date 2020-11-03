import React, { useState } from 'react'
import { Card, Table, Button, Modal } from 'react-bootstrap'
import AddAdsModal from './AddAdsModal'
import {} from 'react-icons/ai'

function InProgressAds() {
  return (
    <>
      <div className="in-progress-wrapper">
        <Card>
          <Card.Body>
            <div className="in-progress-card-header">
              <Card.Title className="mb-3">已投放之廣告</Card.Title>
              <AddAdsModal />
            </div>
            <div className="table-container">
              <Table hover borderless className="in-progress-table mt-3">
                <thead className="in-progress-header">
                  <tr>
                    <th>訂單編號</th>
                    <th>廣告名稱</th>
                    <th>狀態</th>
                    <th>廣告格式</th>
                    <th>預算</th>
                    <th>曝光次數</th>
                    <th>點擊次數</th>
                    <th>CTR</th>
                    <th>CPC</th>
                    <th>總成本</th>
                    <th>起始時間</th>
                    <th>結束時間</th>
                    <th>活動天數</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#879985</td>
                    <td>小亞細亞</td>
                    <td>投放中</td>
                    <td>首頁廣告</td>
                    <td>$5000</td>
                    <td>2050</td>
                    <td>46</td>
                    <td>{((46 / 2050) * 100).toFixed(1)} %</td>
                    <td>22 $</td>
                    <td>{46 * 22}</td>
                    <td>2020/10/12</td>
                    <td>2020/10/14</td>
                    <td>3</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default InProgressAds
