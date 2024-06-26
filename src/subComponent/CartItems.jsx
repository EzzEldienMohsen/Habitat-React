import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem as addToWishList } from '../features/wishlist/WishListSlice';
import { FaHeart } from 'react-icons/fa6';
import { formatPrice } from '../utils';
import { removeItem } from '../features/cart/CartSlice';
import { removeItem as removeFromWishList } from '../features/wishlist/WishListSlice';

const CartItems = () => {
  const { wishListItems } = useSelector((state) => state.wishList);
  const dispatch = useDispatch();
  const addItemToWishList = (product) => {
    dispatch(addToWishList({ product }));
  };
 const removeItemFromWishList = (product) => {
   dispatch(removeFromWishList(product));
 };
  const removeItemsFromCart = (prod) => {
    dispatch(removeItem(prod));
  };
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className="my-4 px-4 flex flex-col justify-center items-center md:justify-evenly lg:items-start lg:justify-evenly md:flex md:flex-row md:flex-wrap md:gap-4  lg:gap-10 ">
      {cartItems.map((prod) => {
        const wishListProduct = {
          name: prod.name,
          id: prod.cartID,
          img: prod.img,
          cat: prod.cat,
          price: prod.price,
          type: prod.type,
        };
        const item = wishListItems.find((i)=>i.id===prod.cartID)
        console.log("item =>", item)
        console.log("Prod =>", prod)
        return (
          <AnimatePresence key={prod.cartID} mode="wait">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 1 }}
              className="relative w-80 lg:w-72 px-4 shadow-lg bg-[#f7f5eb] rounded-t-md flex flex-col my-4 md:my-0 justify-start items-start "
            >
              <button
                className={`absolute btn-ghost bg-transparent top-0 right-0 btn btn-circle ${item?.id === prod.cartID ? 'text-[#ef436ee9]' : 'text-black'} text-3xl`}
                onClick={() => {
                  if (item) {
                    removeItemFromWishList({id:prod.cartID});
                  } else {
                    addItemToWishList({ ...wishListProduct });
                  }
                }}
              >
                <FaHeart />
              </button>
              <img src={prod.img} alt={prod.cat} className=" rounded-t-md" />
              <Link
                to={`/products/${prod.cartID + 1}`}
                className="flex justify-between items-center w-full"
              >
                <div className="flex justify-between items-center w-full mt-1 ">
                  <p className="text-[#1b1b1b] text-lg font-man font-light">
                    Name
                  </p>
                  <p className="text-[#1b1b1b] text-lg font-man font-light">
                    {prod.name}
                  </p>
                </div>
              </Link>
              <div className="flex justify-between items-center w-full mt-1 ">
                <p className="text-[#1b1b1b] text-lg font-man font-light">
                  Type
                </p>
                <p className="text-[#1b1b1b] text-lg font-man font-light">
                  {prod.type}
                </p>
              </div>
              <div className="flex justify-between items-center w-full mt-1 ">
                <p className="text-[#1b1b1b] text-lg font-man font-light">
                  Category
                </p>
                <p className="text-[#1b1b1b] text-lg my-2 font-man font-light">
                  {prod.cat}
                </p>
              </div>
              <div className="flex justify-between items-center w-full mt-1 ">
                <p className="text-[#1b1b1b] text-lg font-man font-light">
                  Amount:
                </p>
                <p className="text-[#1b1b1b] text-lg  font-man font-light">
                  {prod.amount}
                </p>
              </div>
              <div className="flex justify-between items-center w-full mt-1 ">
                <p className="text-[#1b1b1b] text-lg font-man font-light">
                  unit Price:
                </p>
                <p className="text-[#1b1b1b] text-lg my-2 font-man font-light">
                  {formatPrice(prod.price)}
                </p>
              </div>
              <div className="flex justify-between items-center w-full mt-1 ">
                <p className="text-[#1b1b1b] text-lg font-man font-light">
                  Total Price:
                </p>
                <p className="text-[#1b1b1b] text-lg my-2 font-man font-light">
                  {formatPrice(prod.price * prod.amount)}
                </p>
              </div>
              <button
                className="btn bg-[#f7f5eb] text-[#1b1b1b] mb-2 mt-1 font-man btn-block"
                onClick={() => removeItemsFromCart(prod)}
              >
                Remove From bag
              </button>
            </motion.div>
          </AnimatePresence>
        );
      })}
    </div>
  );
};

export default CartItems;
