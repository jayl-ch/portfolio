import Profile from "../sections/Profile";
import type { DarkToggleProps } from "../types/types";

const Header = ({ isDark, toggleIsDark }: DarkToggleProps) => {
  return (
    <header className="">
      <Profile isDark={isDark} toggleIsDark={toggleIsDark} />
    </header>
  );
};

export default Header;
