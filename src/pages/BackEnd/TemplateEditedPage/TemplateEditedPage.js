import React, { useState, useEffect } from 'react'
import {
  Col,
  Container,
  Button,
  Accordion,
  Card,
} from 'react-bootstrap'

import TemplateUpload from './TemplateUpload'
import './styles/TemplateEditedPage.scss'
import TextEditor from './TextEditor'
import Selector from './selector'

// 選擇的模板
import Narrative from '../Templates/Narrative'

import { GrMoreVertical } from "react-icons/gr";
import { BsFillEyeFill,BsFillEyeSlashFill } from "react-icons/bs";

import axios from 'axios'
import { TwitterPicker } from 'react-color';


function TemplateEditedPage(props) {
const [show,setShow]= useState(true)
const toggleShow = (e) => setShow(!show);


// fileuplaod
const [bgImg, setBgImg] = useState('')
const [color,setColor] = useState('#323232')
const [thisMerchantProduct,setThisMerchantProduct] = useState([])
const [ products,setProducts ] = useState([])
const [ activities,setActivities ] = useState([])

const [error,setError] = useState(null)
//以下包成form寫入
//圖片
const sendImgToNode = async () => {
  await axios
    .put('http://localhost:5000/template/editpage?merchantid=12', [bgImg])
    .catch((error) => {
      console.log('Error', error)
    })
}
//顏色//商品//商品列表//活動//圖片故事

//一開始就要get:商家info、哪些商品、活動
//put後馬上get:
//server-data
async function getMerchantProduct(){

  // setDataLoading(true)
  // console.log('type',type)
  const url =`http://localhost:5000/Template/merchant_product?merchant_id=12`
  const request = new Request(url, {
      method:'GET',
      headers:new Headers({
          Accept:'application/json',
          'Content-Type':'application/json'
      }),
  })
  try{
    const response = await fetch(request)//response:fetch網址的資料
    const thisproduct = await response.json()
    
    setThisMerchantProduct(thisproduct)
    setProducts(thisproduct.products)
    setActivities(thisproduct.activities)
    console.log('thisproduct',thisproduct)
    console.log('products',thisproduct.products)
    console.log('activities',thisproduct.activities)
    // console.log('activities',thisproduct[0].activities)
    // setTimeout(()=>setDataLoading(false),500)

  }catch(error){
    setError("oops! error")
    // setTimeout(()=>setDataLoading(false),500)
  }
}

useEffect(() => {
  getMerchantProduct()
}, [])

  return(
    <>
    <div className="template-editPage">
    <Col className="offset-2" xs={10}>
    <div className="container-fluid mt-2">

    {/* edit-bar */}
    <Col className="xs={10} p-0">
    <div className="d-flex justify-content-start align-items-center">
    <Button className="mt-2 mr-2 btn-light">
    預覽</Button>
    <Button className="mt-2 btn-light">
    儲存</Button>
    </div>
    <hr />
    <div className="d-flex">
    <div className="space">
    <div className="edit-bar">
    
    {/* accrodion 1 */}
        <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header className ="rounded">
            <div className="d-flex justify-content-end align-items-center">
              商家資訊
              <Button variant="light" onClick={(e)=>toggleShow(e)}>
              {show?<BsFillEyeFill/>:<BsFillEyeSlashFill/>}
              </Button>
              <Accordion.Toggle as={Button} variant="light" eventKey="0">
                  <GrMoreVertical />
                </Accordion.Toggle>    
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
            <div className="d-flex flex-column ">
              <h6>上傳背景圖片</h6>
              <TemplateUpload setBgImg={setBgImg} />
              <div className="mt-3">
              <h6>選擇背景顏色</h6>
                  <TwitterPicker 
                    color= {color}
                    onChangeComplete={(color) => setColor(color.hex)}
                  />
              </div>
            </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        </Accordion>

      {/* accrodion 2 */}
        <Accordion defaultActiveKey="1">
        <Card>
          <Card.Header className ="rounded">
          <div className="d-flex justify-content-end align-items-center">
            主打商品
            <Button variant="light" onClick={toggleShow}> 
              {show?<BsFillEyeFill/>:<BsFillEyeSlashFill/>}
              </Button>
              <Accordion.Toggle as={Button} variant="light" eventKey="1">
                  <GrMoreVertical />
                </Accordion.Toggle>    
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <h6>選擇主打商品</h6>
                <div>
                        <select className="browser-default custom-select">
                        <option> --請選擇-- </option>
                        {products[0] && products[0].map((products, index) => {
                      console.log('products', products.title)
                  return(
                        <option value="1" key={index}> {products.title} 
                        </option>
                  )
                  })}
                        </select>
                </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        </Accordion>

       {/* accrodion 3 */}

       <Accordion defaultActiveKey="2">
        <Card>
          <Card.Header className ="rounded">
          <div className="d-flex justify-content-end align-items-center">
            產品列表
            <Button variant="light" onClick={toggleShow}> 
              {show?<BsFillEyeFill/>:<BsFillEyeSlashFill/>}
              </Button>
              <Accordion.Toggle as={Button} variant="light" eventKey="2">
                  <GrMoreVertical />
                </Accordion.Toggle>    
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
                <h6>選擇主打活動</h6>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        </Accordion>

      {/* accrodion4 */}
        <Accordion defaultActiveKey="3">
        <Card>
          <Card.Header className ="rounded">
          <div className="d-flex justify-content-end align-items-center">
            商家活動
            <Button variant="light" onClick={toggleShow}> 
              {show?<BsFillEyeFill/>:<BsFillEyeSlashFill/>}
              </Button>
              <Accordion.Toggle as={Button} variant="light" eventKey="3">
                  <GrMoreVertical />
                </Accordion.Toggle>    
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
                <h6>選擇主打活動</h6>
                <div>
                        <select className="browser-default custom-select">
                        <option> --請選擇-- </option>
                        {activities[1] && activities[1].map((activities, index) => {
                  return(
                        <option value="1" key={index}> {activities.title} 
                        </option>
                  )
                  })}
                        </select>
                </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        </Accordion>

      {/* accrodion5 */}
        <Accordion defaultActiveKey="4">
        <Card>
          <Card.Header className ="rounded">
          <div className="d-flex justify-content-end align-items-center">
            商家故事
            <Button variant="light" onClick={toggleShow}> 
              {show?<BsFillEyeFill/>:<BsFillEyeSlashFill/>}
              </Button>
              <Accordion.Toggle as={Button} variant="light" eventKey="4">
                  <GrMoreVertical />
                </Accordion.Toggle>    
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <div className="d-flex flex-column ">
              <h6>上傳故事圖片</h6>
              <TemplateUpload />
              <div className="mt-3">
              <h6>輸入品牌故事</h6>
              <TextEditor />
              </div>
            </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        </Accordion>
        </div>
    </div>

        {/* change section*/}

        <div className="change-section rounded">
            <Narrative color={color} bgImg={bgImg}/>
        </div>
    </div>
    </Col>

    </div>
    </Col>
    </div>
    
      
    </>
  )
}

export default TemplateEditedPage