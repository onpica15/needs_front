import React, { useState, useEffect } from 'react'

import Templatepic1 from './images/Atlanta_pro.png'
import TemplatepicBig from './images/minimal_pro.png'
import './styles/TemplateList.scss'
import '../../../styles/Backend/_backend.scss'

import { Col, Container, Card, CardDeck, Row } from 'react-bootstrap'

import { FiHeart } from 'react-icons/fi'

import { Radio } from 'antd'

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
                  主題類別：<Radio> pro </Radio> <Radio> free </Radio>
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
                    class="main-small-pic"
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
                      <button className="btn-bg purple mt-2">立即套用</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Col>
      </div>
      {/* ############### */}

      <div className="template mt-5">
        <Col className="offset-2" xs={10}>
          <Container fluid>
            <Row>
              <CardDeck className="pb-3 card-adjust">
                {' '}
                <Card className="rounded">
                  <Card.Img className="p-3" variant="top" src={Templatepic1} />
                  <div className="align-items:center">
                    <Card.Title className="text-center">Narrative</Card.Title>
                    <Card.Text className="text-center">FREE</Card.Text>
                    <Container className="d-flex p-0">
                      <button className="btn-sml gray left">
                        <FiHeart /> 加入收藏
                      </button>
                      <button className="btn-sml purple right">立即套用</button>
                    </Container>
                  </div>
                </Card>
                <Card className="rounded">
                  <Card.Img className="p-3" variant="top" src={Templatepic1} />
                  <div className="align-items:center">
                    <Card.Title className="text-center">Narrative</Card.Title>
                    <Card.Text className="text-center">FREE</Card.Text>
                    <Container className="d-flex p-0">
                      <button className="btn-sml gray left">
                        <FiHeart /> 加入收藏
                      </button>
                      <button className="btn-sml purple right">立即套用</button>
                    </Container>
                  </div>
                </Card>
                <Card className="rounded">
                  <Card.Img className="p-3" variant="top" src={Templatepic1} />
                  <div className="align-items:center">
                    <Card.Title className="text-center">Narrative</Card.Title>
                    <Card.Text className="text-center">FREE</Card.Text>
                    <Container className="d-flex p-0">
                      <button className="btn-sml gray left">
                        <FiHeart /> 加入收藏
                      </button>
                      <button className="btn-sml purple right">立即套用</button>
                    </Container>
                  </div>
                </Card>
              </CardDeck>
            </Row>

            <Row>
              <CardDeck className="pb-3 card-adjust">
                {' '}
                <Card className="rounded">
                  <Card.Img className="p-3" variant="top" src={Templatepic1} />
                  <div className="align-items:center">
                    <Card.Title className="text-center">Narrative</Card.Title>
                    <Card.Text className="text-center">FREE</Card.Text>
                    <Container className="d-flex p-0">
                      <button className="btn-sml gray left">
                        <FiHeart /> 加入收藏
                      </button>
                      <button className="btn-sml purple right">立即套用</button>
                    </Container>
                  </div>
                </Card>
                <Card className="rounded">
                  <Card.Img className="p-3" variant="top" src={Templatepic1} />
                  <div className="align-items:center">
                    <Card.Title className="text-center">Narrative</Card.Title>
                    <Card.Text className="text-center">FREE</Card.Text>
                    <Container className="d-flex p-0">
                      <button className="btn-sml gray left">
                        <FiHeart /> 加入收藏
                      </button>
                      <button className="btn-sml purple right">立即套用</button>
                    </Container>
                  </div>
                </Card>
                <Card className="rounded">
                  <Card.Img className="p-3" variant="top" src={Templatepic1} />
                  <div className="align-items:center">
                    <Card.Title className="text-center">Narrative</Card.Title>
                    <Card.Text className="text-center">FREE</Card.Text>
                    <Container className="d-flex p-0">
                      <button className="btn-sml gray left">
                        <FiHeart /> 加入收藏
                      </button>
                      <button className="btn-sml purple right">立即套用</button>
                    </Container>
                  </div>
                </Card>
              </CardDeck>
            </Row>
          </Container>
        </Col>
      </div>
    </>
  )
}

export default TemplateList
