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
    <div className=" absolute z-20 m-10 bg-white w-3/4 items-center flex justify-between">
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
          <a href="#">news</a>
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
   
  </div>
  )
}

export default CommonHeader
