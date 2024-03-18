import React from 'react'
import './Sidebar.css'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-box'>
      <h3> 
       <FaFacebookF />
      </h3>
    <h3> 
        < IoLogoInstagram />     
    </h3>
      <h3> 
        <FaYoutube />
      </h3>
      <h3>
       <FiTwitter />
      </h3>
      </div>
    </div>
  )
}

export default Sidebar