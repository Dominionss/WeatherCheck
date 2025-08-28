import React from "react";
import { useTheme } from "./ThemeProvider";

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div style={{ backgroundColor: theme }}>
            <p>Current theme: {theme}</p>
            <button onClick={toggleTheme}>
                Switch to {theme === "red" ? "green" : "red"} mode
            </button>
        </div>
    );
};

export default ThemeSwitcher;