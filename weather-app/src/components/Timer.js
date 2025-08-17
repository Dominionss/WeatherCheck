import { useRef, useState } from "react";

function Timer() {
    const [count, setCount] = useState(0);
    const renderCount = useRef(0);

    renderCount.current += 1; // updates but doesn’t trigger re-render

    return (
        <div>
            <p>Count: {count}</p>
            <p>Rendered: {renderCount.current} times</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}

export default Timer;
