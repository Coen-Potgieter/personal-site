import { useTheme } from "../../context/theme-context";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  const activeStyle = "text-black/20";

  return (
    <button
      onClick={toggleTheme}
      className="flex h-fit justify-between gap-x-10 px-4 mt-2 mr-2 py-2 rounded-full bg-my-white2 dark:bg-my-black2 shadow-md dark:shadow-white/10 cursor-pointer text-lg"
    >
      <span className={theme === "dark" ? "" : activeStyle}>🌙</span>
      <span className={theme === "light" ? "" : activeStyle}>☀️</span>
    </button>
  );
};

export default ThemeToggleButton;
