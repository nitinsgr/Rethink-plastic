import waterImage from '../../public/images/water.jpg'
import Image from 'next/image'
import plastic from '../../public/images/plasticproduct.jpg'
import suffo from '../../public/images/suff.jpg'

export const ActionBanner = () => {
  return(
    <div>
       <div className="relative">
      <Image src={waterImage} height={600} objectFit="cover" />
    </div>
    </div>
  )
}


export const ActionHeader = () =>{
  return(
    <div>
      <div className=' max-w-7xl mx-auto font-Montserrat'>
        <h1 className='text-7xl text-blue-900 font-bold font-Montserrat bg-white w-6/12 transform -translate-y-10 pl-5'>Take Action</h1>

        <h2 className='text-3xl text-blue-900 w-7/12'>When citizens stand together, they have the power to change EU policy and achieve a future free from plastic pollution.</h2>

        <p className='pt-20 w-7/12 text-1xl'>
        The Rethink Plastic alliance act as the EU policy arm of the Break Free From Plastic movement, fighting out the technical policy details at the European level. We recognise that without fundamental legislative change, we cannot ensure a future free from plastic pollution. 
        </p>

        <p className='pt-20 w-7/12 text-1xl'>
        Yet, to ensure success at the policy level, we need pressure from individuals and groups to remind decision makers that ambition is necessary, non-negotiable and for the benefit of people and planet. To support our call, here are some key ways you can take action today:
        </p>
      </div>
    </div>
  )
}


export const ActionCards = () => {
  return(
    <div className=' max-w-7xl mx-auto items-center mb-20'>
    <div className='flex space-x-16 shadow-xl ml-20 mr-20 mt-20 pt-20 p-10
    '>
      <div className=''>
        <Image src={plastic}  width={500} height={500}  />
      </div>
      <div className=' w-3/6'>
        <h2 className='text-4xl text-blue-900 font-Montserrat font-bold'>Join us in the call to ending EU #WasteTrade</h2>
        <p className='pt-10 font-Montserrat text-2xl text-blue-900'>Join Break Free From Plastic, the Rethink Plastic alliance, the Environmental Investigation Agency, leading NGOs, citizens, and representatives of the European Commission and the European Parliament in the call for a full ban on EU waste trade exports.</p>
        <button className='p-4 border border-blue-900 text-blue-900 mt-20 '>Join Us On the March</button>
      </div>
    </div>
    <div className='flex space-x-16 shadow-xl ml-20 mr-20 mt-20 p-10'>
      <div className=' w-3/6'>
        <h2 className='text-4xl text-blue-900 font-Montserrat font-bold'>#WECHOOSEREUSE Commitment</h2>
        <p className='pt-10 font-Montserrat text-2xl text-blue-900'>It’s time to replace single-use plastic with reusable systems. Are you an individual, a decision maker, or do you represent a business committed to reuse? Join the Reuse Revolution!</p>
        <button className='p-4 border border-blue-900 text-blue-900 mt-20 '>Take Pledge</button>
      </div>
      <div className=''>
       <Image src={suffo} width={500} height={500} objectFit='cover' />
      </div>
    </div>
  </div>
  )
}