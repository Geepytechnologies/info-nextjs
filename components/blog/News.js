import React from 'react'
import { FaNewspaper } from 'react-icons/fa'
import info3 from './info3.jpeg'
import Image from 'next/image'
import {BiCategory} from 'react-icons/bi'
import {BsClock} from 'react-icons/bs';
import {AiOutlineArrowRight} from 'react-icons/ai';


import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    id: 1,
    title: 'Solana Price Goes Up to $7,000',
    image: info3,
    category: 'Crypto',
    time: '1 hour ago',
 },
 {
    id: 2,
    title: 'Bored Ape is the talk of the Town',
    image: info3,
    category: 'NFT',
    time: '1 hour ago',
 },
 {
    id: 3,
    title: 'Bitcoin Price Goes Up to $9,000',
    image: info3,
    category: 'Crypto',
    time: '1 hour ago',
 },
 {
    id: 4,
    title: 'Ethereum moving to proof of stake',
    image: info3,
    category: 'Blockchain',
    time: '2 hours ago',
 }
];

function NewsSlider0() {
  return (
  <div className='items-center border-white border-2 min-w-[300px] min-h-[350px] md:w-[300px] md:min-h-[350px] m-[20px] flex flex-col blog'>
      {/* blog image */}
      <div className='h-[200px] w-[95%] m-[auto] relative flex-[5] mt-[3px] border-2 border-white'>
      <Image src={data[0].image} alt='blog' layout='fill' objectFit='cover' placeholder='blur' className='brightness-50' />
      </div>
      {/* end of blog image */}
      {/* blog cat and date */}
      <div className='flex-[1] flex items-center w-[100%] max-h-[30px]'>
      <div className='h-[90%] flex w-[100%]'>
      <div className='text-white mr-[8px] flex items-center justify-center p-[4px] font-[roboto]'><BiCategory className='mr-[3px]'/>{data[0].category}</div>
      <div className='text-white mr-[8px] flex items-center justify-center p-[4px] font-[roboto]'><BsClock className='mr-[3px]'/>{data[0].time}</div>
      </div>
      </div>
      {/* end of blog cat and date */}
      {/* title */}
      <div className='flex-[1] mt-[5px] text-center w-[95%] max-h-[70px]'>
      <h2 className='text-white font-[roboto] text-ellipsis overflow-hidden'>{data[0].title}</h2>
      </div>
      <div className='mb-[5px] z-[100] hover:scale-[1.03]'>
      <button type='button' className='text-white bg-[hsl(34,100%,47%)] flex items-center justify-center font-[roboto] rounded-sm p-[5px]' >Read More <AiOutlineArrowRight style={{marginLeft: 5}}/></button>
      </div>
  </div>

)
}
function NewsSlider1() {
  return (
  <div className='items-center border-white border-2 min-w-[300px] min-h-[350px] md:w-[300px] md:min-h-[350px] m-[20px] flex flex-col blog'>
      {/* blog image */}
      <div className='h-[200px] w-[95%] m-[auto] relative flex-[5] mt-[3px] border-2 border-white'>
      <Image src={data[1].image} alt='blog' layout='fill' objectFit='cover' placeholder='blur' className='brightness-50' />
      </div>
      {/* end of blog image */}
      {/* blog cat and date */}
      <div className='flex-[1] flex items-center w-[100%] max-h-[30px]'>
      <div className='h-[90%] flex w-[100%]'>
      <div className='text-white mr-[8px] flex items-center justify-center p-[4px] font-[roboto]'><BiCategory className='mr-[3px]'/>{data[1].category}</div>
      <div className='text-white mr-[8px] flex items-center justify-center p-[4px] font-[roboto]'><BsClock className='mr-[3px]'/>{data[1].time}</div>
      </div>
      </div>
      {/* end of blog cat and date */}
      {/* title */}
      <div className='flex-[1] mt-[5px] text-center w-[95%] max-h-[70px]'>
      <h2 className='text-white font-[roboto] text-ellipsis overflow-hidden'>{data[1].title}</h2>
      </div>
      <div className='mb-[5px] z-[100] hover:scale-[1.03]'>
      <button type='button' className='text-white bg-[hsl(34,100%,47%)] flex items-center justify-center font-[roboto] rounded-sm p-[5px]' >Read More <AiOutlineArrowRight style={{marginLeft: 5}}/></button>
      </div>
  </div>

)
}
function NewsSlider2() {
  return (
  <div className='items-center border-white border-2 min-w-[300px] min-h-[350px] md:w-[300px] md:min-h-[350px] m-[20px] flex flex-col blog'>
      {/* blog image */}
      <div className='h-[200px] w-[95%] m-[auto] relative flex-[5] mt-[3px] border-2 border-white'>
      <Image src={data[2].image} alt='blog' layout='fill' objectFit='cover' placeholder='blur' className='brightness-50' />
      </div>
      {/* end of blog image */}
      {/* blog cat and date */}
      <div className='flex-[1] flex items-center w-[100%] max-h-[30px]'>
      <div className='h-[90%] flex w-[100%]'>
      <div className='text-white mr-[8px] flex items-center justify-center p-[4px] font-[roboto]'><BiCategory className='mr-[3px]'/>{data[2].category}</div>
      <div className='text-white mr-[8px] flex items-center justify-center p-[4px] font-[roboto]'><BsClock className='mr-[3px]'/>{data[2].time}</div>
      </div>
      </div>
      {/* end of blog cat and date */}
      {/* title */}
      <div className='flex-[1] mt-[5px] text-center w-[95%] max-h-[70px]'>
      <h2 className='text-white font-[roboto] text-ellipsis overflow-hidden'>{data[2].title}</h2>
      </div>
      <div className='mb-[5px] z-[100] hover:scale-[1.03]'>
      <button type='button' className='text-white bg-[hsl(34,100%,47%)] flex items-center justify-center font-[roboto] rounded-sm p-[5px]' >Read More <AiOutlineArrowRight style={{marginLeft: 5}}/></button>
      </div>
  </div>

)
}
function NewsSlider3() {
  return (
  <div className='items-center border-white border-2 min-w-[300px] min-h-[350px] md:w-[300px] md:min-h-[350px] m-[20px] flex flex-col blog'>
      {/* blog image */}
      <div className='h-[200px] w-[95%] m-[auto] relative flex-[5] mt-[3px] border-2 border-white'>
      <Image src={data[3].image} alt='blog' layout='fill' objectFit='cover' placeholder='blur' className='brightness-50' />
      </div>
      {/* end of blog image */}
      {/* blog cat and date */}
      <div className='flex-[1] flex items-center w-[100%] max-h-[30px]'>
      <div className='h-[90%] flex w-[100%]'>
      <div className='text-white mr-[8px] flex items-center justify-center p-[4px] font-[roboto]'><BiCategory className='mr-[3px]'/>{data[3].category}</div>
      <div className='text-white mr-[8px] flex items-center justify-center p-[4px] font-[roboto]'><BsClock className='mr-[3px]'/>{data[3].time}</div>
      </div>
      </div>
      {/* end of blog cat and date */}
      {/* title */}
      <div className='flex-[1] mt-[5px] text-center w-[95%] max-h-[70px]'>
      <h2 className='text-white font-[roboto] text-ellipsis overflow-hidden'>{data[3].title}</h2>
      </div>
      <div className='mb-[5px] z-[100] hover:scale-[1.03]'>
      <button type='button' className='text-white bg-[hsl(34,100%,47%)] flex items-center justify-center font-[roboto] rounded-sm p-[5px]' >Read More <AiOutlineArrowRight style={{marginLeft: 5}}/></button>
      </div>
  </div>

)
}




 export default function News() {
  const settings = {
    className: "center",
      infinite: true,
      centerPadding: "200px",
      slidesToShow: 2,
      speed: 500,
      autoplay: true,
  };
  return (
    <div className='mt-[50px] w-[100vw] flex flex-col items-center justify-center'>
      <div className='flex justify-center items-center'>
        <FaNewspaper style={{fill: 'hsl(34,100%,47%)', fontSize: 25}}/>
        <span className='text-white ml-[8px] font-[roboto]'>News and Updates</span>
      </div>
      <div className='slider mb-[60px] overflow-x-auto w-[95%] flex '>
          {/* <Slider {...settings}> */}
           <NewsSlider0 />
           <NewsSlider1 />
           <NewsSlider2 />
           <NewsSlider3 />
        {/* </Slider> */}
      </div>      
    </div>
  )
}
