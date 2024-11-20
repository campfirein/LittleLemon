import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";

// Create a context
const ThemeContext = createContext();

// Implement the ThemeProvider
export const ThemeProvider = ({ children }) => {
  // State for the theme, default to the stored preference or 'light'
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  // Function to toggle the theme and persist the preference
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme); // Persist theme preference
      return newTheme;
    });
  };

  // Apply the theme to the body class
useEffect(() => {
    document.body.className = theme;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
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