import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearWishList } from '../features/wishlist/WishListSlice';

const WishListCard = () => {
    const {wishListItems:data} =useSelector((state)=>state.wishList) 
       const dispatch = useDispatch();
       const removeFromWishList = (product) => {
         dispatch(removeItem( product ));
       };
       const clearWish = ()=>dispatch(clearWishList())
  return (
    <div className="flex flex-col my-4 px-4 ">
      <div className=" flex flex-col justify-center items-center md:justify-evenly lg:items-start lg:justify-between md:flex md:flex-row md:flex-wrap md:gap-4  lg:gap-10 ">
        {data.map((prod) => {
          return (
            <AnimatePresence key={prod.id} mode="wait">
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 1 }}
                className="relative w-80 px-4 lg:w-72 shadow-lg bg-[#f7f5eb] rounded-t-md flex flex-col my-4 md:my-0 justify-start items-start "
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
                <Link
                  to={`/products/${prod.id + 1}`}
                  className=" btn btn-block my-2 flex justify-center shadow-xl border-[2px] items-center"
                >
                  <p className="text-[#1b1b1b] text-lg font-man font-light">
                    Go to product
                  </p>
                </Link>
              </motion.div>
            </AnimatePresence>
          );
        })}
      </div>
      <button
        onClick={clearWish}
        className=" btn btn-block my-4 flex justify-center shadow-xl border-[2px] items-center"
      >
        Clear WishList
      </button>
    </div>
  );
}

export default WishListCard