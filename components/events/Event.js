import React from 'react'
import {AiFillCalendar} from 'react-icons/ai'

export default function Event() {
  return (
    <div>
        <div className='flex items-center justify-center'>
            <AiFillCalendar style={{fill: 'hsl(34,100%,47%)', marginRight: '5px'}}/>
            <p className='text-white'>Events</p>
        </div>
    </div>
  )
}
