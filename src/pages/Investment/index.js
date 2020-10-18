import React, { useState } from 'react'
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap'
import './investment.scss'
import InvestmentAdvantage from '../../components/InvestmentAdvantage'
import BrandList from './modules/BrandList'
import CollapseList from './modules/CollapseList'
import CollapseData from '@assets/data/investment_q&a.json'

const Investment = () => {
  return (
    <>
      <Container className="investment">
        <div className="bannerSec">
          <h2 className="">Build Your Online Business with NEEDS</h2>
          <Button>立即開店 →</Button>
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
        <div class="feeSec">
          <div class="secTitle">
            <h4>平台費用</h4>
          </div>
          <div className="feeContent">
            <div className="standardPlan">
              <img
                src={require(`@assets/img/investment/6_winner.png`)}
                alt=""
                class="planIcon"
              />
              <h4>標準方案 Standard</h4>
              <div className="plan">
                <ul>
                  <li>保證金 $10,000</li>
                  <li>月租費 $1,500</li>
                  <li>免成交手續費</li>
                  <li>免訂單處理費</li>
                </ul>
              </div>
            </div>
            <div className="premiumPlan">
              <img
                src={require(`@assets/img/investment/6_diamond.png`)}
                alt=""
                class="planIcon"
              />
              <h4>進階方案 Premium</h4>
              <div className="plan">
                <ul>
                  <li>保證金 $10,000</li>
                  <li>月租費 $2,000</li>
                  <li>免成交手續費</li>
                  <li>免訂單處理費</li>
                </ul>
              </div>
            </div>
            <Button variant="light">方案詳情 →</Button>
          </div>
        </div>
        <div className="brandListSec">
          <div className="secTitle">
            <h4>已加入NEEDS品牌</h4>
            <span>超過100個優秀設計品牌已加入NEEDS</span>
          </div>
          <div className="brandContent">
            <BrandList />
          </div>
        </div>
        <div className="storePromSec">
          <span>立即申請加入 NEEDS！</span>
          <span>
            馬上開始填寫申請表，加入這些優秀設計品牌的行列，和
            NEEDS一起為你的品牌開啓新的歷程吧！
          </span>
          <Button variant="light">立即開店 →</Button>
        </div>
        <div class="questionSec">
          <div class="secTitle">
            <h4>常見問題</h4>
          </div>
          <div class="questionContent">
            <CollapseList CollapseData={CollapseData} />
            <div>
              <Button>查看更多問與答 →</Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Investment
