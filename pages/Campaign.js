import { Newsletter } from "."
import { CampaignBanner, CampaignHeader, CampaignKey, CampaignNews } from "../Components/Campaign/CampaignComponent"
import Footer from "../Components/Footer/Footer"
import CommonHeader from "../Components/Header/CommonHeader"

function Campaign() {
  return (
    <div>
      <CommonHeader />
      <CampaignBanner/>
      <CampaignHeader/>
       <CampaignKey/>
      <CampaignNews/>
      <Newsletter/>
      {/* <Footer/> */}
    </div>
  )
}

export default Campaign
