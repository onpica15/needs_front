import React from 'react'
import {
  RiArrowRightLine,
  RiUserFollowLine,
  RiDraftLine,
  RiMoneyDollarCircleLine,
  RiPaletteLine,
  RiStoreLine,
} from 'react-icons/ri'

const CreateStoreStep = () => {
  const stepList = [
    { icon: RiUserFollowLine, text: '註冊商家身分' },
    { icon: RiDraftLine, text: '填寫合約資料' },
    { icon: RiMoneyDollarCircleLine, text: '繳納費用' },
    { icon: RiPaletteLine, text: '設計品牌館' },
    { icon: RiStoreLine, text: '品牌館開張' },
  ]
  return (
    <>
      <div className="stepContent d-flex justify-content-center flex-wrap">
        {stepList.map((item, index) => {
          return (
            <div className="stepCard">
              <div className="stepContent">
                <div className="stepImg">
                  <div className="circle">
                    <h4>STEP {index + 1}</h4>
                    {item.icon({ size: '65px' })}
                  </div>
                  <div className="stepTitle ">
                    <h4>{item.text}</h4>
                  </div>
                </div>
              </div>
              {index + 1 < stepList.length && (
                <div className="arrowRight">
                  <RiArrowRightLine size="40px" color="#243a6e" />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default CreateStoreStep
