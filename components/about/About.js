import React from 'react'
import Image from 'next/image'
import foto from './istockphoto.jpg'
import {useContext} from 'react';
import {UserContext} from '../../Context';

export default function About() {
  const user = useContext(UserContext);
  return (
    <div className='flex flex-col md:flex-row h-[300px] md:h-[400px] about '>
        {/* left section*/}
        <div className='basis-[100%] md:basis-[50%] flex items-center justify-center'>
           <div className='w-[100%] flex flex-col items-center'>
               <p className='leading-10 text-white text-center font-[roboto] tracking-wide font-semibold text-[20px] p-[10px] break-normal'>Know the Latest about the trending technology, News and Events related to the blockchain and Web3 Industry.</p>
               <p className='text-white font-[poppins]'>Sign up for Our NewsLetters</p>
               <p className='text-white font-[poppins]'>Get the latest news and updates</p>
               <button type='button' onClick={user} className='mt-2 font-[roboto] bg-[hsl(34,100%,47%)] text-white font-semibold rounded-md w-[30%] p-[8px] hover:scale-[1.2] hover:transition-all duration-200 ease-in-out'>Sign Up</button>
           </div>
        </div>
        {/* right section*/}
        <div className='hidden sm:flex basis-[50%] items-end justify-end'>
            <div className='h-[auto] w-[50%] md:h-[90%] md:w-[50%} rightsection'>
                {/* <Image src={foto} alt='foto' layout='responsive' objectFit='contain'/> */}
            </div>
        </div>
    </div>
  )
}
