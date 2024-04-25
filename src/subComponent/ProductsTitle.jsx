import { Link } from "react-router-dom";
import { headerLinks } from "../assets";
import React from "react";
import { motion } from 'framer-motion';

const ProductsTitle = () => {
    const [selectedTab, setSelectedTab] = React.useState(
      JSON.parse(localStorage.getItem('selectedTap')) || 'all'
    );
    localStorage.setItem('selectedTap', JSON.stringify(selectedTab));
  return (
    <div className="flex flex-col px-4 justify-center items-center mt-4">
      <h1 className="   font-man capitalize text-xl md:text-2xl lg:text-3xl font-light ">
        products
      </h1>
      <ul className="flex justify-between gap-8 items-center font-man capitalize text-md md:text-lg lg:text-xl my-3">
        {headerLinks.map((li) => {
          return (
            <li key={li}>
              <Link to={`/${li}/1`} onClick={() => setSelectedTab(li)}>
                {li}
              </Link>
              {li === selectedTab ? (
                <motion.div className="underline h-[3px]  bg-[darkblue]" layoutId="underline" />
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductsTitle