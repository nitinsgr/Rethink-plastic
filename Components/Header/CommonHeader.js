import React, { useState } from "react";
import hamburger from '../../public/images/hamburger.png'
import rethink from '../../public/images/rethinkLogo.svg'
import Image from 'next/image'
import ActionComponent from "../Action/ActionComponent";
import Link from "next/link";

function CommonHeader() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className=" absolute z-20 md:m-10 bg-TreColor md:w-3/4 w-screen items-center flex justify-between">
    <nav className="navbar flex justify-between">
    <div className="nav-logo cursor-pointer invisible md:visible text-white font-Montserrat text-3xl">
      <Link href={'/'}>
      <h1>Say<span className="text-secColor font-bold">No</span>ToPlastic</h1>
      </Link>
  
    </div>

    <button className="nav-toggle-btn w-8 h-8 " onClick={handleClick}>
      <Image src={hamburger} alt="" role="button" draggable="false" />
    </button>

    <div className={click ? "nav-links active items-center text-white" : "nav-links z-10 items-center text-2xl text-white font-Montserrat"}>
      <ul className=" text-1xl">
        <li>
          <Link href={'/About'}>
          <a href="#">about us</a>
          </Link>
         
        </li>
        <li>
          <Link href={'/Campaign'}>
          <a href="#">campaign</a>
          </Link>
         
        </li>
        <li>
          <Link href={'/News'}>
          <a href="#">news</a>
          </Link>
         
        </li>
        <li>
          <Link href={'/TakeAction'}>
          <a href="#">take action</a>
          </Link>
        </li>
        <li>
          <Link href={'/Contact'}>
          <a href="#">contact us</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
   
  </div>
  )
}

export default CommonHeader
