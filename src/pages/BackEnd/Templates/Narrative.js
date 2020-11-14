import React, { useState, useEffect } from 'react'
import {
    Col,
    Container,
    Row
  } from 'react-bootstrap'
import './styles/Narrative.scss'


//component
import Sec1BrandInfo from './NarrativeComponent/Sec1BrandInfo'
import Sec2MainProduct from './NarrativeComponent/Sec2MainProduct'
// import Sec1BrandInfo from './NarrativeComponent/Sec1BrandInfo'

function Narrative(props){

const { color,
       bgImg ,
       storyImg,
       products,
       activities,
       selectedProduct,
       selectedActivities,
       thisMerchantBrandInfo,
      } = props

const [ displayBgImg , setDisplayBgImg ] = useState(props.bgImg)
const [ displayStoryImg , setDisplaStoryImg ] = useState(props.storyImg)
const [ displayMainImg , setDisplaMainImg ] = useState(props.selectedProduct)
const [ displayActImg , setDisplaActImg ] = useState(props.selectedActivities)
console.log('selectedProduct',selectedProduct)
const [displayProductId,setDisplayProductId] = useState(props.selectedProduct)
// let noUpload = './images/default-background.png'

// const handledisplay = () => {
//   // let upload = {
//   //   backgroundImage: `url(${props.bgImg})`
//   // }
//   // let noUpload = {
//   //   backgroundImage: `url('http://localhost:5000/BackgroundImg/4ba827cb-a7ea-45f4-8849-28f919659d04.jpeg')`
//   // }

//   // let upload = ${props.bgImg}
//   // let noUpload = 'http://localhost:5000/BackgroundImg/4ba827cb-a7ea-45f4-8849-28f919659d04.jpeg'
//   // const displayStyle ={}
//   // (props.bgImg) ? props.bgImg : noUpload

//   if(props.bgImg) return displayBgImg
//   else return noUpload
// }


useEffect(() => {
  // handledisplay()
  // setDisplayBgImg( bgImg? upload : noUpload)
  setDisplayBgImg(props.bgImg)
  setDisplaStoryImg(props.storyImg)
  // setDisplaMainImg(props.selectedProduct)
  // findProduct()

},[props.bgImg , props.storyImg , props.selectedProduct])


useEffect(() => {
  setDisplayBgImg('/static/media/default-background.35858da7.png')
  setDisplaStoryImg('/static/media/default-img.54333d00.png')
  setDisplaMainImg('/static/media/default-img.54333d00.png')
  setDisplaActImg('/static/media/default-img.54333d00.png')
},[])


// console.log(props)
//   let upload = {
//     backgroundImage: `url('http://localhost:5000/BackgroundImg/${props.bgImg}')`
//   }
//   let noUpload = {
//     backgroundImage: `url('http://localhost:5000/BackgroundImg/4ba827cb-a7ea-45f4-8849-28f919659d04.jpeg')`
//   }
  // var ifBgImg = displayBgImg ? {upload} : {noUpload}
  
return(
        <>
          <div className="Narrative">
        
            <Sec1BrandInfo 
              displayBgImg={displayBgImg}
              color={color}
            />
            
            {/* {              
              books && books
                .filter(book => book.shelf === shelf)
                .map((book, index)
                 => {
                  return (
                    <Book
                      key={book && book.id ? book.id : index}
                      changeShelf={this.props.changeShelf}
                      book={book} />
                  );
                })
            } */}

            {/* .filter(product => product.id === selectedProduct) */}
            {/* background-image: url(http://localhost:5000/BackgroundImg/992d392d-8b38-4f33-ba52-08060edfea74.jpeg);} */}
            <div className="sec2">
              <div className="d-flex justify-content-between m-auto">
                    {products && products.filter(product => product.id == selectedProduct)
                    .map((product, index) => {
                      return (
                              <>
                                <div className="product-bg-pic" style={{ backgroundImage : `url(${displayMainImg})`}}></div>
                                <div className="d-flex flex-column wrapper">
                                <h2>本週主打</h2>
                                <h4>selectedProduct?{product.title}:請選擇商品</h4>
                                <div className="product-sml-pic" style={{ backgroundImage : `url(${displayMainImg})`}} ></div>
                                <p className="sml">{product.outline}</p>
                                <h2>NT$780</h2>
                                <button className="btn">加入購物車</button>
                                </div>
                              </>
                            );
                          })
                      }

                    {/* <Sec2MainProduct displayMainImg={displayMainImg}/> */}
              
              </div>
              
            </div>
{/* 
            <div className="sec3">
              商品列表
            </div> */}

            <div className="sec4">
              <div className="activities-wrapper d-flex align-items-end m-auto">
              <div className="activities-img" style={{ backgroundImage : `url(${setDisplaActImg})`}}></div>
                <div className="text d-flex flex-column justify-content-between my-auto">
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
                  
            </div>

            <div className="sec5 py-5">

            <div className="m-auto">
              <div className=" underline-wrapper">
              <div className="underline ml-5">
              <h2>品牌故事</h2>
              </div>
              </div>

              <div className="d-flex adjust">
              <div className="brandStory_img" style={{ backgroundImage : `url(${displayStoryImg})`}}></div>
              <div className=" col-6 text-wrapper ml-5">
              <h4>
                愛治文具房-充滿文具的房間 愛治是我奶奶的名字。

                小時候因為父母忙碌也有段時間沒有住在一起，因此奶奶教了我許多生活的道理，處事的方法。溫暖待人是最重要的。今年我的奶奶九十歲了還是很健康的陪在我們家人的身邊：） 希望這家生活文具店能夠像奶奶一樣一直一直在彰化陪著大家走下去。
              </h4>
              </div>

              </div>
              </div>

            </div>
          </div>
        </>
 )
}
export default Narrative