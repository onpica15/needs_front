import React from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import '@/styles/investmentAdvantage.scss'

const InvestmentAdvantage = () => {
  return (
    <>
      <div className="advantageSec">
        <div className="secTitle">
          <h4>5大優勢</h4>
          <span>加入NEEDS行銷加倍成長</span>
        </div>
        <div class="advantageContent">
          <div className="advImg">
            <img src={require('@assets/img/investment/3-advimg1.png')} alt="" />
          </div>
          <div className="d-flex">
            <div className="avdText">
              <h4>完整的銷售報表</h4>
              <p>NEEDS提供給商家完整的銷售數據</p>
              <p>透過後台系統即時查看財務報表</p>
              <p>精準地洞察行銷漏斗</p>
            </div>
            <div className="advNum">1</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InvestmentAdvantage
