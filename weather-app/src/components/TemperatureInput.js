import React from 'react';

function TemperatureInput({ scale, temperature, onTemperatureChange }) {
    const handleChange = (e) => {
        onTemperatureChange(e.target.value); // Call the function passed from parent
    };

    return (
        <fieldset>
            <legend>Enter temperature in {scale === 'c' ? 'Celsius' : 'Fahrenheit'}:</legend>
            <input value={temperature} onChange={handleChange} />
        </fieldset>
    );
}

export default TemperatureInput;