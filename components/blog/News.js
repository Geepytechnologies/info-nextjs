import React from 'react'
import { FaNewspaper } from 'react-icons/fa'
import info3 from './info3.jpeg'

import NewsSlider from '../NewsSlider'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
  const three = false;
  const settings = {
    className: "center",
      infinite: true,
      centerPadding: "200px",
      slidesToShow: 2,
      speed: 500
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
           <NewsSlider />
        </Slider>
      </div>

      
      {/* </OwlCarousel> */}
      asdfghjkl
    </div>
  )
}
