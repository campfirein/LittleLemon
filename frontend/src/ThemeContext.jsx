import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";

// Create a context
const ThemeContext = createContext();

// Implement the ThemeProvider
export const ThemeProvider = ({ children }) => {
  // State for the theme, default is 'light'
  const [theme, setTheme] = useState("light");

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Apply the theme to the body class
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Context value
  const contextValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Define PropTypes for ThemeProvider
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Hook to use ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};