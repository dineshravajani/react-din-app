import { useState } from "react";

const messages = [
    "Learn React",
    "Apply for jobs",
    "Create your new income"
];
function Steps() {
    //const step = 2;
    const [step, setStep] = useState(1);

    function handlePrevious() {
        if( step >  1 ) {
            // If we don't want to update the state based on current value, then use this
            setStep(step-1)
        }
    }

    function handleNext() {
        if( step < 3 ) {
            // if we want to set the state based on current value, then use this
            setStep((previousValue) => previousValue + 1)
        } 
    }
    return(
        <div className="steps">
            <div className="numbers">
                <div className={step >= 1 ? 'active' : ''}>1</div>
                <div className={step >= 2 ? 'active' : ''}>2</div>
                <div className={step >= 3 ? 'active' : ''}>3</div>
                
            </div>
            <p className="message">
                Step {step} : {messages[step - 1]}
            </p>
            <div className="buttons">
                <button style={{backgroundColor:"#7950f2",color:"#fff"}} onClick={handlePrevious}>Previous</button>
                <button style={{backgroundColor:"#7950f2",color:"#fff"}} onClick={handleNext}>Next</button>
                
            </div>
        </div>
    )
}

export default Steps;