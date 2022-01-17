import React, { useState } from "react";
import hamburger from '../../public/images/hamburger.png'
import rethink from '../../public/images/rethinkLogo.svg'
import Image from 'next/image'
import ActionComponent from "../Action/ActionComponent";
import Link from "next/link";

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
   
    <>
     <div className=" absolute z-20 m-10 bg-white w-3/4 items-center">
      <nav className="navbar">
      <div className="nav-logo">
      <Image src={rethink} />
      </div>

      <button className="nav-toggle-btn" onClick={handleClick}>
        <Image src={hamburger} alt="" role="button" draggable="false" />
      </button>

      <div className={click ? "nav-links active items-center" : "nav-links z-10 items-center"}>
        <ul className=" text-1xl">
          <li>
            <Link href={'/About'}>
            <a href="#">about us</a>
            </Link>
           
          </li>
          <li>
            <a href="#">campaign</a>
          </li>
          <li>
            <Link href={'/News'}>
            <a>news</a>
            </Link>
          </li>
          <li>
            <a href="#">take action</a>
          </li>
          <li>
            <a href="#">contact us</a>
          </li>
        </ul>
      </div>
    </nav>
    <HeaderContainer/>
    </div>
    </>
  )
}

export default Header



export const HeaderContainer = () => {
  return(
    <div className=' absolute  text-white pt-20'>
      <h1 className="text-3xl md:text-7xl md:w-2/4 bg-white text-blue-900 p-4 font-extrabold  font-Montserrat"> Towards a future free from plastic pollution</h1>
        <div className=' absolute z-20 text-white pt-10'>
          <p className="text-sm text-black md:text-2xl md:w-2/4  drop-shadow-xl md:text-white p-4 font-semibold font-Montserrat"> Rethink Plastic is an alliance of leading European NGOs, representing thousands of active groups, supporters and citizens in every EU Member State.
          We are part of the global Break Free From Plastic movement, consisting of over 2000 groups and millions of citizens worldwide.</p>
        </div>
  </div>
  )
}