/* eslint-disable react/prop-types */
import { amountGeneration, formatPrice } from '../utils';
import React from 'react';
import { addItem as addToWishList } from '../features/wishlist/WishListSlice';
import { addItem as addToCart } from '../features/cart/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart } from 'react-icons/fa6';
import { removeItem as removeFromWishList } from '../features/wishlist/WishListSlice';

const Card = ({ data }) => {
  const [amount, setAmount] = React.useState(1);
  const { wishListItems } = useSelector((state) => state.wishList);

  const dispatch = useDispatch();
  const addItemToWishList = (product) => {
    dispatch(addToWishList({ product }));
  };
  var handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };
  const wishListProduct = {
    name: data.name,
    id: data.id,
    img: data.img,
    cat: data.cat,
    price: data.price,
    type: data.type,
  };
  const cartProduct = {
    name: data.name,
    cartID: data.id,
    img: data.img,
    cat: data.cat,
    price: data.price,
    type: data.type,
    amount: amount,
  };
  const addItemToCart = () => {
    dispatch(addToCart({ product: cartProduct }));
  };
  const removeItemFromWishList = (product) => {
    dispatch(removeFromWishList( product ));
  };
  const item = wishListItems.find((i) => i.id == data.id);
  return (
    <div className="flex px-4 flex-col md:justify-between md:gap-10 lg:gap-20 md:flex-row-reverse relative">
      <button
        className={`absolute btn-ghost bg-transparent top-0 right-4 border-0 btn btn-circle ${item?.id === data.id ? 'text-[#ef436ee9]' : 'text-black'} text-3xl`}
        onClick={() => {
          if (item) {
            removeItemFromWishList(item);
          } else {
            addItemToWishList({ ...wishListProduct });
          }
        }}
      >
        <FaHeart />
      </button>
      <img
        src={data.img}
        alt={data.name}
        className="mb-4 md:mb-0 lg:w-10/12 rounded-t-xl"
      />
      <div className="flex flex-col md:w-2/5 lg:w-auto">
        <h1 className="text-xl md:text-2xl lg:text-4xl mb-4 font-man font-semibold text-[#1b1b1b]">
          {data.name}
        </h1>
        <p className="text-md md:text-lg lg:text-xl mb-4 font-man font-normal text-[#1b1b1]">
          {data.type}
        </p>
        <p className="text-md md:text-lg lg:text-xl mb-4 font-man font-normal text-[#1b1b1]">
          {data.cat}
        </p>
        <p className="text-lg md:text-xl lg:text-2xl mb-4 font-man font-bold text-[#1b1b1]">
          {formatPrice(data.price)}
        </p>
        <p className="text-md md:text-lg lg:text-xl mb-4 font-man font-normal text-[#1b1b1]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          fugiat architecto non recusandae maiores odio quidem, sed ad sequi
          amet vel pariatur culpa. Quibusdam voluptates debitis quaerat,
          reprehenderit quod fuga.
        </p>
        <select
          id="amount"
          className="select  select-md select-bordered mb-4 font-man"
          value={amount}
          onChange={handleAmount}
        >
          {amountGeneration(10)}
        </select>
        <button
          className="btn bg-[#f7f5eb] text-[#1b1b1b] mb-4 font-man btn-block"
          onClick={addItemToCart}
        >
          Add to bag
        </button>
      </div>
    </div>
  );
};

export default Card;
