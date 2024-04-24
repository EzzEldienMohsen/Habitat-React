import { iconQ } from '../assets';

const TheSingleContent = () => {
  return (
    <div className="my-4 px-4">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        <div className="flex flex-col lg:w-4/6">
          <p className="text-xs md:text-sm lg:text-base text-gray-600 uppercase">
            Freshwater Aquascapes
          </p>
          <h1 className="my-2 text-xl md:text-2xl lg:text-3xl text-gray-800 font-semibold">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.
          </h1>
          <div className="flex items-center gap-4">
            <img src={iconQ} alt="icon" className="w-8 h-8" />
            <p className="text-sm md:text-base lg:text-lg text-gray-700">
              Backed by our Arrive Alive Guarantee
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:w-5/6">
          <p className="text-sm md:text-base lg:text-lg text-gray-800">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <p className="text-sm md:text-base lg:text-lg text-gray-800">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TheSingleContent;
