// import React, { useState, useEffect } from 'react'
// import { Container, Row, Col, Form } from 'react-bootstrap'
// import { Link, withRouter } from 'react-router-dom'
// import { Carousel } from 'react-responsive-carousel'
// import 'react-responsive-carousel/lib/styles/carousel.min.css'
// import './productPage.scss'

// import DetailNav from './DetailNav'
// import MerchantInfo from './MerchantInfo'
// import DeliveryPaymentInfo from './DeliveryPaymentInfo'
// import Review from './Review'
// import MerchantOtherProducts from './MerchantOtherProducts'
// import History from './History'

// import { RiShoppingCart2Line } from 'react-icons/ri'

// function ProductDetail(props) {
//   console.log('--- invoke function component ---')
//   const [productDetail, setProductDetail] = useState([])
//   const [merchantInfo, setMerchantInfo] = useState([])
//   const [quantity, setQuantity] = useState(1)

//   async function getProductDetail() {
//     // 連接的伺服器資料網址
//     const url = `http://localhost:5000/products/${props.match.params.id}`

//     // 注意header資料格式要設定，伺服器才知道是json格式
//     const request = new Request(url, {
//       method: 'GET',
//       headers: new Headers({
//         Accept: 'application/json',
//         'Content-Type': 'appliaction/json',
//       }),
//     })

//     const response = await fetch(request)
//     const data = await response.json()
//     console.log(data)
//     // 設定資料
//     setProductDetail(data)
//   }
//   async function getMerchantInfo() {
//     const url =
//       `http://localhost:5000/products/merchant/${productDetail.merchant_id}` +
//       `?exclude=${props.match.params.id}`

//     const request = new Request(url, {
//       method: 'GET',
//       headers: new Headers({
//         Accept: 'application/json',
//         'Content-Type': 'appliaction/json',
//       }),
//     })

//     const response = await fetch(request)
//     const data = await response.json()
//     console.log(data)
//     setMerchantInfo(data)
//   }

//   useEffect(() => {
//     getProductDetail()
//   }, [])

//   useEffect(() => {
//     if (productDetail === undefined) return
//     getMerchantInfo()
//   }, [productDetail])

//   return (
//     <div className="product-detail">
//       <DetailNav />
//       <Container className="product-main-info">
//         <Row>
//           <Col md={7}>
//             <Carousel className="w-88">
//               {productDetail.images &&
//                 productDetail.images.map((value, index) => {
//                   return (
//                     <div key={index} className="photos-content">
//                       <img
//                         className="w-100 h-100 cover"
//                         src={`http://localhost:5000/img/products/${value}`}
//                         alt=""
//                       />
//                     </div>
//                   )
//                 })}
//             </Carousel>
//           </Col>
//           <Col md={5} className="info-content pl-0">
//             <ul className="breadcrumb-wrap">
//               <li>
//                 <Link to="/" className="breadcrumb-item">
//                   所有商品
//                 </Link>
//               </li>
//               <span> {'>'} </span>
//               <li>
//                 <Link to="/" className="breadcrumb-item active">
//                   {productDetail.name}
//                 </Link>
//               </li>
//             </ul>
//             <h4 className="my-3">{productDetail.title}</h4>
//             <p className="font-s">
//               品牌：
//               <Link to="/" className="merchant-link">
//                 {merchantInfo.brand_name}
//               </Link>
//             </p>
//             <p className="description">{productDetail.outline}</p>
//             <div className="price-wrap">
//               <span className="discount">NT$780</span>
//               <span className="price">NT$980</span>
//             </div>
//             <Form>
//               <Form.Group>
//                 <Form.Control as="select">
//                   {productDetail.skus &&
//                     productDetail.skus.map((value, index) => {
//                       return <option key={index}>{value.name}</option>
//                     })}
//                 </Form.Control>
//               </Form.Group>
//               <Form.Group>
//                 <div
//                   className="btn-group border rounded w-50"
//                   role="group"
//                   aria-label="Basic example"
//                 >
//                   <button
//                     type="button"
//                     className="btn btn-sm border-right px-3"
//                     onClick={() => setQuantity(quantity - 1)}
//                   >
//                     -
//                   </button>
//                   <Form.Control
//                     type="number"
//                     value={quantity}
//                     className="quantity border-0 rounded-0"
//                     onChange={(event) => {
//                       setQuantity(event.target.value)
//                     }}
//                   />
//                   <button
//                     type="button"
//                     className="btn btn-sm border-left px-3"
//                     onClick={() => setQuantity(quantity + 1)}
//                   >
//                     +
//                   </button>
//                 </div>
//                 <span className="stock">庫存：還剩 10 件</span>
//               </Form.Group>
//               <button className="btn btn-danger mt-3 w-100" type="submit">
//                 <RiShoppingCart2Line className="cart-icon" />
//                 放入購物車
//               </button>
//             </Form>
//             <button className="btn btn-outline-danger mt-3 w-100">
//               <i className="far fa-heart mr-3"></i>收藏商品
//             </button>
//           </Col>
//         </Row>
//       </Container>
//       <MerchantInfo merchantInfo={merchantInfo} />
//       <Container>
//         <h5 className="mt-4">商品介紹</h5>
//         <hr />
//         <div className="product-detail-content d-flex justify-content-center">
//           <div
//             dangerouslySetInnerHTML={{ __html: productDetail.description }}
//           ></div>
//         </div>
//         <h5 className="mt-5">運費與其他資訊</h5>
//         <hr />
//         <DeliveryPaymentInfo />
//         <h5 className="mt-5">購買評價</h5>
//         <hr />
//         <Review />
//         <h5 className="mt-5">店家其他商品</h5>
//         <hr />
//         <MerchantOtherProducts merchantInfo={merchantInfo} />
//         <h5 className="mt-5">最近預覽</h5>
//         <hr />
//         <History />
//         <div className="mb-5"></div>
//       </Container>
//     </div>
//   )
// }

// export default ProductDetail
