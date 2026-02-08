import "./styles/App.css";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import { TechStackFull } from "./sections/TechStack";
import useDark from "./hooks/useDarkTheme";
import { setDark } from "./lib/body.toggle";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const { isDark, toggleIsDark } = useDark();

  useEffect(() => {
    setDark(isDark);
  }, [isDark]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col gap-4">
              <Header isDark={isDark} toggleIsDark={toggleIsDark} />
              <Main />
            </div>
          }
        />
        <Route path="/techstack" element={<TechStackFull />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
