import React from 'react'
import {FaBitcoin, } from 'react-icons/fa'
import { SiBlockchaindotcom } from "react-icons/si";
import { MdGeneratingTokens } from "react-icons/md";
import { VscDebug } from "react-icons/vsc";
import { IoCalendarSharp } from "react-icons/io5";

export default function Bottomnav() {
  return (
    <div className='text-white flex justify-around w-[100vw]'>
        <div className='flex flex-col items-center p-[3px]'>
            <div><FaBitcoin style={{fill: '#1effe8'}}/></div>
            <div>Crypto</div>
        </div>
        <div className='flex flex-col items-center p-[3px]'>
            <div><SiBlockchaindotcom style={{fill: '#1effe8'}}/></div>
            <div className=''>Blockchain</div>
        </div>
        <div className='flex flex-col items-center p-[3px]'>
            <div><MdGeneratingTokens style={{fill: '#1effe8'}}/></div>
            <div>NFT</div>
        </div>
        <div className='flex flex-col items-center p-[3px]'>
            <div><VscDebug style={{fill: '#1effe8'}}/></div>
            <div>Developers</div>
        </div>
        <div className='flex flex-col items-center p-[3px]'>
            <div className=''><IoCalendarSharp style={{fill: '#1effe8'}}/></div>
            <div>Events</div>
        </div>
    </div>
  )
}
