import React from 'react'
import { logo } from '../assets';

const FooterFirstColumn = () => {
     const [email,setEmail] = React.useState({email:""})
  const handleChange = (e)=>setEmail({...email,[e.target.name]:e.target.value});
  const handleSubmit = (e)=>{e.preventDefault();console.log(email)}
  return (
    <div className="flex flex-col items-start justify-start gap-4 md:gap-6 lg:w-2/5">
      <img src={logo} alt="image" />
      <p className="font-man text-md md:text-lg lg:text-xl">
        Join our newsletter for deals, new drops and inspiration sent straight
        to your inbox.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row justify-start items-start md:justify-evenly md:items-center"
      >
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email.email}
          placeholder="Enter your email"
          className=" shadow-xl px-2 py-1"
        />
        <button
          type="submit"
          className="btn bg-transparent btn-ghost capitalize font-man font-light text-md md:tex-lg"
        >
          stay updated
        </button>
      </form>
    </div>
  );
}

export default FooterFirstColumn