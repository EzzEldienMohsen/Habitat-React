import { useSelector } from "react-redux";
import { CartComponent } from "../components";

const Cart = () => {
  const { numItemsInCart : num } = useSelector((state) => state.cart);
  return (
    num === 0?<div className="px-4 flex justify-center items-center h-96">
      <h1 className="text-xl md:text-2xl lg:text-5xl font-man font-light">Please Add Items To Cart</h1>
    </div> :<CartComponent/>

  );
}

export default Cart