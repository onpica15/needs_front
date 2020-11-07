import React, { useState } from 'react'
import { Range } from 'rc-slider'
import { Button } from 'react-bootstrap'
import StarRating from '../../../components/StarRating'
import 'rc-slider/assets/index.css'
import './SideFilter.scss'

const SideFilter = (props) => {
  const { ecoin, setEcoin, price, setPrice } = props
  // setting PriceRang

  //setting handlePrice step
  const sliderProps = {
    min: 0,
    max: 10000,
    step: 100,
    marks: {
      0: 0,
      5000: 5000,
      10000: 10000,
    },
  }

  const onSliderChange = (price) => {
    console.log(price[0])
    console.log(price[1])
    setPrice(price)
  }

  const checkUseEcoin = () => {
    setEcoin(!ecoin)
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
              defaultValue={[500, 6000]}
              onChange={onSliderChange}
              {...sliderProps}
            />
          </div>
        </div>

        <div className="filterItem starSelect">
          <h6 className="title">評價</h6>
          <StarRating />
        </div>
        <div className="filterItem">
          <h6 className="title">其他篩選</h6>
          <div>
            <label>
              <input type="checkbox" checked={ecoin} onChange={checkUseEcoin} />
              可用e幣
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideFilter
