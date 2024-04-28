import React, {useEffect, useState} from "react";

const Timer = () => {

    const [counter, setCounter] = useState(0);
    const [delay, setDelay] = useState(1000);

    useEffect(() => {
        const intervalId = setInterval( () => {
            setCounter(counter => counter + 1);
        }, delay);
        function handleDelayChange(e) {
            setDelay(Number(e.target.value));
        }


    //     return () => clearInterval(intervalId);
    //
     }, []);


    return (
        <div>
            <p className={"counter"}>Timer: {counter}</p>
            <input value={delay} type={"number"} id={"form"} className={"number"} onChange={handleDelayChange}></input>

        </div>
    );
};
export default Timer;

