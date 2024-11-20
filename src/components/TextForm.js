import React,  {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!", "success");
    }
    
    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase!", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Your text is Cleared succesfully!", "success");

    }

    const handleinverseclick = () => {
        console.log("inverse click is triggered");
        let newtext = "";
        for (let i = text.length - 1; i >= 0; i--) {
          newtext += text[i];
        }
        setText(newtext);
        props.showAlert("Your text is Reversed", "success");
    }
     
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Your text is speaking!", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className="container" style = {{color : props.mode==='dark'?'white' : '#042743'}}>
        <h1 class = "text-center h2">{props.heading}</h1>
        <div className="mt-3">
        <textarea className="form-control" value = {text} style = {{backgroundColor : props.mode==='dark'?'#13466E' : 'white', color : props.mode==='dark'?'white' : '#042743'}} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled= {text.length===0} className="btn btn-primary mt-3 mx-3 my-1" onClick = {handleUpClick} >Convert it to UpperCase</button>
        <button disabled= {text.length===0} className="btn btn-primary mt-3 mx-3 my-1" onClick = {handleDownClick} >Convert it to LowerCase</button>
        <button disabled= {text.length===0} className="btn btn-primary mt-3 mx-3 my-1" onClick = {handleinverseclick} >Reverse Text</button>
        <button disabled= {text.length===0} className="btn btn-primary mt-3 mx-3 my-1" onClick = {handleClearClick} >Clear Text</button>
        <button disabled= {text.length===0} className="btn btn-primary mt-3 mx-3 my-1" onClick = {handleExtraSpaces} >Remove Extra Spaces</button>
        <button disabled= {text.length===0} className="btn btn-primary mt-3 mx-3 my-1" onClick = {handleCopy} >Copy Text</button>
        <button disabled= {text.length===0}  type="submit" onClick={speak} className="btn btn-warning d-grid gap-2 col-6 mx-auto mt-3">Speak</button>
    </div>
    <div className="container my-2" style = {{color : props.mode==='dark'?'white' : '#042743'}}>
        <h2>Your text summary -</h2>
        <p>Your text has {text.length} characters and {text.split(" ").filter((element)=> {return element !== 0}).length} words.</p>
        <p>{0.08 * text.split(" ").length} minutes read.</p>
        {/* <h2>Preview -</h2>
        <p>{text.length > 0?text : "Enter something in the textbox above to preview it here"}</p> */}

    </div>
    </>
  )
}
