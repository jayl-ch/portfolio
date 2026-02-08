import "./styles/App.css";
import Home from "./pages/Home";
import Footer from "./layout/Footer";
import TechStackAll from "./pages/TechStackAll";
import useDark from "./hooks/useDarkTheme";
import { Routes, Route } from "react-router-dom";

function App() {
  const { isDark, toggleIsDark } = useDark();

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
