import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Breadcrumb } from 'react-bootstrap'

function BreadcrumbBackend(props) {
  let path = ''
  const pathname = props.location.pathname

  switch (pathname) {
    case '/customer-backend':
      path = 'Dashboard'
      break
    case '/customer-backend/productsmanagement':
      path = '商品管理'
      break
    case '/customer-backend/ordersmanagement':
      path = '訂單管理'
      break
    case '/customer-backend/contractsmanagement':
      path = '平台合約'
      break
    default:
      path = ''
  }

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href={pathname}>{path}</Breadcrumb.Item>
      </Breadcrumb>
    </>
  )
}

export default withRouter(BreadcrumbBackend)
