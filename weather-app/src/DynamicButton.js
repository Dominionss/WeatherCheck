import React, { useState } from 'react';

function DynamicButton() {
    const darkMode = "Dark is working!";
    const lightMode = "Light is working!";

    // let dinosaurBool = true;
    const [dinosaurMode, setDinosaurMode] = useState(true);

    const handleClick = () => {
        // dinosaurBool = !dinosaurBool;
        setDinosaurMode(prevMode => !prevMode);
    };

    return (
        <div className="DynamicButton">
            <h2>Dynamic Button</h2>

            <p>{dinosaurMode ? darkMode : lightMode}</p>

            <button onClick={handleClick}>
                Change the dino.
            </button>
        </div>
    );
}

export default DynamicButton;