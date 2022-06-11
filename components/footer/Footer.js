import React from 'react'
import {FaTwitter, FaFacebook, FaInstagram, FaDiscord, FaTelegramPlane, FaBars} from 'react-icons/fa'
import {AiOutlineCopyright} from 'react-icons/ai'
import Image from 'next/image';
import logo6 from '../navbar/logo6.png'


export default function Footer() {
  return (
    <div className='h-[250px] pb-[50px] sm:pb-[0px] flex flex-col items-center justify-center footer'>
        <div className='w-[60%] flex flex-col items-center justify-center'>
            <div className='flex w-[100%] items-center justify-center sm:justify-center'>
                <div className='h-[60px] w-[60px] relative'>
                <Image src={logo6} alt='logo' layout='fill' objectFit='contain'/>
                </div>
                <div onClick={()=> router.push('/')} className='cursor-pointer'>
                    <h2 className='text-white pr-[10px] text-[25px] font-[Montserrat] font-semibold'>Infomatics</h2>
                </div>
            </div>
        </div>
        <div className='w-[100%] items-center justify-center flex'>
            <div className='w-[60%] p-[5px] flex items-center justify-around'>
                <ul className='flex justify-around w-[100%] text-white'>
                    <li className='inline border rounded-full border-[rgba(255,255,255,0.3)] p-[7px] ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)] mr-[3px]'>
                        <a href='https://twitter.com/infomatics' target='_blank' rel='noreferrer'><FaTwitter /></a>
                    </li>
                    
                    <li className='inline  border rounded-full border-[rgba(255,255,255,0.3)] p-[7px] ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)] mr-[3px]'>
                        <a href='https://telegram.com/infomatics' target='_blank' rel='noreferrer'><FaTelegramPlane /></a>
                    </li>
                    <li className='inline  border rounded-full border-[rgba(255,255,255,0.3)] p-[7px] ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)] mr-[3px]'>
                        <a href='https://facebook.com/infomatics' target='_blank' rel='noreferrer'><FaFacebook /></a>
                    </li>
                    <li className='inline  border rounded-full border-[rgba(255,255,255,0.3)] p-[7px] ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)] mr-[3px]'>
                        <a href='https://instagram.com/infomatics ' target='_blank' rel='noreferrer'><FaInstagram /></a>
                    </li>
                    <li className='inline  border rounded-full border-[rgba(255,255,255,0.3)] p-[7px] ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)] mr-[3px]'>
                        <a href='https://instagram.com/infomatics' target='_blank' rel='noreferrer'><FaDiscord /></a>
                    </li>
                </ul>
            </div>
        </div>
        <div className='font-[roboto] text-[14px] flex items-center justify-center mt-[10px] text-white'>
            <AiOutlineCopyright style={{paddingRight: '3px', fontSize: 20}}/>Copyright 2022 Infomatics, Inc. All rights reserved
        </div>
    </div>
  )
}
