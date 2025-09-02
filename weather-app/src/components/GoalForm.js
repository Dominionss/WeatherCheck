import React, { useState } from "react";


function InputField(props) {
    // Destructure props for clarity
    const { value, onChange, placeholder } = props;

    // Handle text input changes
    function handleChange(event) {
        const newValue = event.target.value; // extract new text from input
        onChange(newValue); // pass it back up to parent
    }

    return (
        <input
            type="text"
            value={value}           // current text value
            onChange={handleChange} // event handler
            placeholder={placeholder} // placeholder text
        />
    );
}

function GoalForm({ onAddGoal }) {
    // State for form fields
    const [goalText, setGoalText] = useState("");  // what the goal is
    const [deadline, setDeadline] = useState("");  // when to complete it

    // Handles form submission
    function handleFormSubmit(event) {
        event.preventDefault(); // stop page reload

        // Only submit if both fields have text
        if (goalText.trim() !== "" && deadline.trim() !== "") {
            // Tell the parent component about the new goal
            onAddGoal({
                goal: goalText,
                by: deadline,
            });

            // Clear the form fields
            setGoalText("");
            setDeadline("");
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <InputField
                value={goalText}
                onChange={setGoalText}
                placeholder="Enter your goal"
            />
            <InputField
                value={deadline}
                onChange={setDeadline}
                placeholder="Enter a deadline"
            />
            <button type="submit">Add Goal</button>
        </form>
    );
}

export default GoalForm;