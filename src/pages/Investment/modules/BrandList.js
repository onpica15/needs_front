import React from 'react'
import BrandData from '@assets/data/brands.json'
import { Trail, animated } from 'react-spring/renderprops'

const BrandList = () => {
  return (
    <>
      <Trail
        items={BrandData}
        keys={(item) => item.id}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {(item) => ({ opacity }) => (
          <animated.div style={{ opacity }} className="brandInfo">
            <img
              src={require(`@assets/img/investment/${item.imgName}`)}
              alt={item.brandName}
              className="brandLogo"
            />
            <p className="brandName">{item.brandName}</p>
          </animated.div>
        )}
      </Trail>
      <i aria-hidden="true" />
      <i aria-hidden="true" />
      <i aria-hidden="true" />
      <i aria-hidden="true" />
    </>
  )
}

export default BrandList
