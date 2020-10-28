import React, { useState, useEffect } from 'react'
import { MdViewList, MdViewComfy } from 'react-icons/md'
import './Filter.scss'

const Filter = (props) => {
  const { productView, setProductView } = props
  return (
    <>
      <div className="filter container d-flex">
        <div className="col-md-4">商品數量（ {props.totalPosts} ）</div>
        <div className="filterRight col-md-8 d-flex justify-content-end">
          <div className="choiceView">
            <MdViewComfy
              size={40}
              value={1}
              onClick={() => setProductView('bigPic')}
            />
            <MdViewList
              size={40}
              value={2}
              onClick={() => setProductView('list')}
            />
          </div>
          <label>排序方式:</label>
          <select
            className="form-control"
            value={props.sort}
            onChange={props.handleSort}
          >
            <option value="choiceId">請選擇</option>
            <option value="lastest">最新上架</option>
            <option value="lowest">價格由低到高</option>
            <option value="highest">價格由高到低</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default Filter
