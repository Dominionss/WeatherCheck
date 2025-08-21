import { useRef, useEffect, useState } from "react";

function PreviousValueExample() {
    const [count, setCount] = useState(0);
    const prevCount = useRef(0);

    useEffect(() => {
        console.log("Rerender");
        prevCount.current = count; // runs after every render
        console.log(prevCount.current + " " + count);
    });

    return (
        <div>
            <p>Now: {count}, before: {prevCount.current}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default PreviousValueExample;