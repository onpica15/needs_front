import React, { useState } from 'react'

import { Range } from 'rc-slider'

import 'rc-slider/assets/index.css'
import './SideFilter.scss'

const SideFilter = (props) => {
  const [price, setPrice] = useState([400, 1300])

  const sliderProps = {
    min: 0,
    max: 2000,
    step: 50,
    marks: {
      0: 0,
      1000: 1000,
      2000: 2000,
    },
  }

  const onSliderChange = (price) => {
    console.log(price)
    setPrice(price)
  }

  return (
    <>
      <div className="sideFilter priceRange">
        <div className="filterItem">
          <h6 className="title">價格範圍</h6>
          <div>
            <div className="showPrice">
              <label>{price[0]}</label>
              <label>-</label>
              <label>{price[1]}</label>
            </div>
            <Range
              allowCross={false}
              defaultValue={[400, 1300]}
              onChange={onSliderChange}
              {...sliderProps}
            />
          </div>
        </div>
        <div className="filterItem">
          <h6 className="title">顏色分類</h6>
          <div className="d-flex colorSelect">
            <div className="color red" onClick={(e) => console.log('1')}></div>
            <div
              className="color orange"
              onClick={(e) => console.log('2')}
            ></div>
            <div
              className="color yellow"
              onClick={(e) => console.log('3')}
            ></div>
            <div
              className="color Indigo"
              onClick={(e) => console.log('4')}
            ></div>
            <div
              className="color green"
              onClick={(e) => console.log('5')}
            ></div>
          </div>
        </div>
        <div className="filterItem">
          <h6 className="title">評價</h6>
          <input />
        </div>
        <div className="filterItem">
          <h6 className="title">其他篩選</h6>
          <div>
            <input type="checkbox" />
            <label>可用e幣</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>尚有庫存</label>
          </div>
        </div>
      </div>

      <button>套用搜尋</button>
    </>
  )
}

export default SideFilter
