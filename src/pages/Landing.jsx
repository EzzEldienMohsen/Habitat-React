import { LandingHero } from "../subComponent";
import { autoFetch } from './../utils/index';

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
    console.log(data);
    return data;
  };

const Landing = () => {
  return (
    <div className="bg-[white] flex flex-col">
    {/* Landing Hero */}
    <LandingHero/>
    
    </div>
  );
}

export default Landing