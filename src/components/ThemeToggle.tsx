import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  theme: "light" | "dark";
  toggle: () => void;
}

const ThemeToggle = ({ theme, toggle }: ThemeToggleProps) => {
  return (
    <button
      onClick={toggle}
      className="relative rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
};

export default ThemeToggle;
