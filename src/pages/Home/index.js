import React from 'react'
import { Container, Carousel, Col } from 'react-bootstrap'
import './home.scss'
import CarouselBanner1 from './images/index-banner-01.jpg'
import CarouselBanner2 from './images/index-banner-02.jpg'
import CarouselBanner3 from './images/index-banner-03.jpg'
const Home = () => {
  return (
    <>
      <Container fluid>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={CarouselBanner1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={CarouselBanner2}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={CarouselBanner3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  )
}

export default Home
