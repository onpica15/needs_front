import React, { useState, useEffect } from 'react'
import { Parallax } from 'rc-scroll-anim';
function Sec2MainPro(props){
    const { mainProductId , products } = props
    console.log('mainProductId',mainProductId)
    console.log('products',products)
    return(
        <>
            <div className="sec2">
              <div className="d-flex justify-content-between m-auto">
              <div>
                <Parallax
                  animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}
                  style={{ transform: 'translateX(-100px)', opacity: 0 }}
                  className="code-box-shape"
                />
                </div>

                {products.filter(product => product.id == mainProductId)
                    .map((product, index) => {
                      return (
                        <>
                            <img className="product-bg-pic" src={`http://localhost:5000/img/products/${product.image_path.split(',')[0]}`} key={index}/>
                            <div className="d-flex flex-column wrapper">
                            <h2>本週主打</h2>
                            <h4>{product.title}</h4>
                            <img className="product-sml-pic" src={`http://localhost:5000/img/products/${product.image_path.split(',')[1]}`} />
                            <p className="sml">{product.outline}</p>
                            <h2>NT$780</h2>
                            <button className="btn">加入購物車</button>
                            </div>
                        </>
                            );
                          }
                          )
                      }
              </div>
              
            </div>
        </>
    )
}
export default Sec2MainPro

