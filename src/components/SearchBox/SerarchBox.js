import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useCombobox } from 'downshift'

import './SearchBox.scss'

function SerarchBox() {
  const [inputItems, setInputItems] = useState([])
  const [getAllData, setGetAllData] = useState([])
  const [singleData, setSingleData] = useState('')

  useEffect(() => {
    const AllData = async () => {
      let url = 'http://localhost:5000/productlist'
      const res = await axios
        .get(url)
        .catch((err) => console.log('Serarch Err', err))
      setGetAllData(res.data)
    }
    AllData()
  }, [])

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        getAllData.filter(
          (item) =>
            item.title.toLowerCase().startsWith(inputValue.toLowerCase()) ||
            item.title.startsWith(inputValue)
        )
      )
    },
  })

  return (
    <>
      {/* <h6>{singleData}</h6> */}
      <div {...getComboboxProps()}>
        <input
          {...getInputProps()}
          className="search"
          placeholder={singleData ? singleData : '想找點什麼'}
        />
      </div>
      <ul {...getMenuProps()} className="searchContent">
        {isOpen &&
          inputItems.map((item, index) => (
            <span
              key={item.id}
              {...getItemProps({ item, index })}
              onClick={() => setSingleData(item.title)}
            >
              <li
                style={
                  highlightedIndex === index ? { background: '#cdcdcd' } : {}
                }
              >
                {/* <Link to={`/products/${item.id}?room=${item.brand_en_name}`}> */}
                <a href={`/products/${item.id}?room=${item.brand_en_name}`}>
                  <p>{item.title}</p>
                </a>
                {/* </Link> */}
              </li>
            </span>
          ))}
      </ul>
    </>
  )
}

export default SerarchBox
