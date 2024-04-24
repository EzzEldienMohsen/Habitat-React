import { useSelector } from 'react-redux';
import { formatPrice } from '../utils';

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cart
  );

  return (
    <div className="flex flex-col px-4 py-2 gap-3 my-4 bg-[#f7f5eb]">
      {/* SUB TOTAL */}
      <p className="border-b border-base-300 pb-2 flex justify-between font-man font-light text-sm lg:text-base">
        <span>Subtotal</span>
        <span>{formatPrice(cartTotal)}</span>
      </p>
      {/* SHIPPING */}
      <p className="border-b border-base-300 pb-2 flex justify-between text-sm lg:text-base">
        <span>Shipping</span>
        <span className="font-medium">{formatPrice(shipping)}</span>
      </p>
      {/* TAX */}
      <p className="border-b border-base-300 pb-2 flex justify-between text-sm lg:text-base">
        <span>Tax</span>
        <span className="font-medium">{formatPrice(tax)}</span>
      </p>
      {/* ORDER TOTAL */}
      <p className="mt-4 pb-2 flex justify-between text-lg lg:text-xl">
        <span>Order Total</span>
        <span className="font-medium">{formatPrice(orderTotal)}</span>
      </p>
    </div>
  );
};

export default CartTotals;
