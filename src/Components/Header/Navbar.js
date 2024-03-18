import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import { GiMountains } from "react-icons/gi";

function Navbar() {
  const {setUserInfo,userInfo}=useContext( UserContext)
   useEffect(()=>{
     fetch('https://mern-back-end-jug7.onrender.com/profile',{
      credentials:'include',
     })
     .then(response =>{
          response.json().then(userInfo=>{
           setUserInfo(userInfo);
          })
        })
    },[]);

function logout (){
  fetch('https://mern-back-end-jug7.onrender.com/logout',{
  credentials:'include',
  method:'POST' ,
  });
  setUserInfo(null);

}   
const username =userInfo?.username;
    return (
    <div className='navbar'>
        <header>
        <div>
        {/* <i></i> */}
        <Link to='/' className='logo'><GiMountains/> My Travel Blog</Link>
        </div>
        <div className='nav-pages'>
          <Link to='/' className='nav-pages' >Home</Link>
          <Link to={'/about'} className='nav-pages'>About</Link>
          <Link className='nav-pages'>Contact</Link>
        </div>
        <nav>
        {username &&(
         <>
         <Link to='/create' className='create-post'>Create new post</Link>
         <a onClick={logout} className='log-out'>Logout</a>
         </>
        )}
        {!username && (
          <>
         <Link to='/loginpage' className='nav-link'>Login</Link>
         <Link to='/regsiterpage' className='nav-link'>Register</Link> 
          </>
        )}
         
        </nav>
        </header>
    </div>
  )
}

export default Navbar