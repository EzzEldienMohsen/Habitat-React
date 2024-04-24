import { useSelector } from "react-redux";

const Cart = () => {
    const {cartItems} = useSelector((state)=>state.cart)
    console.log(cartItems)
  return (
    <div className="w-full">Cart</div>
  )
}

export default Cart