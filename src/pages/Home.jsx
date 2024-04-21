import { Outlet } from "react-router-dom";
import { Footer, Header, SecondHeader } from "../components";

const Home = () => {
  return (
    <>
      <Header />
      <SecondHeader/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default Home