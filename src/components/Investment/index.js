import React from 'react'
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap'
import './investment.scss'
import InvestmentAdvantage from '../InvestmentAdvantage'

const InvestmentMain = () => {
  return (
    <>
      <Container className="investment">
        <div className="bannerSec">
          <h2 className="">Build Your Online Business with NEEDS</h2>
          <Button className="btn btn-primary">立即開店 →</Button>
        </div>
        <div className="silderSec">
          <div className="secTitle">
            <h4>設計品牌風格</h4>
            <span>不懂團像處理、程式編輯也能輕鬆操作</span>
          </div>
          <Carousel className="templateSilder">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../../img/investment/2_template1.jpg')}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../../img/investment/2_template2.jpg')}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../../img/investment/2_template3.jpg')}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../../img/investment/2_template4.jpg')}
                alt="Forth slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="advantageSec">
          <div className="secTitle">
            <h4>5大優勢</h4>
            <span>加入NEEDS行銷加倍成長</span>
          </div>
          <InvestmentAdvantage />
        </div>
      </Container>
    </>
  )
}

export default InvestmentMain
