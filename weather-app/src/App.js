import Card, { RandomCard } from './Card';
import InteractiveButton from "./InteractiveButton";
import {TextInputWithFocusButton} from "./InteractiveButton";
import DynamicButton from "./DynamicButton";
import ButtonWithEventHandler from "./ButtonWithEventHandler";
import InputComponent from "./InputComponent";
import Counter from "./Counter";
import PropDrilling from "./PropDrilling";

function App() {
    return (
        <div className="App">
            Hello World!

            <h2>Cards:</h2>

            <Card title="Archer" info="He shoots fro the bow." />
            <Card title="Swordman" info="Fighting with a sword." />

            <RandomCard />

            <InteractiveButton />

            <DynamicButton />

            <ButtonWithEventHandler />

            <h2>Another components:</h2>

            <InputComponent />

            <TextInputWithFocusButton />

            <Counter />

            Just for commit! Second time... Third time... Fourth time... I will do it!
            Let me tell you something!

        <PropDrilling msg="Hello world!"/>

        </div>
    );
}

export default App;
