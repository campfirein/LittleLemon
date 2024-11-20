import { useTheme } from "../ThemeContext";

const Switch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={theme === "dark"}
          aria-label="Toggle dark mode"
          role="switch"
          aria-checked={theme === "dark"}
        />
        Toggle Theme
      </label>
    </div>
  );
};

export default Switch;