import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

const Home = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer/>
    </>
  );
}

export default Home