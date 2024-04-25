import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

const Home = () => {
  return (
    <div className="w-full box-border">
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default Home