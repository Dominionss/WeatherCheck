import Card, { RandomCard } from './Card';
import InteractiveButton from "./InteractiveButton";
import DynamicButton from "./DynamicButton";

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

        </div>
    );
}

export default App;
