import { useRef } from 'react';


function InteractiveButton() {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <button onClick={handleClick}>
            Click Me...
        </button>
    );
}

function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.focus();
    };
    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}


export default InteractiveButton;
export { TextInputWithFocusButton };