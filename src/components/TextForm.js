import React from "react";
import { useState } from "react";
function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const HandleChange = (event) => {
    setText(event.target.value)                                          
    console.log(setText);
  };
  const handleUpClick = () => {
    console.log("Upper case was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success");
  };
  const handleLoClick=() => {
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("converted to Lowercase","success");
  };
  const handleClear=() => {
    let newText=(" ");
    setText(newText);
  };
 const handleRepeat=()=>{
  let newText= text.repeat(2);
  setText(newText)
  }
    return (
    <>
    <div className="container"style={{color:props.mode==="dark"?"white":"#042743"}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows="8"
          onChange={HandleChange}
          style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"#042743"}}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Upper Case
      </button>
      <button className="btn btn-primary mx-3" onClick={handleLoClick}>
        Convert to Lower Case
      </button>
      <button className="btn btn-primary mx-3" onClick={handleClear}>
        Clear
      </button>
      <button className="btn btn-primary mx-3" onClick={handleRepeat}>
        Repeat
      </button>
    </div>
    <div className="container my-3"  style={{color:props.mode==="light"?"grey":"white"}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length}words and {text.length}chracters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter something to preview"}</p>
    </div>
    </>
  );
  }
export default TextForm;