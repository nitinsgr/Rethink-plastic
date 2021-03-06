import Head from 'next/head'
import Image from 'next/image'
import Header from '../Components/Header/Header'
import styles from '../styles/Home.module.css'
import plastic from '../public/images/plastic.jpg'
import ActionComponent from '../Components/Action/ActionComponent'
import Firebase from '../Firebase'
import hearImage from '../public/images/hear.png'
import decomposeImage from '../public/images/decompose.jpg'
import dumpingImage from '../public/images/dumping.jpg'
import reuseImage from '../public/images/rename.jpg'
import Footer from '../Components/Footer/Footer'


export default function Home() {

  const func = () => {
    return (
      <div >
         {" you're free "}
        </div>
    )}
  
  return (
   <>
  <Header/>
   <BannerContaner/>
  
   </>
  )
}


export const BannerContaner = () =>{
  const title = "hello";
  
  return(
    <>
     <div className='relative h-1000 md:h-800 '>
      <Image src={plastic} layout='fill' objectFit='cover' />
      </div>
      <div className=' absolute w-full'>
        <div className='grid md:grid-cols-3 grid-cols-1'>
        <div className=' bg-secColor'>
          <div className='flex flex-col m-5'>
            <h3 className='p-4 bg-white w-32 m-5 text-center font-Montserrat'>POLICY</h3>
            <h2  className='p-4 text-white text-4xl w-3/4 font-Montserrat'>A global treaty on plastics?</h2>
            <p className=' font-Montserrat p-4 text-white text-1xl'>If we want to tackle the global plastic crisis, we have to go global to tackle the full plastic lifecycle.</p>
            <button className='p-4 text-white border border-white mt-5 ml-5 text-1xl font-Montserrat'>Read more</button>
          </div>
        </div>
        <div className=' bg-color2'>
          <div className='flex flex-col font-Montserrat m-5'>
            <h3  className='p-4 bg-white w-32 m-5 text-center'>PRESS</h3>
            <h2 className='p-4 text-white text-2xl md:text-4xl font-Montserrat  w-3/4'>Illegal plastic waste dumping</h2>
            <p className='p-4 text-1xl text-white'>Italian company caught illegally dumping plastic and other municipal waste in Tunisia, read our press release.</p>
            <button className='p-4 border border-white ml-5 text-white'>Read more</button>
          </div>
        </div>
        <div className=' bg-TreColor '>
          <div className='flex flex-col font-Montserrat m-5'>
            <h3 className=' bg-blue-900 text-white p-4 w-2/5 m-5'>PEOPLE POWER</h3>
            <h2 className='text-2xl md:text-4xl p-4 font-Montserrat text-white w-3/4'>#WeChooseReuse will you?</h2>
            <p className='p-4 text-white text-1xl'>It???s time to replace single-use plastic with reusable systems. Join the Reuse Revolution!</p>
            <button className='p-4  text-white bg-blue-900 m-5'>Take action</button>
          </div>
        </div>
        </div>
         <div className=' relative'>
          <CenterSection/>
      </div>
       <div className='relative'>
        <JumboTron/>
      </div>
       <div  className='relative'>
        <CardSection/>
      </div> 
        <div className='relative'>
          <Newsletter/>
          <Footer title={title}/>
          </div>   
      </div>
    </>
    
  )
}


export const CenterSection = () =>{
  return(
    <div className=' max-w-7xl mx-auto md:mt-32 mt-10 mb-10'>
      <div  className=' flex flex-col md:flex-row'>
        <div className='flex flex-col bg-white w-screen md:w-3/6 p-10 md:p-20 shadow-xl'>
          <h2 className='text-3xl font-Montserrat font-bold text-blue-900 w-5/6 '>How to fix the plastic waste trade?</h2>
          <p className='text-1xl md:text-2xl  font-Montserrat '>Ahead of the Waste Shipment Regulation Revision, we outlined key recommendations to ensure we achieve a genuinely circular economy</p>
          <button className=' bg-secColor text-white p-4 w-3/6 mt-5'>Read more</button>
        </div>
         <div className=' md:w-5/6 h-300 md:h-500 shadow-xl relative'>
          <Image src={dumpingImage} layout='fill' alt=''/>
        </div> 
      </div>
    </div>
  )
}


