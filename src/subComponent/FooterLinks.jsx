/* eslint-disable react/prop-types */

const FooterLinks = ({title,list}) => {
  return (
    <div className={`flex flex-col gap-4 ${title=="Address"?"w-1/5":""}`}>
            <h2 className="capitalize font-man text-[#1b1b1b]">
              {title}
            </h2>
            <ul className="font-man font-light text-[#1b1b1b] ">
              {list.map((li) => {
                return <li key={li} className='my-2'>{li}</li>;
              })}
            </ul>
          </div>
  )
}

export default FooterLinks