import React from 'react'
import CallbackForm from './CallbackForm'
import { AiOutlineInstagram,
         AiOutlineTwitter,
         AiFillYoutube,
         AiOutlineMail } from "react-icons/ai"

import { FiFacebook } from "react-icons/fi"
import { FaLocationDot } from "react-icons/fa6"
import { LuPhoneIncoming } from "react-icons/Lu"
import "./layout/style.css"

function Footer() {
  const currentYear = new Date().getFullYear();


  return (
    <>
    <footer id='contact' className="footer bg-dark">
        
            <div className="box">
                <img src='../../../public/image/logo.png' className='logo'/>
            </div>
            <div className="box box2">
                <h1>Request a Free Call Back</h1>
                <CallbackForm/>
                <p>&copy; {currentYear} Your Company Name. All Rights Reserved.</p>
            </div>
            <div className="box box3">
              <div>
                <h3>GET IN TOUCH</h3>
                <p><FaLocationDot/> <span>22 Iconic Business Hub, NY 10202</span></p>
                <p><LuPhoneIncoming/> <span>1800 00 0088</span></p>
                <p><AiOutlineMail/> <span>info@lawdesk.com</span></p>
              </div>
              <div>
                <h3>FOLLOW US</h3>
                <a href="https://www.facebook.com"><FiFacebook/></a>
                <a href="https://www.twitter.com"><AiOutlineTwitter/></a>
                <a href='www.instagram.com'><AiOutlineInstagram/></a>
                <a href="https://www.youtube.com"><AiFillYoutube/></a>
              </div>
            </div>
      </footer>
    </>
  )
}

export default Footer