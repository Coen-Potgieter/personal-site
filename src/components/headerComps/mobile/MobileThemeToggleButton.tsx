import { useTheme } from "../../../context/theme-context";

const MobileThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="h-fit w-fit px-2 py-0.5 rounded-full shadow-xs dark:shadow-white/20 shadow-black/20 bg-my-white2 dark:bg-my-black2 text-sm"
    >
      {theme === "dark" && <span>🌙</span>}
      {theme === "light" && <span>☀️</span>}
    </button>
  );
};

export default MobileThemeToggleButton;
