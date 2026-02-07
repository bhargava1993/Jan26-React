import React, { useState } from 'react';

const Counter = React.memo(({ count }) => {  // shollow copy

    console.log("counter Component re-render");
    return <div>Counter: {count}</div>
})

const Memo = () => {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(false);

    const increment = () => {
            setCount(count+1);
    }

    const toggleOtherState = () => {

        console.log("toggleOtherState---",otherState);
        setOtherState(!otherState);
    }

    return (
        <>
            <h1> React.memo example</h1>
            <Counter count={count}/>
            <button onClick={increment}>Increment Count</button>
            <button onClick={toggleOtherState}>Toggle Other State</button>
        </>
    );
}

export default Memo;