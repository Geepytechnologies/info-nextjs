import React from 'react'
import {FaTwitter, FaFacebook, FaInstagram, FaDiscord, FaTelegramPlane, FaBars} from 'react-icons/fa'
import {AiOutlineCopyright} from 'react-icons/ai'

export default function Sidenav() {
  return (
    <div>
        <div>
            <ul className='flex justify-around flex-col'>
                <li className='cursor-pointer bg-[#6f2c21] w-[0px] hover:w-[180px] py-[5px] ease-in-out duration-200 rounded-r-lg my-[10px]'>Cryptocurrencies</li>
                <li className='cursor-pointer bg-[#6f2c21] w-[0px] hover:w-[180px] py-[5px] ease-in-out duration-200 rounded-r-lg my-[10px]'>Blockchain</li>
                <li className='cursor-pointer bg-[#6f2c21] w-[0px] hover:w-[180px] py-[5px] ease-in-out duration-200 rounded-r-lg my-[10px]'>NFT</li>
                <li className='cursor-pointer bg-[#6f2c21] w-[0px] hover:w-[180px] py-[5px] ease-in-out duration-200 rounded-r-lg my-[10px]'>Developers</li>
                <li className='cursor-pointer bg-[#6f2c21] w-[0px] hover:w-[180px] py-[5px] ease-in-out duration-200 rounded-r-lg my-[10px]'>Events</li>
            </ul>
        </div>
        <div>
        <div className='w-[70%] p-[5px]'>
            <ul className='flex justify-between pr-[20px]'>
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
        <div className='flex items-center'><AiOutlineCopyright />Copyright 2022</div>
    </div>
  )
}
