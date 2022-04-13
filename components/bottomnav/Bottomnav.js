import React from 'react'
import {FaBitcoin, } from 'react-icons/fa'
import { SiBlockchaindotcom } from "react-icons/si";
import { MdGeneratingTokens } from "react-icons/md";
import { VscDebug } from "react-icons/vsc";
import { IoCalendarSharp } from "react-icons/io5";

export default function Bottomnav() {
  return (
    <div className='text-white p-[5px] flex justify-around w-[100vw] bg-[black] rounded-t-md z-[999]'>
        <div className='flex flex-col items-center p-[3px]'>
            <div><FaBitcoin style={{fill: '#548ab6'}}/></div>
            <div>Crypto</div>
        </div>
        <div className='flex flex-col items-center p-[3px]'>
            <div><SiBlockchaindotcom style={{fill: '#548ab6'}}/></div>
            <div className=''>Blockchain</div>
        </div>
        <div className='flex flex-col items-center p-[3px]'>
            <div><MdGeneratingTokens style={{fill: '#548ab6'}}/></div>
            <div>NFT</div>
        </div>
        <div className='flex flex-col items-center p-[3px]'>
            <div><VscDebug style={{fill: '#548ab6'}}/></div>
            <div>Developers</div>
        </div>
        <div className='flex flex-col items-center p-[3px]'>
            <div className=''><IoCalendarSharp style={{fill: '#548ab6'}}/></div>
            <div>Events</div>
        </div>
    </div>
  )
}
