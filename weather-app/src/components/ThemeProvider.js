import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("red");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "red" ? "green" : "red"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context; // { theme, toggleTheme }
};