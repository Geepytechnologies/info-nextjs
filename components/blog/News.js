import React from 'react'
import { FaNewspaper } from 'react-icons/fa'
import Image from 'next/image'
import info3 from './info3.jpeg'

export default function News() {
  return (
    <div className=''>
      <div className='flex justify-center'>
        <FaNewspaper style={{fill: '#6f2c21', fontSize: 25}}/>
        <span className='text-white ml-[8px]'>News and Updates</span>
      </div>
      <div className=''>
        <div className=''>
          {/* blog image */}
          <div className='h-[300px] w-[300px] relative'>
            <Image src={info3} alt='blog' layout='fill' objectFit='contain' />
          </div>
          {/* end of blog image */}
          {/* blog cat and date */}
          <div>
            <div>category</div>
            <div>Time</div>
          </div>
          {/* end of blog cat and date */}
          {/* excerpt */}
          <div>
            <p>This is a blog news</p>
          </div>
        </div>
      </div>
    </div>
  )
}
