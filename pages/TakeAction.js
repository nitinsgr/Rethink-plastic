import { Newsletter } from "."
import { ActionBanner, ActionCards, ActionHeader } from "../Components/Action/ActionComponent"
import Footer from "../Components/Footer/Footer"
import CommonHeader from "../Components/Header/CommonHeader"

function TakeAction() {
  return (
    <div>
      <CommonHeader/>
      <ActionBanner />
      <ActionHeader/>
      <ActionCards/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default TakeAction
