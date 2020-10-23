import React from 'react'
import './home.scss'
import CarouselBanner from '../../components/frontend/Home/Carousel'
import Categories from '../../components/frontend/Home/Categories'
import HotProduct from '../../components/frontend/Home/HotProduct'
import RecommendStore from '../../components/frontend/Home/RecommendStore'
import Coupon from '../../components/frontend/Home/Coupon'
import ReasonToJoinUs from '../../components/frontend/Home/ReasonToJoinUs'

const Home = () => {
  return (
    <>
      <div className="home-wrapper">
        <CarouselBanner />
        <Categories />
        <HotProduct />
        <RecommendStore />
        <Coupon />
        {/* <ReasonToJoinUs /> */}
      </div>
    </>
  )
}

export default Home
