import { useEffect, useState } from "react";
import type { DarkToggleProps } from "../types/types";

export default function useDark(): DarkToggleProps {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
    
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleIsDark = () => setIsDark((prev) => !prev);

  return { isDark, toggleIsDark };
}
