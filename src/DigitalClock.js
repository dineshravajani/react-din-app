import React, { useEffect, useState } from "react";

function DigitalClock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [isRunning, setRunning] = useState(true);

    function update() {
        setTime(new Date().toLocaleTimeString());
    }
    function stopHandler() {
        setRunning( prevState => !prevState);
    }
    // we used setInterval directly inside the component, which starts the interval every time the component renders. 
    // But there are issue like Memory leaks and multiple Intervals
    // To solve this problem, we will use UseEffect() to prevent issue
    /*setInterval( () => {
        update()
    },1000)*/
    useEffect( () => {
        if (isRunning) {

            const interval = setInterval( () => {
                setTime(new Date().toLocaleTimeString());
            },1000);
            return () => clearInterval(interval); // Cleanup on unmount
        }
    },[isRunning])
    return(
        <div className="digital-clock-container">
            <h1>Digital Clock</h1>
            <p>{time}</p>
            <button onClick={stopHandler}>{isRunning ? 'Stop' : 'Start'}</button>
        </div>
    );
}
export default DigitalClock;