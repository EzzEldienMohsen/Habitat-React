import { useLoaderData } from 'react-router-dom';
import { Pagination, Products } from '../subComponent';
import { autoFetch } from '../utils';

var p;
const productsQuery = (file, page) => {
   
  return {
    queryKey: ['all', file, page],
    queryFn: () => autoFetch(`/${file}/${page}.json`),
  };
};
export const loader =
  (queryCLient) =>
  async ({ params }) => {
   
    const  file = params.file;
    const  page = params.page;
    if(file==="all"){
        p=6;
    }else{p=2}
    console.log(params)
    const data = await queryCLient.ensureQueryData(productsQuery(file, page));
    console.log(data)
    return data;
  };

const MainPage = () => {
  const {data} = useLoaderData()
  console.log(data)
  return (
    <div className="bg-[white] flex flex-col">
      {/* PRODUCTS COMPONENT */}
     <Products data={data}/>
     {/* PAGINATION */}
     <Pagination file="all" pageNu={p}/>
    </div>
  );
}

export default MainPage