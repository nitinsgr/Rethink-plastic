import green from '../../public/images/greenry.jpg'
import Image from 'next/image'
import reduceImage from '../../public/images/reduce.jpg'
import InfoImage from '../../public/images/info.jpg'
import improveImage from '../../public/images/imrpove.jpg'

export const CampaignBanner = () => {
  return(
    <div>
    <div className="relative">
      <Image src={green} height={700} objectFit="cover" />
    </div>
    </div>
  )
}


export const CampaignHeader = () => {
  return(
    <div>
      <div className=' max-w-7xl mx-auto mb-20'>
          <h1 className='text-4xl md:text-7xl text-blue-900 font-bold font-Montserrat bg-white transform md:-translate-y-10 p-5 md:w-4/5 w-screen leading-snug '>It's high time to Rethink Plastic</h1>

          <p className=' md:w-3/5 text-2xl p-5 text-blue-900 md:pt-20 md:pb-20'>
          The Rethink Plastic alliance works with European decision-makers to design and deliver policies solutions for a future free from plastic pollution.
          We call for urgent action in 3 key areas: reduction, redesign and better management of plastics.
          </p>
      </div>
    </div>
  )
}

export const CampaignKey = () => {
  return(
    <div className=' bg-blue-900'>
      <div className='md:max-w-7xl mx-auto'>
        <h1 className='text-5xl bg-white font-bold text-blue-900 transform -translate-y-10 md:w-2/5 w-screen p-4'>Our Key asks</h1>
      </div>

      <div className='flex flex-col max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row'>
          <div className='mt-10 md:mb-20'>
            <h2 className='text-3xl text-white font-Montserrat font-bold p-5 w-4/5'>REDUCE PLASTIC PRODUCTION & CONSUMPTION</h2>
            <p className='text-1xl text-blue-400 p-5'>to cut plastic pollution at source</p>
            <p className='text-white pt-5 md:w-3/5 w-screen font-Montserrat p-5'>
            Let’s close the tap of plastic pollution by cutting the use of single-use items, overpackaging and top littered products, while eliminating microplastics and oxoplastics.

            </p>
            <p className='pt-5 text-white md:w-3/5 p-5 font-Montserrat'>Preventing plastic waste must be a priority, followed by reuse and recycling, with landfill or incineration as a last resort. With the right economic incentives and a strong legislative framework, we can reduce our plastic footprint and promote a responsible use of plastics.
            </p>
          </div>
          <div className='pt-10 invisible md:visible'>
            <Image src={reduceImage} />
          </div>
        </div>

        <div className='flex flex-col md:flex-row'>
          <div className='md:mt-10 mb-20'>
            <h2 className='text-3xl p-5 text-white font-Montserrat font-bold md:w-4/5'>REDESIGN PLASTIC PRODUCTS</h2>
            <p className='text-1xl p-5 text-blue-400'>to make the circular economy come true</p>
            <p className='text-white pt-5 md:w-4/5 p-5 font-Montserrat'>
            Let’s make plastics responsible by design: long-lasting, reusable, recyclable, toxic-free, and incorporating recycled content..

            </p>
            <p className='pt-5 text-white md:w-4/5 w-screen font-Montserrat p-5'>It’s about producers taking responsibility for the products they put on the market, eco-design being extended to all plastic products, chemical ingredients being traced, and harmful chemicals being phased out.
            </p>
          </div>
          <div className='pt-10 pl-32 invisible md:visible'>
            <Image src={InfoImage} />
          </div>
        </div> 

        <div className='flex flex-col md:flex-row'>
          <div className='md:mt-10 mb-20'>
            <h2 className='text-3xl text-white font-Montserrat font-bold w-4/5 p-5'>IMPROVE PLASTIC WASTE MANAGEMENT</h2>
            <p className='text-1xl text-blue-400 p-5'>to end landfill, incineration and leakages of plastics into the environment</p>
            <p className='text-white pt-5 md:w-3/5 p-5 font-Montserrat'>
            Let’s ensure a responsible, local management of plastic waste, by empowering producers, retailers and municipalities to achieve maximum collection and safe recycling, while avoiding leakages into the environment.

            </p>
            <p className='pt-5 text-white md:w-3/5 p-5 font-Montserrat'>The key? Improved collection, better monitoring, and economic incentives to support safe recycling and discourage the use of virgin plastic.
            </p>
          </div>
          <div className='pt-10 pl-24 invisible md:visible'>
            <Image src={improveImage} />
          </div>
        </div>
      </div>
    </div>
  )
}


export const CampaignNews = () => {
  return(
    <div>
      <div className=' max-w-7xl mx-auto'>
        <h2 className='text-4xl p-5 font-bold text-blue-900 pt-20'>Our News</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-16'>
          <div className='bg-white shadow-xl md:mt-20 mb-20'>
            <h2 className='text-3xl p-5 text-blue-900 font-bold bg-white'>New EU rules for methane must cover petrochemmicals and supply chain if it is to honour climate commitments, Environmental NGO urge</h2>
            <p className='p-5'>08/2/19</p>
            <p className='p-5'>
            In a bid to become a global leader on reducing methane emissions, the European Commission plans to table its proposal for a Methane Regulation this…
            </p>
          </div>

          <div className='bg-white shadow-xl md:mt-20 mb-20'>
            <h2 className='text-3xl p-5 text-blue-900 font-bold bg-white'>Delay in proposed microplastic restriction leading to irreversible pollution</h2>
            <p className='p-5'>09/6/19</p>
            <p className='p-5'>
            One additional year without a restriction on microplastics could see levels of pollution equivalent to 1.6 billion plastic bottles released into the environment, data from…
            </p>
          </div>

          <div className='bg-white shadow-xl md:mt-20 mb-20'>
            <h2 className='text-3xl p-5 text-blue-900 font-bold bg-white'>European Commission acknowledges the EU’s plastic waste trade crisis with proposal, but falls short of bringing appropriate response</h2>
            <p className='p-5'>10/4/20</p>
            <p className='p-5'>
            The European Commission’s proposal strengthens current rules on EU plastic waste exports, but environmental NGOs note significant loopholes and need for clarification.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}