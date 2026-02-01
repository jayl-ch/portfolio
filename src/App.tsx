import "./styles/App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import useDark from "./hooks/dark-theme";
import { setDark } from "./lib/body.toggle";

function App() {
  const { isDark, toggleIsDark } = useDark();

  setDark(isDark);

  return (
    <>
      <div className="flex flex-col gap-4">
        <Header isDark={isDark} toggleIsDark={toggleIsDark} />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
