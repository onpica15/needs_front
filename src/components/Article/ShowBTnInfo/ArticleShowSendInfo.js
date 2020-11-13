import React from 'react'

import { Button } from 'react-bootstrap'
import './ArticleShowInfo.scss'

function ArticleShowInfo(props) {
  const { showInfo, closeHandler } = props
  return (
    <div
      className="ArticleShowInfo wrapper"
      style={{
        transform: showInfo ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: showInfo ? '1' : '0',
      }}
    >
      <div className="content">
        <p>已發送成功</p>

        <Button className="btn-cancel">確認</Button>
        <Button className="btn-cancel" onClick={closeHandler}>
          取消
        </Button>
      </div>
    </div>
  )
}

export default ArticleShowInfo
