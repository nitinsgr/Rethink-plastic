import personImage from '../../public/images/person1.jpg'
import communityImage from '../../public/images/community.jpg'
import secpersonImage from '../../public/images/person2.jpg'
import ClientEarth from '../../public/images/Client.png'
import thirdpersonImage from '../../public/images/person3.jpg'
import CielImage from '../../public/images/CIEL.png'
import Ecos from '../../public/images/Ecos.png'
import carbon from '../../public/images/carbonmarket.png'
import bellona from '../../public/images/bellona.png'
import greenPeace from '../../public/images/greenpeace.png'

import Image from 'next/image'


export const AboutJumbo = () => {
  return(
    <>
     <div className="relative pt-20 md:p-0">
      <Image src={communityImage} height={800} objectFit="cover" />
    </div>
    </>
  )
}

export const AboutContent = () => {
  return(
    <div className=" max-w-7xl mx-auto bg-whiteboard">
        <h1 className="text-3xl md:text-7xl font-Montserrat font-bold text-white bg-secColor transform md:-translate-y-1/2 md:w-2/3 p-5">Lets Say No To Plastic</h1>
        <div className="flex justify-evenly md:mt-10 flex-col md:flex-row">
         <div className="flex flex-col">
           <p className="text-1xl md:text-2xl p-5 font-Montserrat md:p-0 text-blue-900">SayNoToPlastic is an alliance of leading European NGOs, with thousands of active groups, supporters and citizens in every EU Member State.</p>
           <br/>
           <p className=" font-Montserrat text-1xl md:text-2xl p-5 md:p-0 text-blue-900">
           We bring together policy and technical expertise from a variety of relevant fields, and work with European policy-makers to design and deliver policy solutions for a future that is free from plastic pollution.
           </p>
           <br/>
           <p className=" font-Montserrat text-1xl md:p-0 p-5 md:text-2xl text-blue-900">
           We are part of the global Break Free From Plastic movement, along with over 2000 groups and millions of citizens worldwide.
           </p>
         </div>
          <div className=" bg-TreColor md:h-400 p-5">
            <h1 className=" text-2xl md:text-3xl text-white font-Montserrat items-center">80% of all plastic ever produced ended up in landfill or the environment</h1>
          </div>
        </div>
    </div>
  )
}

export const AboutCampaign = () => {
  return(
    <div className=" bg-TreColor mb-20 pb-20">
      <div className="max-w-7xl mx-auto mt-20">
        <h2 className=" bg-secColor p-5 md:h-24  font-bold text-white transform  md:-translate-y-1/4 w-screen md:w-3/6  text-4xl md:text-7xl font-Montserrat">Our Campaign</h2>
       <div className="flex flex-col">
       <p className="text-white text-1xl p-5 md:text-2xl font-Montserrat pt-20 pb-5">
        Plastic is one of the fastest growing pollutants in the world. The way we currently design, produce and consume plastics is both unsustainable and inefficient. European citizens are increasingly concerned about plastic pollution, and expect the European Union to show leadership and tackle the crisis at source. Urgent measures are needed in 3 key areas: reduction of plastic production and consumption, better design of plastic products to be safe and sustainable, and better management of plastic waste.
        </p>
       </div>
       <div className=" grid grid-cols-1 md:grid-cols-3 pt-10 font-Montserrat gap-10">
            <div className=" bg-blue-300 p-5 flex flex-col">
              <h2 className=" bg-white text-blue-900 text-1xl w-2/5 p-2">Campaign</h2>
              <h3 className=" text-blue-900 font-bold text-2xl pt-5">Redesign Plastic Products</h3>
              <p className="text-1xl text-blue-900 pt-5">By making plastics responsible by design: long-lasting, reusable, recyclable, toxic-free, and incorporating recycled content, to make the circular economy come true.</p>
            </div>
            <div className=" bg-blue-300 p-5 flex flex-col">
              <h2 className=" bg-whiteboard text-blue-900 text-1xl w-2/5 p-2">Campaign</h2>
              <h3 className=" text-blue-900 font-bold text-2xl pt-5">Reduce plastic product consumption</h3>
              <p className="text-1xl text-blue-900 pt-5">By cutting single-use items, overpackaging and top littered products, while phasing out microplastics and oxoplastics, to close the tap of plastic pollution.</p>
            </div>
            <div className=" bg-blue-300 md:h-300 p-5 flex flex-col">
              <h2 className=" bg-white text-blue-900 text-1xl w-2/5 p-2">Campaign</h2>
              <h3 className=" text-blue-900 font-bold text-2xl pt-5">Improve management of plastic waste</h3>
              <p className="text-1xl text-blue-900 pt-5">By empowering producers, retailers and cities to maximise collection and recycling, to stop landfilling, incineration, and leakages into the environment.</p>
            </div>
          </div> 
      </div>
    </div>
  )
}


