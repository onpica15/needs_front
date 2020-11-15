import React from 'react'

const NavProdCat = () => {
  const [categories, setCategories] = useState([])

  const getCategories = () => {
    Axios.get(`http://122.116.38.12:5050/get-categories-api`).then((res) => {
      const data = res.data
      setCategories(data)
    })
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <>
      <div className="nav-prod">
        {categories.map((item, index) => {
          const arr = item.category.split(',')
          return (
            <>
              <ul key={item.id}>
                <div className="parentCat">{item.parentCategory}</div>

                {arr.map((itm, idx) => {
                  return (
                    itm && (
                      <>
                        <li className="childCat">{itm.split(':')[1]}</li>
                      </>
                    )
                  )
                })}
              </ul>
            </>
          )
        })}
      </div>
    </>
  )
}

export default NavProdCat
