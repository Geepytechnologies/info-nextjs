import React from 'react'
import { FaNewspaper } from 'react-icons/fa'
import info3 from './info3.jpeg'


import NewsSlider from '../NewsSlider'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function News() {
  const three = false;
  const settings = {
    className: "center",
      infinite: true,
      centerPadding: "200px",
      slidesToShow: 1,
      speed: 500,
      autoplay: true,
  };
  return (
    <div className='mt-[50px] w-[100vw]'>
      <div className='flex justify-center items-center'>
        <FaNewspaper style={{fill: 'hsl(34,100%,47%)', fontSize: 25}}/>
        <span className='text-white ml-[8px] font-[roboto]'>News and Updates</span>
      </div>
      {/* <OwlCarousel items={3}>      */}
      <div className='m-[20px] mb-[60px] p-[20px]'>
          <Slider {...settings}>
           <NewsSlider />
           <NewsSlider />
        </Slider>
      </div>

      
      {/* </OwlCarousel> */}
    </div>
  )
}
