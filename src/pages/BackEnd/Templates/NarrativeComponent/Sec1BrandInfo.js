import React, { useState, useEffect } from 'react'
import {
  Col,
  Container,
  Row
} from 'react-bootstrap'
import { GiPositionMarker } from 'react-icons/gi';
import { AiTwotoneShop,AiTwotonePhone } from "react-icons/ai";
import { SignalCellularNullSharp } from '@material-ui/icons';

function Sec1BrandInfo(props){
  const { displayBgImg,color } = props
    return(
        <>
            <div className="Narrative">
<div className="sec1_background" style={{ backgroundImage : `url(${displayBgImg})`}}></div>
          <div className="background-color" style={{
            backgroundColor:props.color,
          }}></div>
          <Container className="p-0">
            <div className="sec1 d-flex">
            <div className="sec1_avatar m-auto">
              <div className="d-flex mx-auto">
                <div className="d-flex ml-3">  
                <div className="d-flex flex-column align-items-center">
                
                <div className="avatar rounded pb-3"></div>
                  <button className="store-follower-btn rounded">+關注</button>
                </div>
                  
                  <div className="d-flex flex-column">
                <h2 className="h4">name</h2>
                  <div className="mt-3">
                  <h4><AiTwotoneShop/>enname</h4>
                  <h4><AiTwotonePhone/>tel</h4>
                  <h4><GiPositionMarker/>address</h4>
                  </div>
              </div>
                  </div>
        
              </div>
            </div>  

            <div className="sec1_info">
              <Row className="row1 mx-auto">
                  <Col>
                  <h4>評價</h4>
                  <h4 className="red">尚無評價</h4>
                  </Col>
                  <Col>
                  <h4>粉絲</h4>
                  <h4 className="red">0</h4>
                  </Col>
                  <Col>
                  <h4>商品</h4>
                  <h4 className="red">106</h4>
                  </Col>
                </Row>
                <Row className="mx-auto">
                  <Col>
                    <h4>加入時間</h4>
                    <h4>2019/10/05</h4>
                    </Col>
                    <Col>
                    <h4>回應速度</h4>
                    <h4>尚無評價</h4>
                    </Col>
                    <Col>
                    <h4>出貨速度</h4>
                    <h4>尚無評價</h4>
                    </Col>
                </Row> 
            </div>
            </div>
            </Container>
</div>
        </>
    )
}
export default Sec1BrandInfo 
