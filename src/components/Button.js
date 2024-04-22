import React, { useState } from "react";

const initialState = () => {
    return 0;
}
const StateComponent = () => {

    const [counter, setCounter] = useState(initialState);
    const [isOpened, setIsOpened] = useState(false);

    const handlerSetCounter = () => {
        setCounter(counter + 1);
    };

    const handlerSetCounterMinus = () => {
        setCounter(counter - 1);
    }


    return (
        <div>
            <button className={"btn"} onClick={() => handlerSetCounter()}>Click to add</button>
            <button className={"btn"} onClick={() => handlerSetCounterMinus()}>Click to subtract</button>
            <p className={"counter"}>Counter: {counter}</p>
        </div>
    )
};
export default StateComponent;

