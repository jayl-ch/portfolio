import Header from "../layout/Header";
import Main from "../layout/Main";
import type { DarkToggleProps } from "../types/types";

const Home = ({ isDark, toggleIsDark }: DarkToggleProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Header isDark={isDark} toggleIsDark={toggleIsDark} />
      <Main />
    </div>
  );
};

export default Home;
