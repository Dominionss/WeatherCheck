import React, { useState } from 'react';

import Card, { RandomCard } from './components/Card';
import InteractiveButton from "./components/InteractiveButton";
import {TextInputWithFocusButton} from "./components/InteractiveButton";
import DynamicButton from "./components/DynamicButton";
import ButtonWithEventHandler from "./components/ButtonWithEventHandler";
import InputComponent from "./components/InputComponent";
import Counter from "./components/Counter";
import PropDrilling from "./components/PropDrilling";

import TemperatureInput from './components/TemperatureInput';
import { toCelsius, toFahrenheit, tryConvert } from './utils/converters';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Test() {

    return(
        <div>
            Test
        </div>
    );
}

function App() {

    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('c');

    const handleCelsiusChange = (temp) => {
        setTemperature(temp);
        setScale('c');
    };

    const handleFahrenheitChange = (temp) => {
        setTemperature(temp);
        setScale('f');
    };

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div className="App">
            Hello World!

            <h2>Cards:</h2>

            <Card title="Archer" info="He shoots fro the bow."/>
            <Card title="Swordman" info="Fighting with a sword."/>

            <RandomCard/>

            <InteractiveButton/>

            <DynamicButton/>

            <ButtonWithEventHandler/>

            <h2>Another components:</h2>

            <InputComponent/>

            <TextInputWithFocusButton/>

            <Counter/>

            Just for commit! Second time... Third time... Fourth time... I will do it!
            Let me tell you something!

            <PropDrilling msg="Hello world!"/>


            <h1>Temperature Converter</h1>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />

        </div>
    );
}

export default App;
