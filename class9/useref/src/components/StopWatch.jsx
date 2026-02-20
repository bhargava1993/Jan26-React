import { useEffect, useRef, useState } from "react";


function StopWatch() {
    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setSeconds((preSeconds) => preSeconds + 1);
        }, 1000);

        return ()=>{
            clearInterval(intervalRef.current)
        };
        // setSeconds(seconds+1);
    }, []);

    return (
        <>
            <p>Seconds:{seconds}</p>
            <button style={{ "backgroundColor": "red" }}
                onClick={() => {
                    clearInterval(intervalRef.current)
                    //  setSeconds(seconds+1);
                }}>
                Stop Timer</button>
        </>
    );
}

export default StopWatch;