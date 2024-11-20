import { useTheme } from "../ThemeContext";

const Switch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={toggleTheme} // Call toggleTheme when the switch is toggled
          checked={theme === "dark"} // Set the switch position based on the theme
        />
        Toggle Theme
      </label>
    </div>
  );
};

export default Switch;