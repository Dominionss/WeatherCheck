import React, { useState } from 'react';

import Card, { RandomCard } from './components/Card';
import InteractiveButton from "./components/InteractiveButton";
import {TextInputWithFocusButton} from "./components/InteractiveButton";
import DynamicButton from "./components/DynamicButton";
import ButtonWithEventHandler from "./components/ButtonWithEventHandler";
import InputComponent from "./components/InputComponent";
import Counter from "./components/Counter";
import PropDrilling from "./components/PropDrilling";
import ConditionalComponent from "./components/ConditionalComponent";
import Timer from "./components/Timer";
import ListComponent from "./components/ListComponent";
import SubmitForm from "./components/SubmitForm";
import PreviousValueExample from "./components/PreviousValueExample";
import SignUpForm from "./components/SignUpForm";

import { UserContext } from "./context";
import ProfileWithContext from "./components/ProfileWithContext";
import ThemeSwitcher from "./components/ThemeSwitcher";

import GoalForm from "./components/GoalForm";

import TemperatureInput from './components/TemperatureInput';
import { toCelsius, toFahrenheit, tryConvert } from './utils/converters';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import {ThemeProvider} from "./components/ThemeProvider";

function Test() {

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

    const [goals, setGoals] = useState([]);

    const addGoal = (newGoal) => {
        setGoals([...goals, newGoal]);
    };

    return(
        <div>
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

            <ConditionalComponent condition={true}/>
            <ConditionalComponent condition={false}/>

            <Timer/>

            <ListComponent/>

            <hr/>

            <SubmitForm/>

            <hr/>

            <PreviousValueExample/>

            <hr/>

            <SignUpForm/>

            <hr/>

            <UserContext.Provider value={{ name: "Harry" }}>
                <ProfileWithContext />
            </UserContext.Provider>

            <hr/>

            <ThemeProvider>
                <ThemeSwitcher/>
            </ThemeProvider>

            <hr/>

            <h1>My Little Lemon Goals</h1>
            <GoalForm onAddGoal={addGoal}/>
            <ul>
                {goals.map((g, i) => (
                    <li key={i}>
                        My goal is to {g.goal}, by {g.by}
                    </li>
                ))}
            </ul>

            <hr/>

        </div>
    );
}

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <nav style={{display: 'flex', gap: '10px', margin: "20px"}}>
                    <Link to="/" className="nav-item">Homepage</Link>
                    <Link to="/about" className="nav-item">About WeatherCheck</Link>
                    <Link to="/test" className="nav-item">Test</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/test" element={<Test />}/>
                </Routes>
            </BrowserRouter>

            We need to add footer here!

        </div>
    );
}

export default App;
