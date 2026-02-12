import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import TechStackAll from "../pages/TechStackAll";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/techstack" element={<TechStackAll />} />
    </Routes>
  );
};

export default AppRoutes;
