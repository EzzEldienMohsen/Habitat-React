
import { FooterFirstColumn, FooterLinks } from '../subComponent';
import { footerAddress, footerCompany, footerShop } from './../assets/index';
import { FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
 
  return (
    <div className="flex flex-col">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row px-2 py-6 md:px-4 lg:px-6 justify-start lg:justify-between">
        {/* First column */}
        <FooterFirstColumn />
        {/* Second Column */}
        <div className="flex flex-col md:flex-row justify-start items-start md:justify-between lg:justify-evenly w-full lg:w-3/5 mt-6 lg:mt-0">
          {/* Links */}
          <FooterLinks title={footerShop.title} list={footerShop.list} />
          <FooterLinks title={footerCompany.title} list={footerCompany.list} />
          <FooterLinks title={footerAddress.title} list={footerAddress.list} />
          <div className="flex flex-col gap-4">
            <h2 className="capitalize font-man text-[#1b1b1b]">follow us</h2>
            <ul className="font-man font-light text-[#1b1b1b] ">
              <li className="my-2 flex capitalize justify-between items-center">
                <FaFacebookF className="mr-2" />
                facebook
              </li>
              <li className="my-2 flex capitalize justify-between items-center">
                <FaInstagram className="mr-2" />
                instagram
              </li>
              <li className="my-2 flex capitalize justify-between items-center">
                <FaXTwitter className="mr-2 " />
                <span className='mr-6'>twitter</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer