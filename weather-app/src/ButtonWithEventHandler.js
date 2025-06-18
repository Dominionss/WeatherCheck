import React from 'react';

function ButtonWithEventHandler() {
    const handleClick = (event) => {
        // 'event' here is a SyntheticEvent object
        console.log("Event Type:", event.type); // e.g., 'click'
        console.log("Target Element:", event.target); // The actual DOM element that triggered the event
        console.log("Current Target (where handler is attached):", event.currentTarget); // The element to which the event listener was attached

        // Prevent default browser behavior (e.g., form submission, link navigation)
        event.preventDefault();

        // Stop event propagation up the DOM tree
        event.stopPropagation();

        // Access native event if needed (less common)
        console.log("Native Event:", event.nativeEvent);
    };

    const handleInputChange = (event) => {
        // For input events, event.target.value is commonly used
        console.log("Input Value:", event.target.value);
    };

    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
            <input type="text" onChange={handleInputChange} placeholder="Type something..." />
            <a href="https://example.com" onClick={(e) => e.preventDefault()}>Prevent Default Link</a>
        </div>
    );
}

export default ButtonWithEventHandler;