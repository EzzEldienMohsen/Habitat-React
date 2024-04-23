import { Link } from "react-router-dom";
import { headerLinks } from "../assets";
import React from "react";
import { motion } from 'framer-motion';

const ProductsTitle = () => {
    const [selectedTab,setSelectedTab] = React.useState("all")
  return (
    <div className="flex flex-col justify start items-start px-4 md:justify-center md:items-center">
      <h1 className="   font-man capitalize text-xl md:text-2xl lg:text-3xl font-light ">
        products
      </h1>
      <ul className="flex justify-between gap-4 items-center font-man capitalize text-md md:text-lg lg:text-xl my-3">
        {headerLinks.map((li) => {
          return (
            <li key={li}>
              <Link to={`/${li}/1`} onClick={() => setSelectedTab(li)}>
                {li}
              </Link>
              {li === selectedTab ? (
                <motion.div className="underline h-[3px]  bg-[wheat]" layoutId="underline" />
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductsTitle