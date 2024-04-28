import React, {useEffect, useState} from "react";


const initialState = () => {
    return 0;
}


const StateComponent = () => {

    const [counter, setCounter] = useState(initialState);

    const handlerSetCounter = () => {
        setCounter(counter + 1);
    };

    const handlerSetCounterMinus = () => {
        setCounter(counter - 1);
    }

    let up = useKeyPress('q')
    // let down = useKeyPress('w')
    //
    if (up)  handlerSetCounter()
    // if (down) handlerSetCounterMinus()

    return (
        <div>
            <button className={"btn"} onClick={handlerSetCounter}>Click to add</button>
            <button className={"btn"} onClick={handlerSetCounterMinus}>Click to subtract</button>
            <p className={"counter"}>Counter: {counter}</p>
        </div>
    )
};

const useKeyPress = (keyTarget) => {
    const [isPressed, setIsPressed] = useState(false);

    const downHandler = ({key}) => {
        if (key === keyTarget) setIsPressed(true)
    }

    useEffect(() => {

        window.addEventListener('keydown', downHandler)

        return () => {
            window.removeEventListener('keydown', downHandler)
        }
    }, [])

    return isPressed

}
export default StateComponent;
