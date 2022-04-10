import React from 'react'
import Image from 'next/image'
import foto from './istockphoto.jpg'

export default function About() {
  return (
    <div className='flex flex-col md:flex-row h-[300px] md:h-[400px]'>
        {/* left section*/}
        <div className='basis-[100%] md:basis-[50%] flex items-center justify-center about'>
           <div className='w-[100%] flex flex-col items-center'>
               <p className='text-white'>Know the Latest about the trending technology, News and Events related to the blockchain and Web3 Industry.</p>
               <p className='text-white'>Sign up for Our NewsLetters</p>
               <p className='text-white'>Get the latest news and updates</p>
               <button type='button' className='bg-[hsl(34,100%,47%)] text-white font-semibold rounded-md w-[30%] p-[8px] hover:scale-[1.2] hover:transition-all duration-200 ease-in-out'>Sign Up</button>
           </div>
        </div>
        {/* right section*/}
        <div className='hidden sm:flex basis-[50%] rightsection'>
           {/*  <div className='h-[500px] w-[500px] relative md:h-[500px] md:w-[500px}'>
                <Image src={foto} alt='foto' layout='responsive' objectFit='contain'/>
            </div> */}
        </div>
    </div>
  )
}
