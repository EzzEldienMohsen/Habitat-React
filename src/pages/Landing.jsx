import { useLoaderData } from 'react-router-dom';
import { autoFetch } from './../utils/index';
import { Products } from '../subComponent';

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
    <div className="bg-[white] flex flex-col">
      {/* PRODUCTS COMPONENT */}
     <Products data={data}/>
    </div>
  );
}

export default Landing