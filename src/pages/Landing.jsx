import { useLoaderData } from 'react-router-dom';
import { autoFetch } from './../utils/index';
import { Pagination, Products, ProductsTitle } from '../subComponent';
import { SecondHeader } from '../components';

const productsQuery = () => {
  return {
    queryKey: ['all'],
    queryFn: () => autoFetch(`/all/${1}.json`),
  };
};
export const loader =
  (queryCLient) =>
  async () => {
    const data = await queryCLient.ensureQueryData(productsQuery());
    console.log(data)
    return data;
  };

const Landing = () => {
  const {data} = useLoaderData()
  return (
     <>
{/* SECOND HEADER */}
    <SecondHeader/>
    <div className="bg-[white] flex flex-col">
    {/* PRODUCTS TITLE */}
    <ProductsTitle/>
      {/* PRODUCTS COMPONENT */}
     <Products data={data}/>
     {/* PAGINATION */}
     <Pagination file="all"/>
    </div>
    </>
  );
}

export default Landing