
import { FooterFirstColumn, FooterLinks, SecondFooter, SocialColumn } from '../subComponent';
import { footerAddress, footerCompany, footerShop } from './../assets/index';


const Footer = () => {
 
  return (
    <div className="flex flex-col md:mt-4">
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
          <SocialColumn/>
        </div>
      </div>
      {/* Second Section */}
  <SecondFooter/>
    </div>
  );
}

export default Footer