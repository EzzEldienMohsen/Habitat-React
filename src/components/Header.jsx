import { Link } from "react-router-dom";
import { headerLinks, logo } from "../assets";
import { IoSearchOutline } from 'react-icons/io5';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { Menu } from "../subComponent";
import { useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa6";

const Header = () => {
  const { numItemsInCart } = useSelector((state) => state.cart);
  const { numItemsInWishList } = useSelector((state) => state.wishList);
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
        <IoSearchOutline className="w-10 h-10 text-[#222] font-thin" />
        <Link to="/cart" className="relative">
          <span className="absolute top-0 w-6 h-6 flex justify-center items-center right-0 btn-circle bg-[#747bff] text-black font-man font-light text-xs">
            <span>{numItemsInCart}</span>
          </span>
          <MdOutlineShoppingBag className="w-10 h-10 text-[#222] font-thin" />
        </Link>
        <Link to="/wishList" className="relative">
          <span className="absolute top-0 w-6 h-6 flex justify-center items-center right-0 btn-circle bg-[#747bff] text-black font-man font-light text-xs">
            <span>{numItemsInWishList}</span>
          </span>
          <FaHeart className="w-10 h-10 text-[#222] font-thin" />
        </Link>
      </div>
      {/* MOBILE MENU */}
      <Menu />
    </div>
  );
}

export default Header