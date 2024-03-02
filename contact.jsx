import React from 'react'
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import {useContext, useRef , useState } from 'react'
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";
const Contact = () => {
  const formRef=useRef()
  const [done, setDone] = useState(false)
  const handleSubmit=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_nntl1t9', 'template_p4oqg2w', formRef.current, 'user_oWJEK7K9LTzOtnPDssuT5')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <>
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wraper">
            <div className="c-left">
               <h1 className="c-title">Let's Contact me</h1>
               <div className="c-info">
                   <div className="c-info-item">
                       <img src={Phone} className="c-icon" />
                       +9234567899
                   </div>
                   <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              abc@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              pune maharashtra 412211
            </div>
               </div>
            </div>
            <div className="c-right">
            <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input  type="text" placeholder='Name' name='user-name' />
            <input  type="text" placeholder='Subject' subject='user-subject' />
            <input  type="text" placeholder='Email' email='user-email' />
            <textarea  rows="5" placeholder="Message" name="message"/>
            <button>Submit</button>
            {done && "Thank you,  I will approach you soon..."}
          </form>
          
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Contact