import Card, { RandomCard } from './Card';
import InteractiveButton from "./InteractiveButton";

function App() {
    return (
        <div className="App">
            Hello World!

            <h2>Cards:</h2>

            <Card title="Archer" info="He shoots fro the bow." />
            <Card title="Swordman" info="Fighting with a sword." />

            <RandomCard />

            <InteractiveButton />

        </div>
    );
}

export default App;
