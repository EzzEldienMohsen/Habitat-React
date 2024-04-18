
import { Link } from 'react-router-dom';
import { FooterFirstColumn, FooterLinks } from '../subComponent';
import { footerAddress, footerCompany, footerShop } from './../assets/index';
import { FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
 
  return (
    <div className="flex flex-col">
      {/* First Section */}
      <div className="bg-[#fafafa] flex flex-col lg:flex-row px-2 py-6 md:px-4 lg:px-6 justify-start lg:justify-between">
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
              <Link to="">
                <li className="my-2 flex capitalize justify-between items-center">
                  <FaFacebookF className="mr-2" />
                  facebook
                </li>
              </Link>
              <Link to="">
                <li className="my-2 flex capitalize justify-between items-center">
                  <FaInstagram className="mr-2" />
                  instagram
                </li>
              </Link>
              <Link to="">
                <li className="my-2 flex capitalize justify-between items-center">
                  <FaXTwitter className="mr-2 " />
                  <span className="mr-6">twitter</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      {/* Second Section */}
      <div className="bg-[#000] my-2 flex flex-col md:flex-row-reverse px-2 gap-4 py-6 md:px-4 lg:px-6 justify-start lg:justify-between">
        <div className="flex flex-col md:flex-row justify-evenly w-1/2 gap-4">
          <Link to="">
            <h2 className="text-[#F5F5F5B2] font-man font-bold capitalize">
              privacy Policy
            </h2>
          </Link>
          <Link to="">
            <h2 className="text-[#F5F5F5B2] font-man font-bold capitalize">
              terms of services
            </h2>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-1/2 gap-4">
          <h6 className="text-[white] text-sm font-man font-bold capitalize">
            © 2022 Habitat Scapes, LLC
          </h6>
          <h6 className="text-[white] text-sm font-man font-bold capitalize">
            Crafted with ♥️ by HighNorth
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Footer