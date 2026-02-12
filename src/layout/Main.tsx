import AboutMe from "../sections/About";
import Experience from "../sections/Experience";
import TechStack from "../sections/TechStack";
import Projects from "../sections/Projects";

const Main = () => {
  return (
    <main className="animate-appear">
      <div className="grid gap-3 max-w-220 mx-auto md:grid-cols-[1.5fr_1fr]">
        <AboutMe />
        <Experience />
        <TechStack />
        <Projects />
      </div>
    </main>
  );
};

export default Main;
