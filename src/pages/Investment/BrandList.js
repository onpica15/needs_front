import React from 'react'
import BrandData from '@assets/data/brands.json'

const BrandList = () => {
  return (
    <>
      {BrandData.map((item, index) => {
        return (
          <div key={item.id} className="brandInfo">
            <img
              src={require(`@assets/img/investment/${item.imgName}`)}
              alt={item.brandName}
              className="brandLogo"
            />
            <p className="brandName">{item.brandName}</p>
          </div>
        )
      })}
      <i aria-hidden="true" />
      <i aria-hidden="true" />
      <i aria-hidden="true" />
      <i aria-hidden="true" />
    </>
  )
}

export default BrandList
