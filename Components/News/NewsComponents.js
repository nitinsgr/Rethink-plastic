import BeachImage from '../../public/images/beach.jpg'
import Image from 'next/image'

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