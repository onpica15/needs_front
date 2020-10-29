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
  async function handleSave() {
    const savedData = await instanceRef.current.save()

    console.log('savedData', savedData)
    setContentDetial(savedData)
  }

  let articleHTML = ''

  const sendContent = async () => {
    contentDetial.blocks.map((obj) => {
      switch (obj.type) {
        case 'paragraph':
          setOutline(obj.data.text)
          articleHTML += `<div class="ce-block">
        <div class="ce-block__content">
          <div class="ce-paragraph cdx-block">
            ${obj.data.text}
          </div>
        </div>
      </div>\n`
          break
        case 'image':
          setImage(obj.data.url)
          articleHTML += `<div class="ce-block">
        <div class="ce-block__content">
          <div class="ce-paragraph cdx-block">
            <img src="${obj.data.url}" alt="${obj.data.caption}" />
            <div class="text-center">
              <i>${obj.data.caption}</i>
            </div>
          </div>
        </div>
      </div>\n`
          break
        case 'header':
          setTitle(obj.data.text)
          articleHTML += `<div class="ce-block">
        <div class="ce-block__content">
          <div class="ce-paragraph cdx-block">
            <h${obj.data.level}>${obj.data.text}</h${obj.data.level}>
          </div>
        </div>
      </div>\n`
          break
        case 'raw':
          articleHTML += `<div class="ce-block">
        <div class="ce-block__content">
          <div class="ce-rawtool">
            <code>${obj.data.html}</code>
          </div>
        </div>
      </div>\n`
          break
        case 'list':
          if (obj.data.style === 'unordered') {
            const list = obj.data.items.map((item) => {
              return `<li class="cdx-list__item">${item}</li>`
            })
            articleHTML += `<div class="ce-block">
          <div class="ce-block__content">
            <div class="ce-paragraph cdx-block">
              <ul class="cdx-list--unordered">${list}</ul>
            </div>
            </div>
          </div>\n`
          } else {
            const list = obj.data.items.map((item) => {
              return `<li class="cdx-list__item">${item}</li>`
            })
            articleHTML += `<div class="ce-block">
          <div class="ce-block__content">
            <div class="ce-paragraph cdx-block">
              <ol class="cdx-list--ordered">${list}</ol>
            </div>
            </div>
          </div>\n`
          }
          break
        case 'delimeter':
          articleHTML += `<div class="ce-block">
        <div class="ce-block__content">
          <div class="ce-delimiter cdx-block"></div>
        </div>
      </div>\n`
          break
        default:
          return ''
      }
    })
    const edjsParser = editorjsHTML()
    const html = edjsParser.parse(contentDetial)
    setShowHTML(html)
    console.log(showHTML)

    await axios
      .post('http://localhost:5000/article', [title, image, outline, html])
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
