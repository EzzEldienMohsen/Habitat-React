import { useLoaderData } from 'react-router-dom';
import { autoFetch } from './../utils/index';
import { Pagination, Products, ProductsTitle, Seperator, Special } from '../subComponent';
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
    return data;
  };

const Landing = () => {
  const {data} = useLoaderData()
  return (
    <>
      {/* SECOND HEADER */}
      <SecondHeader />
      <div className="bg-[white] flex flex-col">
        {/* PRODUCTS TITLE */}
        <ProductsTitle />
        {/* PRODUCTS COMPONENT */}
        <Products data={data} />
        {/* PAGINATION */}
        <Pagination file="all" />
        {/* Separator */}
        <Seperator />
        {/* Special Products */}
        <Special />
      </div>
    </>
  );
}

export default Landing