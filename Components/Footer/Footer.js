import Image from "next/image"
import logoImage from '../../public/images/rethinkLogo.svg'

function Footer({title}) {
  return (
    <div className="p-2 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between mt-5">
        <h1 className="text-TreColor text-2xl font-bold">Say<span className="text-secColor font-bold">No</span>ToPlastic</h1>
          <div className="flex md:flex-row md:space-x-5 flex-col ">
          <h2>Twitter</h2>
          <h2>Youtube</h2>
         
        </div>
      </div>
      <FooterLinks/>
    </div>
  )
}

export default Footer


export const FooterLinks = () => {
  return(
    <div className="grid grid-cols-1 md:grid-cols-5  gap-10 font-Montserrat mt-10">
      <p className="pt-5 text-blue-900">SayNoToPlastic Plastic is an alliance of leading European NGOs, representing thousands of active groups, supporters and citizens in every EU Member State.We are part of the global Break Free From Plastic movement, consisting of over 1900 NGOs and millions of citizens worldwide</p>
     <div className="item-center pt-5">
        <ul>
          <li className="text-2xl font-bold">PART OF</li>
          <li className="text-2xl  text-blue-900 font-black">#break free from plastic</li>
        </ul>
     </div>
     <div>
       <ul className="pt-5 space-y-2 text-1xl">
         <li>About us</li>
         <li>News</li>
         <li>Take action</li>
       </ul>
     </div>
     <div>
       <ul className="pt-5 space-y-2 text-1xl">
         <li>Campaign</li>
         <li>Contact us</li>
       </ul>
     </div>
     <div className="pt-5 flex flex-col space-y-3">
       <h3 className=" text-blue-900 text-sm font-bold">SayNoToPlastic Plastic alliance</h3>
       <p>123, York District</p>
       <p>+44 (2)232 2455</p>
     </div>
    </div>
  )
}