import { Link } from "react-router-dom";
import { headerLinks, logo } from "../assets";
import { IoMenuOutline, IoSearchOutline } from 'react-icons/io5';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { TbGridDots } from 'react-icons/tb';

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
      <div className="dropdown dropdown-end lg:hidden">
        <div tabIndex={0} role="button" className="btn text-4xl m-1">
          <IoMenuOutline />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content gap-3 z-[1] menu p-2 shadow bg-white border-b-2 border-black  w-[93vw] rounded-sm"
        >
          {headerLinks.map((li) => {
            return (
              <li key={li} className={`${li === '|' ? 'hidden' : ''} text-md`}>
                {li}
              </li>
            );
          })}
          <div className="w-1/2 flex justify-between items-center text-[#222] text-2xl  mt-3 font-man font-extralight">
            <IoSearchOutline />
            <MdOutlineShoppingBag />
            <TbGridDots />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Header