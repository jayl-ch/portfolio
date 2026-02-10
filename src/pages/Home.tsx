import Header from "../layout/Header";
import Main from "../layout/Main";

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <Main />
    </div>
  );
};

export default Home;
