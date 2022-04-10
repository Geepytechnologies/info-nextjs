import React, {useRef} from 'react'
import styles from '../../styles/sidenav.module.css'
import Image from 'next/image'
import logo5 from './logo5.png'
import logo6 from './logo6.png'
import logoglow from './logoglow.png'
import {FaTwitter, FaFacebook, FaInstagram, FaDiscord, FaTelegramPlane, FaBars} from 'react-icons/fa'
import {RiCloseCircleLine} from 'react-icons/ri'
import Sidenav from '../sidenav/Sidenav'

export default function Navbar() {
    const side = useRef();
    const menu = useRef();
    const close = useRef();
    const show = () => {
        document.body.style.overflow = 'hidden';
        menu.current.style.display = 'none';
        close.current.style.display = 'flex';
        side.current.style.maxHeight = 'calc(100vh - 10px)';
        side.current.style.borderBottom = '1px solid rgba(255, 255, 255, 0.3)';
    }
    const hide = () => {
        document.body.style.overflow = 'scroll';
        menu.current.style.display = 'flex';
        close.current.style.display = 'none';
        side.current.style.maxHeight = '0px';
        side.current.style.borderBottom = '0px';
        side.current.style.borderTop = '0px';
    }
  return (
    <div className='text-white h-[90px] flex items-center relative sticky top-[0px] bg-[black] z-[100]'>
        {/* logo section */}
        <div className='flex items-center basis-[50%] sm:basis-[50%] md:basis-[30%] lg:[25%]'>
            <div className='h-[60px] w-[60px] relative'>
              <Image src={logo6} alt='logo' layout='fill' objectFit='contain'/>
            </div>
            <div>
                <h2 className='text-[25px] font-[Montserrat] font-semibold'>Infomatics</h2>
            </div>
        </div>
        {/* end of logo section */}
        {/* menu section */}
        <div className='basis-[50%] hidden md:block md:basis-[70%] lg:basis-[50%]'>
            <div className=''>
                <ul className='flex justify-around'>
                    <div>
                        <li className='dtext inline  cursor-pointer'>Cryptocurrencies</li>
                        <div className='dcol mt-[2px] w-[0px] ease-in-out duration-200 h-[3px] rounded-md  bg-[hsl(34,100%,47%)]'></div>
                    </div>
                    <div>
                        <li className='dtext inline cursor-pointer'>Blockchain</li>
                        <div className='dcol w-[0px] ease-in-out duration-200 h-[3px] rounded-md  bg-[hsl(34,100%,47%)]'></div>
                    </div>
                    <div>
                        <li className='dtext inline cursor-pointer'>NFT</li>
                        <div className='dcol w-[0px] ease-in-out duration-200 h-[3px] rounded-md  bg-[hsl(34,100%,47%)]'></div>
                    </div>
                    <div>
                        <li className='dtext inline cursor-pointer'>Developers</li>
                        <div className='dcol w-[0px] ease-in-out duration-200 h-[3px] rounded-md  bg-[hsl(34,100%,47%)]'></div>
                    </div>
                    <div>
                        <li className='dtext inline cursor-pointer'>Events</li>
                        <div className='dcol w-[0px] ease-in-out duration-200 h-[3px] rounded-md  bg-[hsl(34,100%,47%)]'></div>
                    </div>
                </ul>
            </div>
        </div>
        {/* end of menu section */}
        {/* social icons */}
        <div className='lg:basis-[25%] lg:flex lg:justify-end hidden lg:block'>
            <div className='w-[70%] p-[5px]'>
            <ul className='flex justify-between pr-[20px]'>
                <li className='inline hover:text-[#548ab6]'>
                    <a href='https://twitter.com/infomatics' target='_blank' rel='noreferrer'><FaTwitter /></a>
                </li>
                
                <li className='inline hover:text-[#548ab6]'>
                    <a href='https://telegram.com/infomatics' target='_blank' rel='noreferrer'><FaTelegramPlane /></a>
                </li>
                <li className='inline hover:text-[#548ab6]'>
                    <a href='https://facebook.com/infomatics' target='_blank' rel='noreferrer'><FaFacebook /></a>
                </li>
                <li className='inline hover:text-[#548ab6]'>
                    <a href='https://instagram.com/infomatics ' target='_blank' rel='noreferrer'><FaInstagram /></a>
                </li>
                <li className='inline hover:text-[#548ab6]'>
                    <a href='https://instagram.com/infomatics' target='_blank' rel='noreferrer'><FaDiscord /></a>
                </li>
            </ul>
            </div>
        </div>
        {/* end of social icons */}
        {/* menu icon */}
        <div ref={menu} onClick={show} className='flex justify-end basis-[50%] cursor-pointer sm:basis-[50%] text-[25px] pr-[10px] md:!hidden'>
            <FaBars />
        </div>
        <div ref={close} onClick={hide} className='basis-[50%] hidden cursor-pointer sm:basis-[50%] text-[25px] pr-[10px] flex justify-end  md:!hidden'>
            <RiCloseCircleLine />
        </div>
        {/* end of menu icon */}
        <div ref={side} className='w-[100vw] fixed  border-none z-[100] top-[90px] text-white right-[0px] overflow-hidden absolute sidenavglass max-h-[0px] h-[100vh] md:!hidden transition-[max-height] duration-500 ease-in-out'><Sidenav /></div>
    </div>
  )
}
