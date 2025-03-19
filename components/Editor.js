import React, { useState } from "react";

import styles from "./Editor.module.css"

const Editor = ({ editorLoaded, name, value }) => {
  const [data, setData] = useState({value: ""});

  // const editorRef = useRef();
  // const { CKEditor, ClassicEditor } = editorRef.current || {};

  // useEffect(() => {
  //   editorRef.current = {
  //     CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
  //     ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
  //   };
  // }, []);


  return (
    <>

      
      {editorLoaded ? (
        <p
          className = {styles.editor}
          name={name}
          onChange={(e) => {
            setData({...data, value: e.target.innerText})
          }}
          contentEditable = {true}
        >{data.value}</p>
      ) : (
        <div>Editor loading...</div>
      )}
    </>
  );
};

export default Editor;
