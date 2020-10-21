import React from 'react'
import { Card, Table } from 'react-bootstrap'

function DispatchStatus() {
  return (
    <>
      <Card className="delivery-data revenue">
        <Card.Header>
          <div className="revenue-title">待處理訂單</div>
        </Card.Header>
        <Table hover borderless className="">
          <thead>
            <tr>
              <th>訂單編號</th>
              <th>狀態</th>
              <th>金額</th>
              <th>取貨方式</th>
              <th>日期</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#879985</td>
              <td>
                <i className="fas fa-circle circle-not-shipped"></i>待出貨
              </td>
              <td>$500</td>
              <td>全家</td>
              <td>2020/11/16</td>
            </tr>
            <tr>
              <td>#156897</td>
              <td>
                <i className="fas fa-circle circle-not-shipped"></i>待出貨
              </td>
              <td>$800</td>
              <td>7-11</td>
              <td>2020/11/14</td>
            </tr>
            <tr>
              <td>#568975</td>
              <td>
                <i className="fas fa-circle circle-refund"></i>要求退貨
              </td>
              <td>$600</td>
              <td>萊爾富</td>
              <td>2020/11/13</td>
            </tr>
            <tr>
              <td>#245689</td>
              <td>
                <i className="fas fa-circle circle-cancel"></i>提出取消
              </td>
              <td>$300</td>
              <td>OK</td>
              <td>2020/11/11</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </>
  )
}

export default DispatchStatus
