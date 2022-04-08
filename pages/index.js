import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/Navbar'
import Bottomnav from '../components/bottomnav/Bottomnav'
import About from '../components/about/About'
import News from '../components/blog/News'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Infomatics</title>
        <meta name="description" content="An informative blog on Crypto, programming and blockchain related technology" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </Head>
      <Navbar />
      <About />
      <News />
      <div className='fixed bottom-[0px] sm:hidden'>
        <Bottomnav />
      </div>
  </div>
  )
}
