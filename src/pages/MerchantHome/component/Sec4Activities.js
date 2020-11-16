import React, { useState, useEffect } from 'react'
function Sec4Activities(props){
  const { mainActivitiesId , activities } = props
    return(
      <div className="sec4">
      { mainActivitiesId>0 && activities.filter(activity => activity.id == mainActivitiesId)
                  .map((activity, index) => {
                    return (
                      <>
            <div className="activities-wrapper d-flex align-items-end m-auto">
            <img className="activities-img" src={`http://localhost:5000/img/products/${activity.image_path.split(',')[0]}`} key={index}/>
              <div className="text d-flex flex-column justify-content-between my-auto">
                    <h2>{activity.title}</h2>
                    <h4>課程日期：</h4>
                    <p>2020/11/24(二)14:00~16:00</p>
                    <h4>課程描述</h4>
                    <p>{activity.outline}</p>
                    <button className="activity-btn rounded">立即報名</button>
                  </div>
            </div>
          </>
              )
          }
           )
      }
          </div>
    )
}
export default Sec4Activities