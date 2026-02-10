import "./styles/App.css";
import Home from "./pages/Home";
import Footer from "./layout/Footer";
import TechStackAll from "./pages/TechStackAll";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/techstack" element={<TechStackAll />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
