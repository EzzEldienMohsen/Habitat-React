import {  IoSearchOutline } from "react-icons/io5";
import { headerLinks } from "../assets";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";

const Menu = () => {
  return (
    <div className="dropdown dropdown-end lg:hidden">
      <div tabIndex={0} role="button" className="btn text-4xl m-1">
        <label className="btn btn-circle swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          {/* hamburger icon */}
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* close icon */}
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content gap-3 z-[1] menu p-4 shadow bg-white border-b-2 border-black  w-[93vw] rounded-md"
      >
        {headerLinks.map((li) => {
          return (
            <Link
              key={li}
              className={`${li === '|' ? 'hidden' : ''} text-md`}
              to={`/${li}/1`}
            >
              {li}
            </Link>
          );
        })}
        <div className="w-1/2 flex justify-between items-center text-[#222] text-2xl  mt-3 font-man font-extralight">
          <IoSearchOutline />
          <Link to="/cart">
            <MdOutlineShoppingBag />
          </Link>
          <Link to="/wishList">
            <FaHeart />
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default Menu