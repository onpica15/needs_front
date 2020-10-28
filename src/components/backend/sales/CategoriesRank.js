import React, { useState } from 'react'
import { Card, Tabs, Tab, Table } from 'react-bootstrap'

function CategoriesRank() {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="mb-1">分類排名</Card.Title>
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
                  <tbody className="rank-body">
                    <tr>
                      <td>1</td>
                      <td>橡皮擦</td>
                      <td>$825</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>筆</td>
                      <td>$575</td>
                    </tr>
                  </tbody>
                </Table>
              </Tab>
            </Tabs>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default CategoriesRank
