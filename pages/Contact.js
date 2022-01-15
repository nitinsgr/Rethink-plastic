import ActionComponent from "../Components/Action/ActionComponent"
import { doc, getFirestore, setDoc } from "firebase/firestore"
import Firebase from "../Firebase";

function Contact() {
  const saveTodo = (input) => {
    const saveToFirebase = getFirestore();
    setDoc( doc(saveToFirebase, input, "LA"),{
      item: input,
    })
  };
  return (
    <div>
      <ActionComponent saveTodo={saveTodo}/>
    </div>
  )
}

export default Contact
