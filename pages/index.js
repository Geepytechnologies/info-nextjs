import {useRef} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/Navbar'
import Bottomnav from '../components/bottomnav/Bottomnav'
import About from '../components/about/About'
import News from '../components/blog/News'
import Market from '../components/market/Market'
import Event from '../components/events/Event'
import Footer from '../components/footer/Footer'
import Signup from '../components/signup/Signup'
import { UserContext } from '../Context'

export default function Home() {
  const signup = useRef();
  const modal = ()=>{
     signup.current.style.display = 'flex';
     document.body.style.overflow = 'hidden';
    }
  const hidemodal = ()=>{
    signup.current.style.display = 'none';
    document.body.style.overflow = 'scroll';
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Infomatics</title>
        <meta name="description" content="An informative blog on Crypto, programming and blockchain related technology" />
        <link rel="icon" href="/logo5ico.png" type='image/png'/>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
      </Head>
      <UserContext.Provider value={hidemodal}>
      <div ref={signup} className='hidden bg-[rgba(0,0,0,0.7)] absolute flex items-center justify-center  h-[100vh] w-[100vw] top-[90px] m-[auto] left-[0px] z-[100]'>
        <Signup />
      </div>
      </UserContext.Provider>
      <Navbar />
      <UserContext.Provider value={modal}>
       <About />
      </UserContext.Provider>
      <News />
      <Market />
      <Event />
      <Footer />
      <div className='fixed bottom-[0px] sm:hidden'>
        <Bottomnav />
      </div>
  </div>
  )
}
