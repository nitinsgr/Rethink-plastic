import ActionComponent from "../Components/Action/ActionComponent"
import { doc, getFirestore, setDoc } from "firebase/firestore"
import Firebase from "../Firebase";
import CommonHeader  from '../Components/Header/CommonHeader'
import ContactComponent from "../Components/Contact/ContactComponent";
import Footer from "../Components/Footer/Footer";

function Contact() {
  const saveTodo = (input , emailInput , messageInput ) => {
    const saveToFirebase = getFirestore();
    setDoc( doc(saveToFirebase, input, "Pledge"),{
      item: input,
      email : emailInput, 
      message : messageInput,
    })
  };
  return (
    <div>
      <CommonHeader />
      <ContactComponent saveTodo={saveTodo}/>
      <Footer/>
    </div>
  )
}

export default Contact
