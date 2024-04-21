import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const SocialColumn = () => {
  return (
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
  );
}

export default SocialColumn