import React from 'react'
import BrandData from '@assets/data/brands.json'
import { animated, useTrail } from 'react-spring'

const BrandList = ({ show }) => {
  const trail = useTrail(BrandData.length, {
    config: { duration: 1500 },
    from: { opacity: 0 },
    ...(show && { to: { opacity: 1 } }),
  })

  return (
    <>
      {trail.map((props, index) => {
        const item = BrandData[index]
        return (
          <animated.div key={item.id} style={props} className="brandInfo">
            <img
              src={require(`@assets/img/investment/${item.imgName}`)}
              alt={item.brandName}
              className="brandLogo"
            />
            <p className="brandName">{item.brandName}</p>
          </animated.div>
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
