import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function TextEditor(props) {
  // const [value, setValue] = useState('');
  const {setText} = props
  return (
      <>
        <ReactQuill theme="snow"  onChange={setText}/>
    </>
  );
}

export default TextEditor