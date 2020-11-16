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


// import React, { useState, useEffect } from 'react';
// import { Input } from 'antd';

// function TextEditor(props) {
//   const {setText} = props
//   const { TextArea } = Input;
//   const onChange = e => {
//     console.log(e);
//     setText(onChange)
//   };
//   console.log('onchangeText',onChange)
 
//   return (
//     <>
//     <TextArea placeholder="請輸入品牌故事" allowClear onChange={onChange} />
//     </>
//   );
// }

// export default TextEditor

