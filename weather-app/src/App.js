import Card, { RandomCard } from './Card';
import InteractiveButton from "./InteractiveButton";
import {TextInputWithFocusButton} from "./InteractiveButton";
import DynamicButton from "./DynamicButton";
import ButtonWithEventHandler from "./ButtonWithEventHandler";
import InputComponent from "./InputComponent";
import Counter from "./Counter";

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

            Just for commit!

        </div>
    );
}

export default App;
