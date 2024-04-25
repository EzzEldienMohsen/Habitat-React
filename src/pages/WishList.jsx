import { useSelector } from "react-redux";
import { WishListCard } from "../subComponent";

const WishList = () => {
  const {numItemsInWishList:num} = useSelector((state)=>state.wishList)
  return num === 0 ? (
    <div className="px-4 flex justify-center items-center h-96">
      <h1 className="text-xl md:text-2xl lg:text-5xl font-man font-light">
        Please Add Items To WishList
      </h1>
    </div>
  ) : (
    <WishListCard />
  );
}

export default WishList