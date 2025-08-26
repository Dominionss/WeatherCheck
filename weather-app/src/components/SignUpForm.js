import React, { useState } from 'react';


function SignUpForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);

        setFormData({ firstName: "",
            lastName: "",
            email: "",
            password: "",
            role: "",
        });
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <h2>Sign Up</h2>

            <label>
                First name <span style={{ color: "red" }}>*</span>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                Last name
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </label>

            <label>
                Email address <span style={{ color: "red" }}>*</span>
                <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                Password <span style={{ color: "red" }}>*</span>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                Role <span style={{ color: "red" }}>*</span>
                <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                >
                    <option value="">Role</option>
                    <option value="IT department">IT department</option>
                    <option value="Marketing">Marketing</option>
                </select>
            </label>

            <button type="submit" style={styles.button}>
                CREATE ACCOUNT
            </button>
        </form>
    );
}

const styles = {
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem",
        maxWidth: "400px",
        margin: "auto",
        border: "1px solid #ddd",
        borderRadius: "8px",
    },
    button: {
        backgroundColor: "navy",
        color: "white",
        padding: "0.75rem",
        border: "none",
        borderRadius: "4px",
        fontWeight: "bold",
        cursor: "pointer",
    },

}

export default SignUpForm;