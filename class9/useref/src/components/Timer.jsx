import { useRef, useState } from "react";


function Timer() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timeRef = useRef(null);

    const startTimer = () => {

        if (!isRunning) {
            setIsRunning(true);
            timeRef.current = setInterval(() => {
                setTime((preTime) => preTime + 1);
            }, 1000);
        }

    }

    const stopTimer = () => {
        if(isRunning){
             clearInterval(timeRef.current);
             setIsRunning(false);
        }
       
    }

    const resetTimer = () => {
        clearInterval(timeRef.current);
        setIsRunning(false);
        setTime(0);
    }

    // 00:00:00
    // 01
    // 02
    // 03


    const formatTime = (time) => {

        const getSeconds = `0${time % 60}`.slice(-2);

        const minutes = Math.floor(time / 60);
        const getMinutes = `0${minutes % 60}`.slice(-2);

        // 60*60
        const getHours = `0${Math.floor(time / 60)}`.slice(-2);

        return `${getHours}: ${getMinutes}: ${getSeconds}`;
    }

    return (
        <>
            <p> {formatTime(time)}</p>

            <button onClick={startTimer} style={{ "backgroundColor": "blue" }}>Start</button>
            <button onClick={stopTimer} style={{ "backgroundColor": "red" }}>Stop</button>
            <button onClick={resetTimer} style={{ "backgroundColor": "yellow" }}>Reset</button>
        </>
    );
}

export default Timer;