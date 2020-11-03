import React, { useState, useEffect } from 'react'
// import Axios from 'axios'
import Templatepic1 from './images/Atlanta_pro.png'
import TemplatepicBig from './images/minimal_pro.png'

import { Col, Container, Card, CardDeck, Row } from 'react-bootstrap'
import { FiHeart } from 'react-icons/fi'
import { Radio } from 'antd'

import './styles/TemplateList.scss'
import '../../../styles/Backend/_backend.scss'
import TemplateCard from './TemplateCard'

// class App extends React.Component {
//   state = {
//     value: 1,
//   };

//   onChange = e => {
//     console.log('radio checked', e.target.value);
//     this.setState({
//       value: e.target.value,
//     });
//   };

//   render() {
//     return (
//       <Radio.Group onChange={this.onChange} value={this.state.value}>
//         <Radio value={1}>free</Radio>
//         <Radio value={2}>pro</Radio>
//       </Radio.Group>
//     );
//   }
// }

// ReactDOM.render(<App />, mountNode);

function TemplateList(props) {
  //設定初始狀態
  const [Template ,setTemplate ]= useState([])
  const [error,setError] = useState(null)
  const [type,setType] = useState(1)

  //server-data
  async function getTemplateData(type){
    // setDataLoading(true)// 載入資料就先打開
    console.log('type',type)
    const url =`http://localhost:5000/TemplateList?type=${type}`
    const request = new Request(url, {
        method:'GET',
        headers:new Headers({
            Accept:'application/json',
            'Content-Type':'application/json'
        }),
    })
    try{
      const response = await fetch(request)//response:fetch網址的資料
      const data = await response.json()
      // console.log(data)
      setTemplate(data)
    }catch(error){
      setError(error)
    }
}

    useEffect(() => {
      getTemplateData(type)
    }, [type])

  return (
    <>
      <div className="template">
        <Col className="offset-2" xs={10}>
          <Container fluid className="">
            <div className="d-flex justify-content-end ">
              <div className="main-div rounded mr-2">
                <p className="f-14">熱門程度</p>
              </div>
              <div className="main-div rounded">
                <p className="f-14">
                  主題類別：<Radio> 全部 </Radio> <Radio> 標準方案 </Radio> <Radio> 進階方案 </Radio>
                </p>
              </div>
            </div>
            <hr />
          </Container>
        </Col>
      </div>

      {/* ############# */}

      <div className="template">
        <Col className="offset-2" xs={10}>
          <Container fluid>
            <div className="main-div recommend rounded d-flex align-items-center ">
              <div className="row rounded d-flex align-items-center">
                <div className="col-8">
                  <img
                    src={Templatepic1}
                    className="main-small-pic"
                    alt="Responsive image"
                  ></img>
                  <img
                    src={TemplatepicBig}
                    className="img-fluid main-bg-pic"
                    alt="Responsive image"
                  ></img>
                </div>
                <div className="col-4 mh-100 text-adjust">
                  <div className="d-flex flex-column justify-content-around ">
                    <h1 className="h4">Narrative</h1>
                    <p className="mt-2">方案：FREE</p>
                    <div className="pb-2">
                      <button className="btn-bg gray mt-2">
                        <FiHeart /> 加入收藏
                      </button>
                    </div>
                    <div>
                      <button className="btn-bg purple mt-2" >立即套用</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Col>
      </div>
      
      {/* TemplateCard */}


      <div className="template mt-3">
        <Col className="offset-2" xs={10}>
          <Container fluid>
            <Row>
              <CardDeck className="pb-3 card-adjust">
                
                <TemplateCard Template = {Template} />

              </CardDeck>

            </Row>

          </Container>
        </Col>
      </div>
    </>
  )
}

export default TemplateList
