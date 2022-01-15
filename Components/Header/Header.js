import React, { useState } from "react";
import hamburger from '../../public/images/hamburger.png'
import rethink from '../../public/images/rethinkLogo.svg'
import Image from 'next/image'
import ActionComponent from "../Action/ActionComponent";

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
   
    <>
     <div className=" absolute z-20 m-10 bg-white w-3/4">
      <nav className="navbar">
      <div className="nav-logo">
      <Image src={rethink} />
      </div>

      <button className="nav-toggle-btn" onClick={handleClick}>
        <Image src={hamburger} alt="" role="button" draggable="false" />
      </button>

      <div className={click ? "nav-links active" : "nav-links"}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    <div className=' absolute z-20 text-white pt-20'>
      <h1 className="text-7xl w-2/4 bg-white text-blue-900 p-4 font-bold"> Towards a future free from plastic pollution</h1>
    </div>
    
    </div>
 
     
  
    </>
  )
}

export default Header
