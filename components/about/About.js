import React from 'react'
import Image from 'next/image'
import foto from './istockphoto.jpg'

export default function About() {
  return (
    <div className='flex'>
        {/* left section*/}
        <div className='basis-[50%] flex items-center justify-center'>
           <div className='w-[100%] flex flex-col items-center'>
               <p className='text-white'>Sign up for Our NewsLetters</p>
               <p className='text-white'>Get the latest news and updates</p>
               <button type='button' className='bg-[#6f2c21] text-white font-semibold rounded-md w-[30%] p-[8px] hover:scale-[1.2] hover:transition-all duration-200 ease-in-out'>Sign Up</button>
           </div>
        </div>
        {/* right section*/}
        <div className='basis-[50%]'>
            <div className='h-[500px] w-[500px] relative'>
                <Image src={foto} layout='fill' objectFit='contain'/>
            </div>
        </div>
    </div>
  )
}
