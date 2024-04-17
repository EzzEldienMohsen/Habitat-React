import { Link } from "react-router-dom";
import { headerLinks, logo } from "../assets";
import { IoSearchOutline } from 'react-icons/io5';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { TbGridDots } from 'react-icons/tb';
import { Menu } from "../subComponent";

const Header = () => {
  return (
    <div className="bg-[#f7f5eb] flex lg:justify-evenly items-center justify-between px-6 lg:px-0">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="img" />
      </Link>
      {/* Middle NavBar */}
      <ul className="hidden lg:flex gap-4 justify-between items-center text-md text-[#222] text-md font-man font-extralight capitalize">
        {headerLinks.map((li) => {
          return <li key={li}>{li}</li>;
        })}
      </ul>
      {/* Icons */}
      <div className="hidden lg:flex justify-between items-center text-[#222] text-2xl gap-6 font-man font-extralight">
        <IoSearchOutline />
        <MdOutlineShoppingBag />
        <TbGridDots />
      </div>
      {/* MOBILE MENU */}
      <Menu/>
    </div>
  );
}

export default Header