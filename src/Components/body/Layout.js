import React from 'react'
import Header from '../Header/Navbar'
import { Outlet } from 'react-router-dom'
import './Layout.css';

function Layout() {
  return (
     <main className='layout'>
        <Header/>
        <Outlet/>
     </main>
    )
}

export default Layout