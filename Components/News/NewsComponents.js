import BeachImage from '../../public/images/beach.jpg'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowCircleRightIcon, ArrowCircleDownIcon, BeakerIcon } from '@heroicons/react/solid'

export const NewsBanner = () => {
  return(
    <div>
    <div className="relative">
      <Image src={BeachImage} height={600} objectFit="cover" />
    </div>
    </div>
  )
}


export const NewsHeader = () => {
  return(
    <div>
      <div className=' max-w-7xl mx-auto'>
        <h1 className=' text-6xl text-blue-900 font-bold font-Montserrat bg-white transform -translate-y-10 w-4/5 p-10'>News EU rules for methane must cover petrochemicals and supply chain if it is to honour climate commitments environments, environmental NGO urge</h1>
      </div>
      <NewsHeading/>
    </div>
  )
}

export const NewsHeading = () => {
  return(
    <div className=' max-w-7xl mx-auto'>
      <h4 className='text-3xl w-4/5 p-10 font-Montserrat text-blue-900'>In a bid to become a global leader on reducing methane emissions, the European Commission plans to table its proposal for a Methane Regulation this 14 December – but it’s expected that it will not include full coverage of supply chains, nor inclusion of petrochemicals, as the European Parliament had asked for.</h4>
      <p className='p-10 w-11/12 font-Montserrat'>
      In a bid to become a global leader on reducing methane emissions, the European Commission plans to table its proposal for a Methane Regulation this 14 December – but it’s expected that it will not include full coverage of supply chains, nor inclusion of petrochemicals, as the European Parliament had asked for. With 75-90% of all EU methane emissions occurring from imported fossil fuels, these leading emitters and their supply chain need to be included if the regulation is to be robust, environmental NGOs urge.
      </p>
      <p className='p-10 w-11/12 font-Montserrat'>
      Plastics, which are produced from petrochemicals such as crude oil and gas, remain one of the most greenhouse gas-intensive industrial processes, making them key drivers of climate change and pollution.
      </p>
      <p className='p-10 w-11/12 font-Montserrat'>
      The Rethink Plastic alliance and Break Free From Plastic movement highlight that continued reliance on fossil fuels to produce plastic in Europe, including fracked gas produced in the United States, threatens to undermine emissions reductions objectives while exacerbating plastic pollution. The primary known users of such US fracked gas in Europe are global chemicals companies Borealis and INEOS, who seek to build the first new plastics plant in Europe in 20 years. 
      </p>
    </div>
  )
}

export const ModalContainer = ({toggleModal, isOpen, toggleSecModal , NewsTwo , isThird, toggleThirdModal }) => {
  return(
    <div className='pt-10 pb-10'>
      <div className=' max-w-7xl mx-auto p-5 bg-white shadow-xl'>
       <div className='flex transform duration-500 ease-in-out transition-all pt-5'>
        {isOpen ? <ArrowCircleDownIcon className="w-8 h-8"/> : <ArrowCircleRightIcon className='w-8 h-8'/>}
        <button onClick={toggleModal} className='text-3xl font-Montserrat font-bold text-blue-900'>New EU rules for methane</button>
       </div>
       <div className='flex transform duration-500 ease-in-out transition-all pt-5 mt-5'>
        {NewsTwo? <ArrowCircleDownIcon className="w-8 h-8"/> : <ArrowCircleRightIcon className='w-8 h-8'/>}
        <button onClick={toggleSecModal} className='text-3xl font-Montserrat font-bold text-blue-900'>Delay in proposed microplastic restriction leading to irreservable pollution</button>
       </div>
       <div className='flex transform duration-500 ease-in-out transition-all pt-5 mt-5'>
        {isThird? <ArrowCircleDownIcon className="w-8 h-8"/> : <ArrowCircleRightIcon className='w-8 h-8'/>}
        <button onClick={toggleThirdModal} className='text-3xl font-Montserrat font-bold text-blue-900'>European Commission acknowledges the Eu's plastic waste trade crisis.
        </button>
       </div>
        {isOpen ? <ModalBox/>  : NewsTwo ? <ModalBoxTwo/> : isThird ? <ModalBoxThree/> : null}  
      </div>
    </div>
  )
}



export const ModalBox = () => {
  return(
    <div className=' bg-blue-900 text-white font-Montserrat p-4'>
      <p>In a bid to become a global leader on reducing methane emissions, the European Commission plans to table its proposal for a Methane Regulation this 14 December – but it’s expected that it will not include full coverage of supply chains, nor inclusion of petrochemicals, as the European Parliament had asked for. With 75-90% of all EU methane emissions occurring from imported fossil fuels, these leading emitters and their supply chain need to be included if the regulation is to be robust, environmental NGOs urge.</p>
      <button className='p-4 border border-white mt-10 transform hover:bg-white hover:text-blue-900'>Read More</button>
    </div>

  )
}

export const ModalBoxTwo = () => {
  return(
    <div className=' bg-blue-900 text-white font-Montserrat p-4'>
      <p>One additional year without a restriction on microplastics could see levels of pollution equivalent to 1.6 billion plastic bottles released into the environment, data from Client Earth and the European Environmental Bureau has shown.</p>
      <button className='p-4 border border-white mt-10 transform hover:bg-white hover:text-blue-900'>Read More</button>
    </div>

  )
}

export const ModalBoxThree = () => {
  return(
    <div className=' bg-blue-900 text-white font-Montserrat p-4'>
    <p>Today the European Commission tabled its long anticipated proposal of the EU Waste Shipment Regulation, with an aim “to ensure that the EU does not export its waste challenges to third countries”. However despite some interesting provisions, current suggestions fail to adequately address the scale and impact of waste trade. </p>
    <button className='p-4 border border-white mt-10 transform hover:bg-white hover:text-blue-900'>Read More</button>
  </div>
  )
}