import React from 'react'
import info3 from '../components/blog/info3.jpeg'
import {BiCategory} from 'react-icons/bi'
import {BsClock} from 'react-icons/bs';
import {AiOutlineArrowRight} from 'react-icons/ai';
import Image from 'next/image'

export default function NewsSlider(props) {
    const array = ['1','2','3','4'];
    return (
    <div className='items-center border-white border-2 w-[400px] min-h-[350px] md:w-[300px] md:min-h-[350px] m-[20px] flex flex-col blog'>
        {/* blog image */}
        <div className='h-[200px] w-[95%] m-[auto] relative flex-[5] mt-[3px] border-2 border-white'>
        <Image src={info3} alt='blog' layout='fill' objectFit='cover' placeholder='blur' className='brightness-50' />
        </div>
        {/* end of blog image */}
        {/* blog cat and date */}
        <div className='flex-[1] flex items-center w-[100%] max-h-[30px]'>
        <div className='h-[90%] flex w-[100%]'>
        <div className='text-white mr-[8px] flex items-center justify-center p-[4px] font-[roboto]'><BiCategory className='mr-[3px]'/>category</div>
        <div className='text-white mr-[8px] flex items-center justify-center p-[4px] font-[roboto]'><BsClock className='mr-[3px]'/>Time</div>
        </div>
        </div>
        {/* end of blog cat and date */}
        {/* title */}
        <div className='flex-[1] mt-[5px] text-center w-[95%] max-h-[70px]'>
        <h2 className='text-white font-[roboto] '>How blockchain technology is changing the Economy </h2>
        </div>
        <div className='mb-[5px] z-[100] hover:scale-[1.03]'>
        <button type='button' className='text-white bg-[hsl(34,100%,47%)] flex items-center justify-center font-[roboto] rounded-sm p-[5px]' >Read More <AiOutlineArrowRight style={{marginLeft: 5}}/></button>
        </div>
    </div>
  )
}
