import { useLoaderData } from "react-router-dom";
import { autoFetch } from "../utils";
import { Card, CareSingle, Seperator, TheSingleContent } from "../subComponent";
import Special from './../subComponent/Special';



const productsQuery = ( id) => {
  return {
    queryKey: ['all',id],
    queryFn: () => autoFetch(`/products/${id}.json`),
  };
};
export const loader =
  (queryCLient) =>
  async ({ params }) => {
    const {id} = params
    const data = await queryCLient.ensureQueryData(productsQuery(id));
    return data;
  };
const SingleProduct = () => {
    const {data} =useLoaderData();
 
  return (
    <div className="flex flex-col my-8">
      {/* CARD */}
      <Card data={data} />
      {/* SECTION */}
      <CareSingle />
      {/* THE LOREM CONTENT */}
      <TheSingleContent />
      {/* Separator */}
      <Seperator/>
      {/* Special Products */}
      <Special/>
    </div>
  );
};

export default SingleProduct;
