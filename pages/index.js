import styles from '../styles/Home.module.scss'
import Banner from '../components/Banner/Banner'
import { apicall } from '../utils/apiCall'
import Client from '../components/Client/Client'
import MarketStudies from '../components/Market Section/MarketSection'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


export default function Home({bannerdata,clientimages,marketstudies,setLoggedin}) {
  const router = useRouter();

  useEffect(()=>{
    if(typeof window!=='undefined'){
      if(window.localStorage.getItem('token')){
        setLoggedin(true)
        return router.push('/')
      }
      return router.push('/Login/Login')
    }
  },[])
  return (
    <div className={styles.container}>
      <Banner bannerData={bannerdata}/>
      <Client clientimages={clientimages}/>
      <MarketStudies marketstudies={marketstudies} />
    </div>
  )
}

export const getStaticProps=async()=>{
  let homepageurl="https://arcane-mesa-67533.herokuapp.com/homepage"
  let obj={
    method:"GET",
    headers:{
      'Content-Type':"application/json"
    }
  }
  let homepagedata=await apicall({url:homepageurl,obj:obj})

  let {banner,client_logos,market_recognition}=homepagedata


  return {
    props:{
      bannerdata:banner[0],
      clientimages:client_logos[0],
      marketstudies:market_recognition[0]
    }
  }
}
