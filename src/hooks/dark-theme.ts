import { useState } from "react";

export default function useDark() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark",
  );

  const toggleIsDark = () => setIsDark((prev) => !prev);

  return { isDark, toggleIsDark };
}
