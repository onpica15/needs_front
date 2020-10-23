import React, { Component, useState } from 'react'
import EditorJs from 'react-editor-js'
import { EDITOR_JS_TOOLS } from './constants'

const CreateArticle = (props) => {
  const editorData = {
    time: new Date().getTime(),
    blocks: [
      {
        type: 'header',
        data: {
          text: '',
          level: 2,
        },
      },
      {
        type: 'paragraph',
        data: {
          text:
            'Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.',
        },
      },
    ],
  }
  const instanceRef = React.useRef(null)
  async function handleSave() {
    const savedData = await instanceRef.current.save()

    console.log('savedData', savedData)

    // convert way of block to html
    let html = ''
    editorData.blocks.forEach(function (block) {
      switch (block.type) {
        case 'header':
          html += `<h${block.data.level}>${block.data.text}</h${block.data.level}>`
          break
        case 'paragraph':
          html += `<p>${block.data.text}</p>`
          break
        case 'delimiter':
          html += '<hr />'
          break
        case 'image':
          html += `<img class="img-fluid" src="${block.data.file.url}" title="${block.data.caption}" /><br /><em>${block.data.caption}</em>`
          break
        case 'list':
          html += '<ul>'
          block.data.items.forEach(function (li) {
            html += `<li>${li}</li>`
          })
          html += '</ul>'
          break
        default:
          console.log('Unknown block type', block.type)
          console.log(block)
          break
      }
      // document.getElementById('content').innerHTML = html
      //console.log(block);
    })
    console.log('html: ', html)
  }

  return (
    <>
      <EditorJs
        onChange={handleSave}
        instanceRef={(instance) => (instanceRef.current = instance)}
        tools={EDITOR_JS_TOOLS}
        data={editorData}
      />
      <button onClick={handleSave}>儲存</button>
    </>
  )
}

export default CreateArticle
