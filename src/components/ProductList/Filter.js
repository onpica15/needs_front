import React, { useState, useEffect } from 'react'

const Filter = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-md-4">商品數量（{props.count} ）</div>
        <div className="col-md-4">
            <label>
                排序方式
                <select className="form-control" value={props.sort}
                onChange={props.handleChangeSort}>
                    <option value="">請選擇</option>
                    <option value="lowest">價格由低到高</option>
                    <option value="highest">價格由高到低</option>
                </select>
            </label>
        </div>
      </div>
    </>
  )
}

export default Filter
