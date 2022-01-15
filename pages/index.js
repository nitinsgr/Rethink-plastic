import Head from 'next/head'
import Image from 'next/image'
import Header from '../Components/Header/Header'
import styles from '../styles/Home.module.css'
import plastic from '../public/images/plastic.jpg'
import ActionComponent from '../Components/Action/ActionComponent'
import Firebase from '../Firebase'


export default function Home() {
  return (
   <>
   <div>
   <Header/>
   <BannerContaner/>
   </div>
   </>
  )
}


export const BannerContaner = () =>{
  
  return(
    <>
     <div className=' relative h-96 '>
      <Image src={plastic} height={900} objectFit='cover' />
      
      </div>
    </>
   
    
  )
}