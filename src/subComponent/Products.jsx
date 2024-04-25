/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom';
import { addItem as addToWishList } from '../features/wishlist/WishListSlice';
import { useDispatch } from 'react-redux';
import { FaHeart } from 'react-icons/fa6';
import { formatPrice } from '../utils';
import { motion, AnimatePresence } from 'framer-motion';

const Products = ({data}) => {
    const [isSelected, setIsSelected] = React.useState();
    const dispatch = useDispatch();
    const addItemToWishList = (product) => {
      dispatch(addToWishList({ product }));
    };
  return (
      <div
        className="my-4 px-4 flex flex-col justify-center items-center md:justify-between lg:items-start lg:justify-start md:flex md:flex-row md:flex-wrap md:gap-4  lg:gap-10 "
      >
        {data.map((prod) => {
          const wishListProduct = {
            name: prod.name,
            id: prod.id,
            img: prod.img,
            cat: prod.cat,
            price: prod.price,
            type: prod.type,
          };
          return (
            <AnimatePresence key={prod.id} mode="wait">
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-80 md:w-72  px-4 shadow-lg bg-[#f7f5eb] rounded-t-md flex flex-col my-4 md:my-0 justify-start items-start "
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
                <Link to={`/products/${prod.id + 1}`} className=' btn btn-block my-2 flex justify-center shadow-xl border-[2px] items-center'>
                  <p className="text-[#1b1b1b] text-lg  font-man font-light">
                   Go to product
                  </p>
                </Link>
              </motion.div>
            </AnimatePresence>
          );
        })}
      </div>
  );
}

export default Products