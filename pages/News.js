import { useState } from "react"
import { Newsletter } from "."
import Footer from "../Components/Footer/Footer"
import CommonHeader from "../Components/Header/CommonHeader"
import { ModalContainer, NewsBanner, NewsHeader } from "../Components/News/NewsComponents"


function News() {
  const [isOpen, setIsOpen] = useState(false);
  const [NewsTwo, setNewsTwo] = useState(false);
  const [isThird, setIsThird] = useState(false);

  function toggleModal(){
    setIsOpen(!isOpen);
  }

  function toggleSecModal(){
    setNewsTwo(!NewsTwo);
  }

  function toggleThirdModal(){
    setIsThird(!isThird);
  }

  return (
    <div>
      <CommonHeader/>
      <NewsBanner/>
      <NewsHeader/>
       <ModalContainer toggleModal={toggleModal} isOpen={isOpen} NewsTwo={NewsTwo} toggleSecModal={toggleSecModal} toggleThirdModal={toggleThirdModal} isThird={isThird}/>
      <Newsletter/>
       <Footer/>
    </div>
  )
}

export default News
