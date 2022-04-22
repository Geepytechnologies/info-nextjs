import React from 'react'
import {AiFillCalendar} from 'react-icons/ai'
import Image from 'next/image'
import info3 from '../blog/info3.jpeg'

export default function Event() {
  const events = ['a','b','c','d','e','f'];
  return (
    <div className=' h-[auto] flex items-center flex-col mt-[30px]'>
        <div className='flex items-center justify-center'>
            <AiFillCalendar style={{fill: 'hsl(34,100%,47%)', marginRight: '5px'}}/>
            <p className='text-white font-[roboto]'>Events</p>
        </div>
        {/* Event cards */}
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-[20px] sm:gap-[5px] gap-[50px] mt-[30px]'>
          {/* first card */}
        { events.map((item)=> (
          <div key={item} className='cursor-pointer bg-[white] w-[300px] h-[300px] m-[0px] flex flex-col border border-[white] blog2'>
            <div className='w-[100%] h-[50%] relative basis-[60%]'>
              <Image src={info3} alt='blog' layout='fill' objectFit='cover' placeholder='blur' className='brightness-50' />
            </div>
            <div className='flex flex-col basis-[40%] pl-[10px]'>
              {/* title */}
              <div className='basis-[20%] flex items-center'>Zone of Avoidance is launching soon</div>
              {/* about */}
              <div className='basis-[40%] flex items-center'>Zone of avoidance is a P2E nft based game</div>
              {/* button */}
              <div className='basis-[30%]'>
                <div className='items-center cursor-pointer justify-center flex rounded-md w-[70px] p-[3px] border border-[black]'>View</div>
              </div>
            </div>
          </div>))}
        </div>
    </div>
  )
}
