import React from 'react'
import {SiMarketo} from 'react-icons/si'

export default function Market() {
  return (
    <div>
        <div className='flex items-center justify-center'>
            <SiMarketo style={{fill: 'hsl(34,100%,47%)'}} className='mr-[5px]'/>
            <p className='text-white'>Market Analysis</p>
        </div>
    </div>
  )
}
