import { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import { dark } from "./lib/body.toggle";
import Main from "./components/Main";

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleIsDark = () => setIsDark((prev) => !prev);

  dark(isDark);
  return (
    <>
      <div className="flex flex-col gap-4">
        <Header isDark={isDark} toggleIsDark={toggleIsDark} />
        <Main />
      </div>
    </>
  );
}

export default App;
