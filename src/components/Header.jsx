import { Link } from "react-router-dom";
import { headerLinks, logo } from "../assets";
import { IoSearchOutline } from 'react-icons/io5';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { TbGridDots } from 'react-icons/tb';
import { Menu } from "../subComponent";
import { useSelector } from "react-redux";

const Header = () => {
  const {cartTotal} =useSelector((state)=>state.cart)
  return (
    <div className="bg-[#f7f5eb] py-2 flex lg:justify-between items-center justify-between px-4 ">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="img" />
      </Link>
      {/* Middle NavBar */}
      <ul className="hidden lg:flex gap-4 justify-between items-center text-md text-[#222] text-xl font-man font-extralight capitalize">
        {headerLinks.map((li) => {
          return (
            <Link key={li} to={`/${li}/1`}>
              {li}
            </Link>
          );
        })}
      </ul>
      {/* Icons */}
      <div className="hidden lg:flex justify-between items-center text-[#222] text-2xl gap-6 font-man font-extralight">
        <IoSearchOutline className="w-12 h-12 text-[#222] font-thin"/>
        <Link to="/cart" className="relative">
          <span className="absolute top-0 w-8 h-8 flex justify-center items-center right-0 btn-circle bg-[#747bff] text-black font-man font-light text-xs">
            <span>{cartTotal}</span>
          </span>
          <MdOutlineShoppingBag className="w-12 h-12 text-[#222] font-thin" />
        </Link>
        <TbGridDots className="w-12 h-12 text-[#222] font-thin"/>
      </div>
      {/* MOBILE MENU */}
      <Menu />
    </div>
  );
}

export default Header