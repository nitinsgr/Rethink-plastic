import Image from "next/image"
import CommonHeader from "../Components/Header/CommonHeader"
import Header from "../Components/Header/Header"
import { Newsletter } from "."
import Footer from "../Components/Footer/Footer"
import { AboutCampaign, AboutContent, AboutJumbo, Alliance, Associates, PeopleContainer } from "../Components/About/AboutComponent"

function About() {
  return (
    <div>
      <CommonHeader/>
     <AboutJumbo/>
     <AboutContent/>
     <AboutCampaign/>
      <PeopleContainer/>
     <Alliance/>
      <Associates/>
     <Newsletter/>
     {/* <Footer/> */}

    </div>
  )
}

export default About



