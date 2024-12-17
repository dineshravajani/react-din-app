import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const date = new Date();
    date.setDate(date.getDate() + count)
    return(
        <div className="steps">
            <button onClick={() => setCount( (c) => c-1)}>Previous Date</button>
            <button onClick={() => setCount( (c) => 0)}>Today's Date</button>
            <button onClick={() => setCount( (c) => c+1)}>Next Date</button>
            <p>
                <span>{ count === 0 ? "Today is " : count > 0 ? `${count} days from Today is ` : `${Math.abs(count)} days from Ago was `}</span>
                {date.toDateString()}
            </p>
        </div>
    )

}
export default Counter;