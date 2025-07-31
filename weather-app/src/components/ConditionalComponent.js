import React from 'react';


function ConditionalComponent({condition}) {
    const truth = "You said truth.";
    const lie = "You lied.";

    let message;

    if (condition) {
        message = truth;
    }
    else {
        message = lie;
    }

    return(
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid black'}}>
            <p>{message}</p>
        </div>
    );
}


export default ConditionalComponent;