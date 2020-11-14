import React, { useState, useEffect } from 'react'
function Sec2MainProduct(props){
    const { displayMainImg } = props
    return(
        <>
          <div className="product-bg-pic" style={{ backgroundImage : `url(${displayMainImg})`}}></div>
                    <div className="d-flex flex-column wrapper">
                    <h2>本週主打</h2>
                    <h4>筆記本</h4>
                    <div className="product-sml-pic" style={{ backgroundImage : `url(${displayMainImg})`}} ></div>
                    <p className="sml">台灣製造安心有保障，精選68磅優良米色巴川紙，紙質不易透，可適用於鋼筆書寫攤平書寫更便利，典雅燙金點綴，是手帳愛好者不可錯過的內頁之一。</p>
                    <h2>NT$780</h2>
                    <button className="btn">加入購物車</button>
                    </div>          
        </>
    )
}
export default Sec2MainProduct