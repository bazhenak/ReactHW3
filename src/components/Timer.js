import React, {useEffect, useState} from "react";

const Timer = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const intervalId = setInterval( () => {
            setCounter(counter => counter + 1);
            if (counter >= stopTimer) {
                return clearInterval(intervalId);
            }
        }, 1000);


        return () => clearInterval(intervalId);

    }, []);


    return (
        <div>
            <p className={"counter"}>Timer: {counter}</p>
            <input type={"number"} id={"form"} className={"number"}></input>
            <button className={"btn"} onClick={() => setInterval(stopTimer)}>Click to set timer</button>

        </div>
    );
};
export default Timer;

