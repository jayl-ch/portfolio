import { useState } from "react";
import type { DarkToggleProps } from "../types/types";

export default function useDark(): DarkToggleProps {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark",
  );

  const toggleIsDark = () => setIsDark((prev) => !prev);

  return { isDark, toggleIsDark };
}
