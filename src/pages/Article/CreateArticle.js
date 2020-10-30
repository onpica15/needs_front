import React, { useState, useEffect } from 'react'

import axios from 'axios'
import EditorJs from 'react-editor-js'
import editorjsHTML from 'editorjs-html'
import { EDITOR_JS_TOOLS } from './constants'
import TestArticleDetial from './TestArticleDetial'

const CreateArticle = (props) => {
  const [title, setTitle] = useState('')
  const [outline, setOutline] = useState('')
  const [image, setImage] = useState('')
  const [contentDetial, setContentDetial] = useState({})
  const [showHTML, setShowHTML] = useState('')
  const instanceRef = React.useRef(null)

  let articleHTML = ''

  async function handleSave() {
    const savedData = await instanceRef.current.save()

    console.log('savedData', savedData)
    setContentDetial(savedData)
  }

  const sendContent = async () => {
    contentDetial.blocks.map((obj) => {
      switch (obj.type) {
        case 'paragraph':
          setOutline(obj.data.text)
          articleHTML += `<div className="ce-block">
      <div className="ce-block__content">
        <div className="ce-paragraph cdx-block">
          ${obj.data.text}
        </div>
      </div>
    </div>\n`
          break
        case 'image':
          setImage(obj.data.file.url)
          articleHTML += `<div className="ce-block">
      <div className="ce-block__content">
        <div className="ce-paragraph cdx-block">
          <img src="${obj.data.file.url}" alt="${obj.data.caption}" />
          <div className="text-center">
            <i>${obj.data.caption}</i>
          </div>
        </div>
      </div>
    </div>\n`
          break
        case 'header':
          setTitle(obj.data.text)
          articleHTML += `<div className="ce-block">
      <div className="ce-block__content">
        <div className="ce-paragraph cdx-block">
          <h${obj.data.level}>${obj.data.text}</h${obj.data.level}>
        </div>
      </div>
    </div>\n`
          break
        case 'raw':
          articleHTML += `<div className="ce-block">
      <div className="ce-block__content">
        <div className="ce-rawtool">
          <code>${obj.data.html}</code>
        </div>
      </div>
    </div>\n`
          break
        case 'list':
          if (obj.data.style === 'unordered') {
            const list = obj.data.items.map((item) => {
              return `<li className="cdx-list__item">${item}</li>`
            })
            articleHTML += `<div className="ce-block">
        <div className="ce-block__content">
          <div className="ce-paragraph cdx-block">
            <ul className="cdx-list--unordered">${list}</ul>
          </div>
          </div>
        </div>\n`
          } else {
            const list = obj.data.items.map((item) => {
              return `<li className="cdx-list__item">${item}</li>`
            })
            articleHTML += `<div className="ce-block">
        <div className="ce-block__content">
          <div className="ce-paragraph cdx-block">
            <ol class="cdx-list--ordered">${list}</ol>
          </div>
          </div>
        </div>\n`
          }
          break
        case 'delimeter':
          articleHTML += `<div className="ce-block">
      <div className="ce-block__content">
        <div className="ce-delimiter cdx-block"></div>
      </div>
    </div>\n`
          break
        default:
          return ''
      }
    })
    // const edjsParser = editorjsHTML()
    // const html = edjsParser.parse(contentDetial)
    setShowHTML(articleHTML)
    console.log(showHTML)

    await axios
      .post('http://localhost:5000/article', [title, image, outline, showHTML])
      .catch((error) => {
        console.log('Error', error)
      })
  }

  return (
    <>
      <EditorJs
        onChange={handleSave}
        instanceRef={(instance) => (instanceRef.current = instance)}
        tools={EDITOR_JS_TOOLS}
        data={contentDetial}
      />
      <button onClick={handleSave}>儲存</button>
      <div style={{ textAlign: 'center', margin: '2rem' }}>
        <button className="" onClick={sendContent}>
          送出
        </button>
      </div>
      <TestArticleDetial showHTML={showHTML} />
    </>
  )
}

export default CreateArticle
