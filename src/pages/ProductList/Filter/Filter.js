import React from 'react'
import { MdViewList, MdViewComfy } from 'react-icons/md'
import './Filter.scss'

const Filter = (props) => {
  const { setProductView } = props
  return (
    <>
      <div className="filter container d-flex">
        <div className="col-md-4">商品數量（ {props.totalPosts} ）</div>
        <div className="filterRight col-md-8 d-flex justify-content-end">
          <div className="choiceView">
            <MdViewComfy size={40} onClick={() => setProductView(true)} />
            <MdViewList size={40} onClick={() => setProductView(false)} />
          </div>
          <label>排序方式:</label>
          <select className="form-control" onChange={props.handleSort}>
            <option value="?">請選擇</option>
            <option value="?sort=lastest">最新上架</option>
            <option value="-price">價格由低到高</option>
            <option value="price">價格由高到低</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default Filter
