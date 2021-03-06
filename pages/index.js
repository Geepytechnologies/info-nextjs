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

export default function Home() {
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
      {/* bg-[rgba(0,0,0,0.7)] */}
      <Navbar />
      <About />
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
