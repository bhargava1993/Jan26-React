import { useState } from "react"; 

const CountMange =({count, incrementFn,decrementFn,resetFn})=>{
 

    return (
        <>
            {/* <h2>Manage Count:{count}</h2> */}
            <br />
            <button type="button" onClick={incrementFn}>+</button>
            <button type="button" onClick={decrementFn}>-</button>
            <button type="button" onClick={resetFn}>reset</button>
        </>
    );
}

export default CountMange;