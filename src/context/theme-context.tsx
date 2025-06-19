import { useState, useContext, createContext, useEffect } from "react";

type AvailableThemes = "light" | "dark";
type ThemeContextType = {
  theme: AvailableThemes;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  // Check for saved user preference or system preference
  useEffect(() => {
    // NOTE:
    // The `as AvailableThemes` syntax is a TypeScript type assertion. It's a way to tell TypeScript,
    //  "I know more about this value's type than you do, so treat it as this specific type."
    // `localStorage.getItem()` normally returns `string | null` in TypeScript, so `as AvailableThemes`
    //  asserts that: If the value isn't null, it must be either "light" or "dark". We're telling
    //  TypeScript to trust us that this is true
    const savedTheme = localStorage.getItem("theme") as AvailableThemes | null;
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    setTheme(savedTheme || (systemPrefersDark ? "dark" : "light"));
  }, []);

  // Applies `class="dark"/"light"` at the root element like tailwind says here: https://tailwindcss.com/docs/dark-mode
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a function that allows us to use the theme if we want further down the component tree
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
