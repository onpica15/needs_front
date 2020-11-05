import React from 'react'
import { withRouter } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const Breadcrumbs = (props) => {
  const {
    history,
    location: { pathname },
  } = props

  const pathnames = pathname.split('/').filter((x) => x)

  // console.log('props', props)
  // console.log('pathname', pathname)
  // console.log('pathnames', pathnames)

  return (
    <>
      <Breadcrumb>
        {pathnames.length > 0 ? (
          <Breadcrumb.Item onClick={() => history.push('/')}>
            首頁
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item active>首頁</Breadcrumb.Item>
        )}
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
          const isLast = index === pathnames.length - 1
          return isLast ? (
            <Breadcrumb.Item active key={name}>
              {name}
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item key={name} onClick={() => history.push(routeTo)}>
              {name}
            </Breadcrumb.Item>
          )
        })}
      </Breadcrumb>
    </>
  )
}

export default withRouter(Breadcrumbs)
