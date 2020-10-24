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

        <div className="advantageContent">
          <div className="advImg">
            <img src={require('@assets/img/investment/3-advimg1.png')} alt="" />
          </div>
          <div className="textodd">
            <h4>完整的銷售報表</h4>
            <p>NEEDS提供給商家完整的銷售數據</p>
            <p>透過後台系統即時查看財務報表</p>
            <p>精準地洞察行銷漏斗</p>
          </div>
          <div className="order">1</div>
        </div>

        <div className="advantageContent">
          <div className="order">2</div>
          <div className="texteven">
            <h4>創意的聚集經濟</h4>
            <p>這裡聚集了全台優質的獨立創作者</p>
            <p>販售獨一無二的設計品</p>
            <p>是台灣最大的創意小物集散地</p>
          </div>
          <div className="advImg">
            <img src={require('@assets/img/investment/3-advimg2.png')} alt="" />
          </div>
        </div>

        <div className="advantageContent">
          <div className="advImg">
            <img src={require('@assets/img/investment/3-advimg3.png')} alt="" />
          </div>
          <div className="textodd">
            <h4>穩定流量帶來曝光</h4>
            <p>成為我們的合作夥伴</p>
            <p>透過社群行銷為自己的的商店</p>
            <p>帶來更多的曝光以及流量</p>
          </div>
          <div className="order">3</div>
        </div>

        <div className="advantageContent">
          <div className="order">4</div>
          <div className="texteven">
            <h4>商品退貨率低於3</h4>
            <p>核心客群黏著度高</p>
            <p>對設計品牌具有極高認同度和忠誠度</p>
          </div>
          <div className="advImg">
            <img src={require('@assets/img/investment/3-advimg4.png')} alt="" />
          </div>
        </div>

        <div className="advantageContent">
          <div className="advImg">
            <img src={require('@assets/img/investment/3-advimg5.png')} alt="" />
          </div>
          <div className="textodd">
            <h4>會員數超過100萬</h4>
            <p>新會員持續增長</p>
            <p>每日穩定的客流造訪網站</p>
          </div>
          <div className="order">5</div>
        </div>
      </div>
    </>
  )
}

export default InvestmentAdvantage
