import React, { useState, useEffect } from 'react'
import { MdViewList, MdViewComfy } from 'react-icons/md'
import './Filter.scss'

const Filter = (props) => {
  return (
    <>
      <div className="filter container d-flex">
        <div className="col-md-4">商品數量（ {props.totalPosts} ）</div>
        <div className="filterRight col-md-8 d-flex justify-content-end">
          <div className="choiceView">
            <MdViewComfy size={40} />
            <MdViewList size={40} />
          </div>
          <label>排序方式:</label>
          <select
            className="form-control"
            value={props.sort}
            onChange={props.handleChangeSort}
          >
            <option value="">請選擇</option>
            <option value="lowest">價格由低到高</option>
            <option value="highest">價格由高到低</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default Filter
