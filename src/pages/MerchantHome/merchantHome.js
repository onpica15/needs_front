import React, { useState, useEffect } from 'react'
import {
    Col,
    Container,
    Row
  } from 'react-bootstrap'
import './styles/merchantHome.scss'

function MerchantHome(){


    return(
        <>
          <div className="merchantHome">
            
            <div className="sec1_background"></div>

            <div className="sec1 d-flex">
              <div className="sec1_avatar">
              <row className="d-inline-flex mx-auto">
                <div className="col-4 d-flex flex-column align-items-center my-auto">
                  <div className="avatar rounded pb-3"></div>
                  <button className="store-follower-btn rounded">+關注</button>
                  </div>
                <div className="col-8 ">
                  <h2 className="h4 mt-1">愛治文具房</h2>
                  <div className="mt-3">
                  <h4>aiyabungu</h4>
                  <h4>電話：0975-875120</h4>
                  <h4>地址：彰化縣彰化市長安街76巷7-2號1樓</h4>
                  </div>
                </div>
              </row>
              </div>

              <div className="sec1_info d-flex flex-column">
                <Row className="row1">
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
                <Row>
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

            <div className="sec2">
              <div className="d-inline-flex">
              <div className="product-bg-pic"></div>
              </div>
            </div>

            <div className="sec3">
              商品列表
            </div>

            <div className="sec4">
              {/* <div className="activities-wrapper d-flex align-items-end m-auto"> */}
                
              <div className="activities-wrapper d-flex align-items-end m-auto mt-5">
              <div className="activities-img"></div>
                <div className="text d-flex flex-column justify-content-between m-auto">
                      <h2>玩浮水畫 縫中式冊子【 1 人成團】</h2>
                      <h4>課程日期：</h4>
                      <p>2020/11/24(二)14:00~16:00</p>
                      <p>2020/11/26(四)14:00~16:00</p>
                      <h4>地點：</h4>
                      <p>來本冊子工作室</p>
                      <p>苗栗市中正路1381號 (協和醫院旁)</p>
                      <button className="activity-btn rounded">立即報名</button>
                    </div>
              </div>
                  
              {/* </div> */}
            </div>

            <div className="sec5">

            <div className="row">
              <div className="underline-wrapper">
              <div className="underline">
              <h2>品牌故事</h2>
              </div>
              <div className="brandStory_img"></div>
              <div className="img"></div>
              </div>
              
              <div className="text-wrapper">
              <h4>
                愛治文具房-充滿文具的房間 愛治是我奶奶的名字。

                小時候因為父母忙碌也有段時間沒有住在一起，因此奶奶教了我許多生活的道理，處事的方法。溫暖待人是最重要的。今年我的奶奶九十歲了還是很健康的陪在我們家人的身邊：） 希望這家生活文具店能夠像奶奶一樣一直一直在彰化陪著大家走下去。
              </h4>
              </div>
              </div>

            </div>
          </div>
        </>
    )
}
export default MerchantHome