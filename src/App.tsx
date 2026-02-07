import "./styles/App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { TechStackFull } from "./components/Main/TechStack";
import useDark from "./hooks/dark-theme";
import { setDark } from "./lib/body.toggle";
import { Routes, Route } from "react-router-dom";

function App() {
  const { isDark, toggleIsDark } = useDark();

  setDark(isDark);

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
