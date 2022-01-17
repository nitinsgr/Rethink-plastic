import { Newsletter } from "."
import Footer from "../Components/Footer/Footer"
import CommonHeader from "../Components/Header/CommonHeader"
import { NewsBanner, NewsHeader } from "../Components/News/NewsComponents"

function News() {
  return (
    <div>
      <CommonHeader/>
      <NewsBanner/>
      <NewsHeader/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default News
