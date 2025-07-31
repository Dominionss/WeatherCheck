import React from 'react';


function ConditionalComponent({condition}) {
    const truth = "You said truth.";
    const lie = "You lied.";

    let message;

    if (condition) {
        return(
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid green'}}>
                <p>{truth}</p>
            </div>
        );
    }
    else {
        return(
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid red'}}>
                <p>{lie}</p>
            </div>
        );
    }
}


export default ConditionalComponent;