export const PeopleContainer = () => {
  return(
    <div>
      <div className=" max-w-7xl mx-auto bg-whiteboard">
        <h2 className="text-5xl p-5 font-bold font-Montserrat text-blue-900">Our People</h2>
        <div className="flex md:pt-20 pt-10 flex-col md:flex-row">
          <div className="flex flex-col md:space-y-5">
            <h3 className=" text-2xl p-5 font-bold text-blue-900">Our coordination team</h3>
            <div className="flex md:space-x-10 pt-10">
              <Image src={personImage} height={100} width={100} className=" rounded-full invisible md:visible"/>
             <div className="flex flex-col">
             <h2 className="text-2xl font-Montserrat text-blue-900 font-bold">Mark Paul</h2>
              <h3 className=" w-4/5">Coordinator Plastic Alliance and European coordinator of Break Free From Plastic</h3>
             </div> 
            </div>
            <div className="flex md:space-x-10 pt-10">
              <Image src={secpersonImage} height={100} width={100} objectFit="cover" className=" rounded-full invisible md:visible"/>
             <div className="flex flex-col">
             <h2 className="text-2xl font-Montserrat text-blue-900 font-bold">Gaëlle Haut</h2>
              <h3 className=" w-4/5">Coordinator Plastic Alliance and European coordinator of Break Free From Plastic</h3>
             </div> 
            </div>
            <div className="flex md:space-x-10 pt-10">
              <Image src={thirdpersonImage} height={100} width={100} className=" rounded-full invisible md:visible"/>
             <div className="flex flex-col">
             <h2 className="text-2xl font-Montserrat text-blue-900 font-bold">Marphis John</h2>
              <h3 className=" w-4/5">Coordinator Plastic Alliance and European coordinator of Break Free From Plastic</h3>
             </div> 
            </div>
          </div>
           <div className=" shadow-2xl md:w-3/5 w-screen p-10">
            <h2 className=" text-2xl font-Montserrat font-bold text-blue-900">Our compaigners and policy experts</h2>
            <div className=" font-Montserrat pt-10">
              <p className=" font-bold text-blue-900">Christina Dixon</p>
              <p>Senior Ocean Campaigner - EIA</p>
              <hr/>
            </div>
            <div className=" font-Montserrat pt-10">
              <p className=" font-bold text-blue-900">Elise Vitali</p>
              <p>Project Officer on Chemicals - EEB</p>
              <hr/>
            </div>
            <div className=" font-Montserrat pt-10">
              <p className=" font-bold text-blue-900">Frédérique Mongodin</p>
              <p>Senior Policy Officer, Marine Pollution - Seas at Risk
                </p>
              <hr/>
            </div>
            <div className=" font-Montserrat pt-10">
              <p className=" font-bold text-blue-900">Gaëlle Haut</p>
              <p>EU affairs project manager - SFE</p>
              <hr/>
            </div>
            <div className=" font-Montserrat pt-10">
              <p className=" font-bold text-blue-900">Giulia Carlini</p>
              <p>Staff Attorney, Environmental Health Program - CIEL</p>
              <hr/>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export const Alliance = () =>{
  return(
    <div className="mt-20">
      <div className=" max-w-7xl mx-auto flex flex-col md:flex-row">
        <div>
          <h1 className=" font-Montserrat bg-secColor transform md:translate-x-20 md:translate-y-10 text-4xl md:text-6x font-bold text-white p-5 shadow-xl ">The alliance</h1>
        </div>
        <div className=" bg-gray-100 md:w-4/5 w-screen pt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-20 ">
            <Image src={ClientEarth} objectFit="contain" />
            <Image src={CielImage} objectFit="contain" />
            <Image src={Ecos} />
          </div>
        </div>
      </div>
    </div>
  )
}


export const Associates = () => {
  return(
    <div>
      <div className=" max-w-7xl mx-auto md:mt-20 md:mb-20">
        <h2 className="text-4xl p-5 font-bold font-Montserrat text-blue-900">Our Associates </h2>
        <div className="flex justify-evenly flex-col p-10">
          <Image src={carbon} width={300} height={300} objectFit="contain" />
          <Image src={bellona} width={300} height={300} objectFit="contain" />
        </div>
        <div className=" md:bg-TreColor relative pb-20">
            <h1 className=" bg-secColor text-2xl md:w-3/5 w-screen transform md:-translate-x-20 font-Montserrat font-bold text-white md:absolute md:m-10 p-5">Were part of the #breakfreefromplastic movement</h1>
            <div className="flex md:pt-36 md:pl-20 md:pr-20 md:space-x-5 flex-col">
              <p className="text-1xl p-5 text-white font-Montserrat md:w-2/4 w-screen  ">#breakfreefromplastic is a global movement envisioning a future free from plastic pollution. Since its launch in September 2016, over 2000 groups from across the world have joined the movement to demand massive reductions in single-use plastics and to push for lasting solutions to the plastic pollution crisis. These organizations share the common values of environmental protection and social justice, which guide their work at the community level and represent a global, unified vision.</p>
              <Image src={communityImage} objectFit="cover" width={500} height={400} className=' invisible md:visible' />
            </div>
           
        </div>
      </div>
    </div>
  )
}