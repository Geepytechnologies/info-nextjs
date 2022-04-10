import React from 'react'
import { FaNewspaper } from 'react-icons/fa'
import Image from 'next/image'
import info3 from './info3.jpeg'
import {BiCategory} from 'react-icons/bi'
import {BsClock} from 'react-icons/bs'
var $ = require('jquery');
if (typeof window !== 'undefined') {
   window.$ = window.jQuery = require('jquery');
}
// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

export default function News() {
  return (
    <div className='mt-[50px] w-[100vw]'>
      <div className='flex justify-center items-center'>
        <FaNewspaper style={{fill: 'hsl(34,100%,47%)', fontSize: 25}}/>
        <span className='text-white ml-[8px]'>News and Updates</span>
      </div>
      {/* <OwlCarousel items={3}>      */}
      <div className='m-[20px] mb-[60px] p-[20px] flex items-center'>
        <div className='border-white border-2 w-[400px] min-h-[350px] md:w-[300px] md:min-h-[400px] m-[20px] flex flex-col blog'>
          <div className='absolute w-[inherit] min-h-[inherit] top-[0px] design'></div>
          {/* blog image */}
          <div className='h-[200px] w-[95%] m-[auto] relative flex-[3] mt-[3px] border-2 border-white rounded-lg'>
            <Image src={info3} alt='blog' layout='fill' objectFit='cover' placeholder='blur' className='brightness-50 rounded-lg' />
          </div>
          {/* end of blog image */}
           {/* excerpt */}
           <div className='flex-[2]'>
            <p className='text-white'>This is a blog news asdfghjkl;lkjhgfdsasdfghjkjhgfds</p>
          </div>
          {/* blog cat and date */}
          <div className='flex-[1] flex items-center'>
            <div className='h-[90%] flex w-[100%]'>
            <div className='text-white mr-[5px] flex items-center justify-center rounded-md p-[4px]'><BiCategory />category</div>
            <div className='text-white flex items-center justify-center rounded-md p-[4px]'><BsClock />Time</div>
            </div>
          </div>
          {/* end of blog cat and date */}
         
        </div>
      </div>
      <div className='m-[20px] mb-[60px] p-[20px] flex items-center'>
        <div className='border-white border-2 w-[400px] min-h-[350px] md:w-[300px] md:min-h-[400px] m-[20px] flex flex-col blog'>
          <div className='absolute w-[inherit] min-h-[inherit] top-[0px] design'></div>
          {/* blog image */}
          <div className='h-[200px] w-[95%] m-[auto] relative flex-[3] mt-[3px] border-2 border-white rounded-lg'>
            <Image src={info3} alt='blog' layout='fill' objectFit='cover' placeholder='blur' className='brightness-50 rounded-lg' />
          </div>
          {/* end of blog image */}
           {/* excerpt */}
           <div className='flex-[2]'>
            <p className='text-white'>This is a blog news asdfghjkl;lkjhgfdsasdfghjkjhgfds</p>
          </div>
          {/* blog cat and date */}
          <div className='flex-[1] flex items-center'>
            <div className='h-[90%] flex w-[100%]'>
            <div className='text-white mr-[5px] flex items-center justify-center rounded-md p-[4px]'><BiCategory />category</div>
            <div className='text-white flex items-center justify-center rounded-md p-[4px]'><BsClock />Time</div>
            </div>
          </div>
          {/* end of blog cat and date */}
         
        </div>
      </div>
      
      {/* </OwlCarousel> */}
      asdfghjkl
    </div>
  )
}
