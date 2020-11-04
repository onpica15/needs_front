import React, { useState } from 'react'

import axios from 'axios'
import EditorJs from 'react-editor-js'
import { EDITOR_JS_TOOLS } from './constants'
import { Button } from 'react-bootstrap'
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
  const saveToHtml = () => {
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
          <img src="${obj.data.file.url}" alt="${obj.data.caption}" style="width:270px;height:270px" />
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
      setShowHTML(articleHTML)
      console.log(showHTML)
      return [title, image, outline, showHTML]
    })
  }

  const sendContent = async () => {
    console.log(title)
    await axios
      .post('http://localhost:5000/article', [title, image, outline, showHTML])
      .catch((error) => {
        console.log('Error', error)
      })
  }

  const sendEmail = async () => {
    const data = <div dangerouslySetInnerHTML={{ __html: showHTML }} />
    const email = '123@yac.com'
    await axios
      .post('http://localhost:5000/article/email', [title, email, data])
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
      <div className="d-flex justify-content-center">
        <Button onClick={saveToHtml}>儲存</Button>
        <Button className="" onClick={sendContent}>
          送出
        </Button>
        <Button onClick={sendEmail}>電子報</Button>
      </div>
    </>
  )
}

export default CreateArticle
