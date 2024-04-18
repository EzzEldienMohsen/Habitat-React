/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const FooterLinks = ({title,list}) => {
  return (
    <div className={`flex flex-col gap-4 ${title=="Address"?"w-1/5":""}`}>
            <h2 className="capitalize font-man text-[#1b1b1b]">
              {title}
            </h2>
            <ul className="font-man font-light text-[#1b1b1b] ">
              {list.map((li) => {
                return <Link key={li} to="">  <li className='my-2'>{li}</li></Link>;
              })}
            </ul>
          </div>
  )
}

export default FooterLinks