import React, {useEffect, useState, useRef} from "react";
// import ReactDOM from "react-dom/client";
// import { useInterval } from 'usehooks-ts'

function Timer() {

    const [count, setCount] = useState(1);
    const [delay, setDelay] = useState(1000);


    useInterval(() => {
        setCount(count => count + 1);
    }, delay);
    function handleDelayChange(e) {
        // console.log(e)
        setDelay(Number(e.target.value));
    }

    return (
        <div>
            <p className={"timer"}>Timer: {count}</p>
            <h3>Set time of delay here:</h3>
            <input value={delay} type={"number"} id={"form"} className={"number"}
                   onChange={handleDelayChange}></input>
        </div>
    );
}

function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function func() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(func, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

export default Timer;

