import React, { useState } from "react";
function Autotype(){
    const [text, setText] = useState('');

    function inputHandler(e) {
        setText(e.target.value);
    }
    return(
        <div className="digital-clock-container">
            <label>Enter your text</label>
            <input type="text" onChange={inputHandler}/>
            <p>{text}</p>
        </div>
    )
}
export default Autotype;
