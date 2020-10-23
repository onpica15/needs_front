import React from 'react'
import { Link } from 'react-router-dom'
import { Card, ListGroup, Badge } from 'react-bootstrap'

function DispatchStatus() {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="mb-0">出貨狀況</Card.Title>
        </Card.Body>
        <ListGroup>
          <ListGroup.Item>
            待出貨
            <Badge pill variant="primary" className="float-right">
              8
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item>
            已出貨
            <Badge pill variant="success" className="float-right">
              4
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item>
            要求退貨
            <Badge pill variant="danger" className="float-right">
              2
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item>
            提出取消
            <Badge pill variant="warning" className="float-right">
              6
            </Badge>
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Link to="" className="card-link">
            訂單詳情
          </Link>
        </Card.Body>
      </Card>
    </>
  )
}

export default DispatchStatus