export const JumboTron = () => {
  return(
    <div className=' mx-auto flex flex-col items-center bg-TreColor md:p-20 p-10'>  
      <h2 className='text-3xl md:w-5/6 leading-snug font-Montserrat font-bold md:pt-32 pt-20 text-white text-center'>Lets put a stop to intentionally-added microplastic</h2>
      <p className='text-1xl md:w-3/6 pt-10 text-white text-center font-Montserrat'>We need EU decision-makers to severely restrict the intentional use of microplastics. Recent recommendations provide loopholes that could favour unproven biodegradable plastics and give some sectors up to 8 years to take action</p>
      <button className='md:p-4 md:m-4 border z-20 mt-10  border-white text-white p-4 font-Montserrat '>Read more</button>
    </div>
  )
}


export const CardSection = () => {
  return(
    <div className=' max-w-7xl mx-auto items-center mb-20'>
      <div className='flex md:space-x-16 shadow-xl md:ml-20 md:mr-20 md:mt-20 md:p-10 flex-col md:flex-row'>
        <div className='p-5'>
          <Image src={hearImage} width={400} height={400} alt='' />
        </div>
        <div className=' md:w-3/6 w-screen p-10'>
          <h2 className='text-3xl text-blue-900 font-Montserrat font-bold'>A global treaty on plastics?</h2>
          <p className='pt-10 font-Montserrat text-1xl text-blue-900'>The complexity of our plastic crisis stems from the fact that plastic is part of a globally connected value chain. We need a sweeping transboundary approach that tackles plastic at every stage of its lifecycle.</p>
          <button className='p-4 border border-blue-900 text-blue-900 mt-20 '>Read more</button>
        </div>
      </div>
      <div className='flex space-x-16 shadow-xl md:ml-20 md:mr-20 md:mt-20 md:p-10 flex-col md:flex-row '>
        <div className=' md:w-3/6 w-screen p-10'>
          <h2 className='text-3xl text-blue-900 font-Montserrat font-bold'>Time to tackle plastic pellets</h2>
          <p className='pt-10 font-Montserrat text-1xl text-blue-900'>Our latest position paper provides key recommendations for strengthening EU Chemicals legislation to reduce plastic pellet pollution - the second largest source of microplastic pollution!.</p>
          <button className='p-4 border border-blue-900 text-blue-900 mt-20 '>Read more</button>
        </div>
        <div className=''>
          <Image src={decomposeImage} width={500} height={500} alt='' />
        </div>
      </div>
      <div className='flex md:space-x-16 shadow-xl md:ml-20 md:mr-20 md:mt-20'>
        <div className=' relative h-500 w-full hidden md:block'>
          <Image src={reuseImage} layout='fill' objectFit='cover' alt=''  />
        </div>
      </div>
    </div>
  )
}


export const Newsletter = () => {
  return(
    <div className=' bg-TreColor pb-10 pt-5 p-4'>
      <div className=' max-w-7xl mx-auto pt-10'>
      <h2 className='text-2xl text-white font-bold'>Sign up to our newsletter</h2>
      <div className='flex md:mt-5 md:space-x-10 flex-col md:flex-row m-5'>
        <input className=' md:w-4/12 p-2 m-2' placeholder='email-address'/>
        <input className=' md:w-4/12 p-2 m-2' placeholder='First name'/>
        <input className='md:w-4/12 p-2 m-2' placeholder='Last namew'/>
        <button className='text-white bg-secColor p-2'>SUBSCRIBE</button>
      </div>
    </div>
    </div>
    
  )
}

