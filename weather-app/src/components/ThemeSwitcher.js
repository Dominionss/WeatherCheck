import React from "react";
import { useTheme } from "./ThemeProvider";

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div>
            <p>Current theme: {theme}</p>
            <button onClick={toggleTheme}>
                Switch to {theme === "light" ? "dark" : "light"} mode
            </button>
        </div>
    );
};

export default ThemeSwitcher;