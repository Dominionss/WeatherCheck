import React, {useEffect, useState} from 'react';


function Counter() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log(counter);
    }, [counter]);

    const minus = () => {
        setCounter(counter - 1);
    };
    const plus = () => {
        setCounter(counter + 1);
    };
    const reset = () => {
        setCounter(0);
    };

    return (
        <div className="counter">
            <h2>Counter: {counter}</h2>

            <button onClick={plus}>Plus one</button>
            <button onClick={reset}>Reset</button>
            <button onClick={minus}>Minus one</button>
        </div>
    );
}

export default Counter;