import React, {useState} from "react";

export default function Form(props) {
    const handleUpclick = ()=>{
        let newText = text.toUpperCase();
        props.showAlert("Text Converted to Uppercase","success")
     setText(newText)
    }
    const handleLoclick = ()=>{
        let newText = text.toLowerCase();
     setText(newText)
    }
    const handleClearclick = ()=>{
        let newText = "";
     setText(newText)
    }
    const handleCopy = ()=>{
      let text = document.getElementById("mybox");
       text.select();
       navigator.clipboard.writeText(text.value);

    }
    const handleExtraspaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))

    }
    const handleOnchange = (event)=>{
       setText(event.target.value);
    }
    const [text, setText] = useState("Enter text here"); 
    return (
        <div>
            <div className="container "style={{color: props.mode=='dark'?'white':'black'}}>
                <h1 className="my-2">{props.heading}</h1>
                <textarea className="form-control my-2" onChange={handleOnchange} style={{backgroundColor: props.mode=='dark'?'gray':'white',color: props.mode=='dark'?'white':'black'}} value={text} id="mybox" rows="8" ></textarea>
                <button type="button" onClick={handleUpclick} className="btn btn-primary mx-2">Convert text to uppercase </button>
                <button type="button" onClick={handleLoclick} className="btn btn-primary mx-2">convert text to lowercase </button>
                <button type="button" onClick={handleClearclick} className="btn btn-primary mx-2">Clear </button>
                <button type="button" onClick={handleCopy} className="btn btn-primary mx-2">copy </button>
                <button type="button" onClick={handleExtraspaces} className="btn btn-primary mx-2">Remove Extra Spaces </button>
            </div>
            <div className="container"style={{color: props.mode=='dark'?'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minute read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    );
}
