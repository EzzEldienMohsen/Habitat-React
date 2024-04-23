import {  AboutHero, LandingHero } from "../subComponent";

const SecondHeader = () => {
  return (
 <div className="bg-[white] flex flex-col">
    {/* Landing Hero */}
    <LandingHero/>
    <AboutHero/>
    </div>  )
}

export default SecondHeader