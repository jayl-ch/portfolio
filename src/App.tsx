import "./styles/App.css";
import Home from "./pages/Home";
import Footer from "./layout/Footer";
import TechStackAll from "./pages/TechStackAll";
import useDark from "./hooks/useDarkTheme";
import { setDark } from "./lib/setBodyClass";
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
          element={<Home isDark={isDark} toggleIsDark={toggleIsDark} />}
        />
        <Route path="/techstack" element={<TechStackAll />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
