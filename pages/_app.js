import '../styles/globals.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer';
import Head from 'next/head';
import {apicall} from '../utils/apiCall'
import { useState } from 'react';
import SideNavbar from '../components/SideNavbar/SideNavbar';





function MyApp({ Component, pageProps,navData,footerData }) {

  const [isMenuOpened,setisMenuOpened]=useState(false)
  const [isLoggedin,setLoggedin]=useState(false)

  return (
    <>
    <Head>
      <title>Content Management System</title>
      <link rel='icon'  href="/cs.png"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
      <link href="https://fonts.googleapis.com/css2?family=Recursive:wght@300&family=Saira+Semi+Condensed&display=swap" rel="stylesheet"></link>
    </Head>
    {
      <>
        <Navbar navData={navData} isLoggedin={isLoggedin} setisMenuOpened={setisMenuOpened} isMenuOpened={isMenuOpened} />
          {isMenuOpened===true && <SideNavbar navData={navData} setisMenuOpened={setisMenuOpened} />}
        <Component {...pageProps} setLoggedin={setLoggedin} />
        <Footer footerData={footerData} isLoggedin={isLoggedin}/>
      </>
    }

    </>
  )
}

export default MyApp

MyApp.getInitialProps=async ()=>{
  let navbarurl="https://arcane-mesa-67533.herokuapp.com/navbar"
  let obj={
    method:"GET",
    headers:{
      'Content-Type':"application/json"
    }
  }
  const navData=await apicall({url:navbarurl,obj:obj});


  let footerurl="https://arcane-mesa-67533.herokuapp.com/footer"

  const footerData=await apicall({url:footerurl,obj:obj})

  return {navData,footerData}
}