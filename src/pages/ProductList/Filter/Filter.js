import React from 'react'
import { MdViewList, MdViewComfy } from 'react-icons/md'
import './Filter.scss'

const Filter = (props) => {
  const { setProductView } = props
  return (
    <>
      <div className="filter d-flex">
        <div className="col-4 d-flex">
          <p className="info amountName">商品數量</p>
          <p className="info amount">（ {props.totalPosts} ）</p>
        </div>
        <div className="filterRight col-8 d-flex justify-content-end">
          <div className="choiceView mr-1">
            <MdViewComfy size={40} onClick={() => setProductView(true)} />
            <MdViewList size={40} onClick={() => setProductView(false)} />
          </div>
          <label className="rightInfo">排序方式:</label>
          <select className="form-control" onChange={props.handleSort}>
            <option value="">請選擇</option>
            <option value="lastest">最新上架</option>
            <option value="-price">價格由低到高</option>
            <option value="price">價格由高到低</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default Filter
