import React, { useState } from 'react';

function SubmitForm() {
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        // 1. Prevent the default browser behavior of a page reload
        event.preventDefault();

        // 2. Here, you would handle the form data
        console.log('Form submitted with name:', name);
        alert(`Hello, ${name}!`);

        // 3. You can clear the input field after submission
        setName('');
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
        console.log(name);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default SubmitForm;