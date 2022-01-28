import React, { useRef, useState } from 'react';
import Emailkey from '../../Emailkey';
import reduce from '../../public/images/reducehh.jpg'
import Image from 'next/image';
import { Newsletter } from '../../pages';

import emailjs from '@emailjs/browser';
import Footer from '../Footer/Footer';

function ContactComponent({saveTodo}) {
  const [input, setInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const form = useRef();
  const userId = ""

  const handleSubmit = (e) => {
    e.preventDefault();
    saveTodo(input, emailInput, messageInput);
    emailjs.sendForm('service_7zyddwk','template_c6x2svb', form.current , "user_dekNN47er8nWCfWycV7S3").then((input)=> {
      console.log(input.text);
    })
    setInput("");
    setEmailInput("");
    setMessageInput("");
  };
  return(
    <div>
      <div className="relative">
      <Image src={reduce} height={2300} objectFit="cover" alt='' />
    </div>
    <ContactForm handleSubmit={handleSubmit} form={form} input={input} emailInput={emailInput} setInput={setInput} setEmailInput={setEmailInput} setMessageInput={setMessageInput} messageInput={messageInput}/>
    <Newsletter />
    {/* <Footer/> */}
    </div>
  )
}

export default ContactComponent;

export const ContactForm = ({handleSubmit, form, emailInput, input ,setInput , setEmailInput, messageInput, setMessageInput}) => {
  return(
    <div>
      <div className=' max-w-7xl mx-auto'>
        <h1 className='text-4xl md:text-7xl font-bold text-white font-Montserrat bg-secColor transform md:-translate-y-10  w-2/5 p-4'>Contact Us</h1>
        <div className=' shadow-2xl md:pl-20 md:pr-20 md:mt-20 md:pt-20 md:pb-20 md:mb-20 p-5'>   
        <form onSubmit={handleSubmit} ref={form}>
          <div className="input flex flex-col">
            <input
            className=' md:w-4/5 p-3 md:p-4 border-2 border-blue-900 rounded-xl'
              type="text"
              required
              placeholder="Full Name"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <input
            className=' md:w-4/5 border-2 border-blue-900 rounded-xl mt-10 p-3 md:p-4'
              type="text"
              required
              placeholder='Email Address'
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value) }
            />
              <input
            className=' md:w-4/5 border-2 border-blue-900 rounded-xl mt-10 p-10'
              type="text"
              required
              placeholder='Message'
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value) }
            />
               <button className='md:w-2/5 text-2xl p-4 bg-TreColor font-Montserrat text-white mt-10' type="submit">Take Pledge</button>
          </div>
        </form> 
        </div>
      </div>
    </div>
  )
}