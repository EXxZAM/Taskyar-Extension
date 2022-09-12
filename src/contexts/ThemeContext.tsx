import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ThemeContext = React.createContext({});
export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: any) => {
    const [theme, setTheme] = useLocalStorage("THEME", "Dark");

    const updateTheme = () => {
        const items = localStorage.getItem("THEME");
        if (items == null) return;
        if (theme === "Dark") {
            localStorage.setItem("THEME", "Light");
            setTheme("Light");
        }
        if (theme === "Light") {
            localStorage.setItem("THEME", "Dark");
            setTheme("Dark");
        }
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                updateTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
