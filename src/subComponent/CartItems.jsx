import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem as addToWishList } from '../features/wishlist/WishListSlice';
import { FaHeart } from 'react-icons/fa6';
import { formatPrice } from '../utils';
import { removeItem } from '../features/cart/CartSlice';

const CartItems = () => {
  const [isSelected, setIsSelected] = React.useState();
  const dispatch = useDispatch();
  const addItemToWishList = (product) => {
    dispatch(addToWishList({ product }));
  };

  const removeItemsFromCart = (prod) => {
    dispatch(removeItem(prod));
  };
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <div className="my-4 px-4 flex flex-col  items-start justify-start md:flex md:flex-row md:flex-wrap md:gap-4  lg:gap-10 ">
      {cartItems.map((prod) => {
        const wishListProduct = {
          name: prod.name,
          id: prod.id,
          img: prod.id,
          cat: prod.cat,
          price: prod.price,
          type: prod.type,
        };

        return (
          <AnimatePresence key={prod.cartID} mode="wait">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 1 }}
              className="relativew-80 md:w-64   px-4 shadow-lg bg-[#f7f5eb] rounded-t-md flex flex-col my-4 md:my-0 justify-start items-start "
            >
              <button
                className={`absolute btn-ghost bg-transparent top-0 right-0 btn btn-circle ${isSelected === prod.id ? 'text-[#ef436ee9]' : 'text-black'} text-3xl`}
                onClick={() => {
                  setIsSelected(prod.id);
                  addItemToWishList({ ...wishListProduct });
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
