import React from 'react'

const ArticleRecomment = (props) => {
  const data = [
    {
      img: '',
      title: '手帳展！超過一千種商品75折起',
    },
    {
      img: '',
      title: '日本文具控轟動話題的灰色筆記本的魅力大公開',
    },
    {
      img: '',
      title: 'HESOBUN筆記本系列周邊',
    },
    {
      img: '',
      title: '辦公室收納好物 都收進 WORKERS’BOX 吧',
    },
  ]
  return (
    <>
      <div className="d-flex">
        {data.map((value, id) => (
          <div>
            <div key={value.id}>
              <img src={value.img} alt=""></img>
            </div>
            <div>{value.title}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ArticleRecomment
