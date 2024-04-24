import { useQuery } from "@tanstack/react-query";
import { autoFetch } from "../utils";
import Products from "./Products";

const Special = () => {
    const fetchingFn = async ()=>{
        const res =await autoFetch("/special/special.json")
        return res
    }
    const { data, isFetching, status } = useQuery({
        queryKey:["special"],
        queryFn:fetchingFn
    })
    return status === 'pending' || isFetching ? (
      <section className="flex justify-center items-center ">
        <span className="loading loading-spinner text-[#747bff] font-man text-7xl"></span>
      </section>
    ) : status === 'error' ? (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    ) : (
      <Products data={data.data} />
    );
}

export default Special