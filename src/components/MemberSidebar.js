import React from 'react'
import {
  BsPersonFill,
  BsFillBellFill,
  BsQuestionSquareFill,
} from 'react-icons/bs'
import { FaShoppingBag, FaStore, FaCoins } from 'react-icons/fa'
import { RiMessage2Fill } from 'react-icons/ri'
import { MdAddAPhoto } from 'react-icons/md'
const MemberSidebar = () => {
  return( 
  <>   
      <div className="container">
        <div className="col-md-2 d-flex flex-column sidebar">
        <div className="sticker"></div>

        <h6><a href="#">
          <div className="d-flex wrapper">
          <div className="icons">
            <MdAddAPhoto/>
           </div> 
            更換大頭貼
          </div>
          </a></h6>
          
          <h4><a href="#">
          <div className="d-flex wrapper">
          <div className="icons">
            <BsPersonFill />
          </div>
            我的帳號
          </div>
          </a></h4>

          <h4><a href="#">
          <div className="d-flex wrapper">
          <div className="icons">
            <FaShoppingBag />
          </div>
            購買清單
          </div>
          </a></h4>

          <h4><a href="#">
          <div className="d-flex wrapper">
          <div className="icons">
            <FaStore />
          </div>
            我的關注
          </div>
          </a></h4>

          <h4><a href="#">
          <div className="d-flex wrapper">
          <div className="icons">
            <BsFillBellFill />
          </div>
            通知中心
          </div>
          </a></h4>


          <h4><a href="#">
          <div className="d-flex wrapper">
          <div className="icons">
            <FaCoins />
          </div>
            Ｅcoin
          </div>
          </a></h4>


          <h4><a href="#">
          <div className="d-flex wrapper">
          <div className="icons">
            <RiMessage2Fill />
          </div>
            我的評論
          </div>
          </a></h4>


          <h4><a href="#">
          <div className="d-flex wrapper">
          <div className="icons">
            <BsQuestionSquareFill />
            </div>
            常見問題
          </div>
          </a></h4>


        </div>
      </div>
      </>
    )
}

export default MemberSidebar
