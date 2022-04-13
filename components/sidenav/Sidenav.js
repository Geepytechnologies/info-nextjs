import React from 'react'
import {FaTwitter, FaFacebook, FaInstagram, FaDiscord, FaTelegramPlane, FaBars} from 'react-icons/fa'
import {AiOutlineCopyright} from 'react-icons/ai'
import {FaBitcoin, } from 'react-icons/fa'
import { SiBlockchaindotcom } from "react-icons/si";
import { MdGeneratingTokens } from "react-icons/md";
import { VscDebug } from "react-icons/vsc";
import { IoCalendarSharp } from "react-icons/io5";
import Link from 'next/link';

export default function Sidenav() {
  return (
    <div className=''>
        <div className='text-white flex flex-col justify-around w-[100vw]'>
        <div className='flex ml-[4px] flex-row items-center cursor-pointer bg-[#6f2c21] w-[0px] hover:w-[180px] py-[5px] ease-in-out duration-200 rounded-r-lg my-[10px]'>
            <div className='mr-[5px]'><FaBitcoin style={{fill: 'hsl(34,100%,47%)'}}/></div>
            <div><Link href='/cryptocurrencies'><a> Cryptocurrencies</a></Link></div>
        </div>
        <div className='flex ml-[4px] flex-row items-center cursor-pointer bg-[#6f2c21] w-[0px] hover:w-[180px] py-[5px] ease-in-out duration-200 rounded-r-lg my-[10px]'>
            <div className='mr-[5px]'><SiBlockchaindotcom style={{fill: 'hsl(34,100%,47%)'}}/></div>
            <div className=''><Link href='/blockchain'><a>Blockchain</a></Link></div>
        </div>
        <div className='flex ml-[4px] flex-row items-center cursor-pointer bg-[#6f2c21] w-[0px] hover:w-[180px] py-[5px] ease-in-out duration-200 rounded-r-lg my-[10px]'>
            <div className='mr-[5px]'><MdGeneratingTokens style={{fill: 'hsl(34,100%,47%)'}}/></div>
            <div><Link href='/nft'><a>NFT</a></Link></div>
        </div>
        <div className='flex ml-[4px] flex-row items-center cursor-pointer bg-[#6f2c21] w-[0px] hover:w-[180px] py-[5px] ease-in-out duration-200 rounded-r-lg my-[10px]'>
            <div className='mr-[5px]'><VscDebug style={{fill: 'hsl(34,100%,47%)'}}/></div>
            <div><Link href='/developers'><a>Developers</a></Link></div>
        </div>
        <div className='flex ml-[4px] flex-row items-center cursor-pointer bg-[#6f2c21] w-[0px] hover:w-[180px] py-[5px] ease-in-out duration-200 rounded-r-lg my-[10px]'>
            <div className='mr-[5px]'><IoCalendarSharp style={{fill: 'hsl(34,100%,47%)'}}/></div>
            <div><Link href='/events'><a>Events</a></Link></div>
        </div>
    </div>
        <div>
            <div className='w-[100%] p-[5px] flex items-center justify-center'>
                <ul className='flex justify-around pr-[20px] w-[80%]'>
                    <li className='inline hover:text-[#1effe8]'>
                        <a href='https://twitter.com/infomatics' target='_blank' rel='noreferrer'><FaTwitter /></a>
                    </li>
                    
                    <li className='inline hover:text-[#1effe8]'>
                        <a href='https://telegram.com/infomatics' target='_blank' rel='noreferrer'><FaTelegramPlane /></a>
                    </li>
                    <li className='inline hover:text-[#1effe8]'>
                        <a href='https://facebook.com/infomatics' target='_blank' rel='noreferrer'><FaFacebook /></a>
                    </li>
                    <li className='inline hover:text-[#1effe8]'>
                        <a href='https://instagram.com/infomatics ' target='_blank' rel='noreferrer'><FaInstagram /></a>
                    </li>
                    <li className='inline hover:text-[#1effe8]'>
                        <a href='https://instagram.com/infomatics' target='_blank' rel='noreferrer'><FaDiscord /></a>
                    </li>
                </ul>
            </div>
        </div>
        <div className='flex items-center justify-center mt-[10px]'><AiOutlineCopyright style={{paddingRight: '3px'}}/>Copyright 2022</div>
    </div>
  )
}
