import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import {removeItem } from "../features/wishlist/WishListSlice"
const WishListCard = () => {
    const {wishListItems:data} =useSelector((state)=>state.wishList) 
       const dispatch = useDispatch();
       const removeFromWishList = (product) => {
         dispatch(removeItem( product ));
       };
  return (
    <div className="my-4 px-4 flex flex-col w-full items-start justify-start md:flex md:flex-row md:flex-wrap md:gap-4  lg:gap-10 ">
      {data.map((prod) => {
        return (
          <Link key={prod.id} to={`/products/${prod.id + 1}`}>
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 1 }}
                className="relative w-96 md:w-72  px-4 shadow-lg bg-[#f7f5eb] rounded-t-md flex flex-col my-4 md:my-0 justify-start items-start "
              >
                <img src={prod.img} alt={prod.cat} className=" rounded-t-md" />
                <h2 className="text-[#1b1b1b] text-xl my-2 font-man font-light">
                  {prod.name}
                </h2>
                <p className="text-[#1b1b1b] text-lg my-2 font-man font-light">
                  {prod.type}
                </p>
                <p className="text-[#1b1b1b] text-lg my-2 font-man font-light">
                  {formatPrice(prod.price)}
                </p>
                <p className="text-[#1b1b1b] text-lg my-2 font-man font-light">
                  {prod.cat}
                </p>
                <button
                  className="btn bg-[#f7f5eb] text-[#1b1b1b] mb-2 mt-1 font-man btn-block"
                  onClick={() => removeFromWishList(prod)}
                >
                  Remove From WishList
                </button>
              </motion.div>
            </AnimatePresence>
          </Link>
        );
      })}
    </div>
  );
}

export default WishListCard