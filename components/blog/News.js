import React from 'react'
import { FaNewspaper } from 'react-icons/fa'
import Image from 'next/image'
import info3 from './info3.jpeg'
import {BiCategory} from 'react-icons/bi'
import {BsClock} from 'react-icons/bs'

export default function News() {
  return (
    <div className='mt-[50px] w-[100vw]'>
      <div className='flex justify-center'>
        <FaNewspaper style={{fill: '#6f2c21', fontSize: 25}}/>
        <span className='text-white ml-[8px]'>News and Updates</span>
      </div>      
      <div className='m-[20px] mb-[60px]  p-[20px] '>
        <div className='border-white border-2 w-[300px] min-h-[400px] m-[20px] flex flex-col blog'>
          {/* blog image */}
          <div className='h-[200px] w-[95%] m-[auto] relative flex-[3] mt-[3px] border-2 border-white rounded-lg'>
            <Image src={info3} alt='blog' layout='fill' objectFit='cover' placeholder='blur' className='brightness-50 rounded-lg' />
          </div>
          {/* end of blog image */}
          {/* blog cat and date */}
          <div className='flex-[1] flex items-center'>
            <div className='h-[90%] flex w-[100%]'>
            <div className='text-white mr-[5px] bg-[#6f2c21] flex items-center justify-center rounded-md p-[4px]'><BiCategory />category</div>
            <div className='text-white flex items-center justify-center bg-[#6f2c21] rounded-md p-[4px]'><BsClock />Time</div>
            </div>
          </div>
          {/* end of blog cat and date */}
          {/* excerpt */}
          <div className='flex-[2]'>
            <p className='text-white'>This is a blog news asdfghjkl;lkjhgfdsasdfghjkjhgfds</p>
          </div>
        </div>
      </div>
      asdfghjkl
    </div>
  )
}
