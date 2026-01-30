import AboutMe from "./Main/About";
import Experience from "./Main/Experience";
import TechStack from "./Main/TechStack";

const Main = () => {
  return (
    <main className="">
      <div className="grid gap-3 max-w-250 mx-auto md:grid-cols-[1.5fr_1fr]">
        <AboutMe />
        <Experience />
        <TechStack />
      </div>
    </main>
  );
};

export default Main;
