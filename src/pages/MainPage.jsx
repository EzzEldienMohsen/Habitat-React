import { useLoaderData } from 'react-router-dom';
import {
  Pagination,
  Products,
  ProductsTitle,
  Seperator,
  Special,
} from '../subComponent';
import { autoFetch } from '../utils';
import { SecondHeader } from '../components';

var p;
var theFile;
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
    if(file){
      theFile=file
    }else{theFile==="all"}
    console.log(params)
    const data = await queryCLient.ensureQueryData(productsQuery(file, page));
    console.log(data)
    return data;
  };

const MainPage = () => {
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
        <Pagination file={theFile} pageNu={p} />
        {/* Separator */}
        <Seperator />
        {/* Special Products */}
      <Special/>
      </div>
    </>
  );
}

export default MainPage