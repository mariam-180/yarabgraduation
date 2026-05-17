import React, { useEffect, useState } from 'react'
import Style from './Layout.module.css';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import SideBar from '../SideBar/SideBar';

export default function Layout() {
  let location = useLocation()
    const [counter, setcounter] = useState(0)
    useEffect(()=> {

    }
    ,
[])

    
  return <> 
  {/* here i called the navbar */}
 <Navbar/>
<div className='thecorrectproject w-full min-w-0' >  {/* {location.pathname !== '/' && location.pathname !== '/LOGIN' && location.pathname !== '/register' && <SideBar />} */}
        <Outlet/>
   </div>

        <Footer/>
     
    </>
  
}
