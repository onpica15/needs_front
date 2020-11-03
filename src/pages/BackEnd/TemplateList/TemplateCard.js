import React, { useState } from 'react'
import { Col, Container, Card, CardDeck, Row } from 'react-bootstrap'
import { FiHeart } from 'react-icons/fi'
import Templatepic1 from './images/Atlanta_pro.png'


function TemplateCard(props){
    const { Template } = props
    console.log(props)
    return(
        <>
            <Row>
              <CardDeck className=" card-adjust">
                {Template.map((value, index) => {
                    console.log(value)
                return(
                    <div className="col-4">
                    <Card className="rounded mb-3" key={index}>
                    <Card.Img className="p-3" variant="top" src={`http://localhost:5000/img/template/${value.img}`} alt=""/>
                
                    <div className="align-items:center">
                        <Card.Title className="text-center">{value.name}</Card.Title>
                        <Card.Text className="text-center">{value.plan_level}</Card.Text>
                        <Container className="d-flex p-0">
                        <button className="btn-sml gray left" >
                            <FiHeart /> 加入收藏
                        </button>
                        <button className="btn-sml purple right">立即套用</button>
                        </Container>
                    </div>
                    </Card>
                    </div>
                )
                })}

              </CardDeck>
            </Row>
        </>
    )
}               
export default TemplateCard            