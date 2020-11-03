import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function ArticleClassic(props) {
  const classicData = [
    {
      title: '精選5款人氣筆記本套推薦',
      img_path: 'http://localhost:5000/articleImg/Classic/1579146747170.jpg',
      outline:
        '市面上可看到眾多文具廠商或皮革製品的品牌，都有推出各種造型和質...',
    },
    {
      title: '10款人氣鉛筆盒／筆袋推薦',
      img_path: 'http://localhost:5000/articleImg/Classic/1599187011005.jpg',
      outline:
        '說到鉛筆盒及筆袋，第一個想到的是否是學生時期的回憶呢？其實鉛筆...',
    },
    {
      title: '精選10款人氣手帳用原子筆推薦',
      img_path:
        'http://localhost:5000/articleImg/Classic/437e271566e84b40123364e68097039e.jpg',
      outline:
        '明明每天都在寫日記，卻沒有合適的手帳用原子筆嗎？原子筆的重點在...',
    },
    {
      title: '精選10款人氣便利貼推薦',
      img_path:
        'http://localhost:5000/articleImg/Classic/6aebf48c0f3f45ccd9b5eed22af62804.jpg',
      outline:
        '「便利貼」的用途廣泛，可貼在行事曆或電腦上當作備忘錄，也能作為...',
    },
  ]

  return (
    <>
      <div className=" articleItems d-flex flex-wrap">
        {classicData.map((value, index) => (
          <Link
            to="/articledetial"
            key={index}
            className="articleItem col-lg-3 col-md-6 col-sm-12 text-decoration-none"
            style={{ color: '#323232' }}
          >
            <div className="articlePic">
              <img src={value.img_path} alt=""></img>
            </div>
            <div className="textArea">
              <h5 className="title">{value.title}</h5>
              <div className="ctx">{value.outline}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default ArticleClassic
