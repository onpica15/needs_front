import React from 'react'
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap'
import './investment.scss'
import InvestmentAdvantage from '../../components/InvestmentAdvantage'
import brandData from '@assets/data/brands.json'

const Investment = () => {
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
                src={require('@assets/img/investment/2_template1.jpg')}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('@assets/img/investment/2_template2.jpg')}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('@assets/img/investment/2_template3.jpg')}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('@assets/img/investment/2_template4.jpg')}
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
        <div className="brandListSec">
          <div className="secTitle">
            <h4>已加入NEEDS品牌</h4>
            <span>超過100個優秀設計品牌已加入NEEDS</span>
          </div>
          <div className="brandContent">
            {brandData.map((item, index) => {
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
          </div>
        </div>
        <div className="storePromSec">
          <span>立即申請加入 NEEDS！</span>
          <span>
            馬上開始填寫申請表，加入這些優秀設計品牌的行列，和
            NEEDS一起為你的品牌開啓新的歷程吧！
          </span>
          <Button className="btn btn-light">立即開店 →</Button>
        </div>
        <div class="questionSec">
          <div class="secTitle">
            <h4>常見問題</h4>
          </div>
          <div class="questionContent">
            <ul class="question">
              <li></li>
            </ul>
            <ul class="answer">
              <li></li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Investment
