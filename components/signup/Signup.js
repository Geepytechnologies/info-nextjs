import React from 'react'
import {AiOutlineClose} from 'react-icons/ai';
import {UserContext} from '../../Context';
import {useContext} from 'react';


export default function Signup() {
    const hide = useContext(UserContext);
  return (
    <div className='bg-[green] h-[400px] w-[350px] md:h-[500px] md:w-[500px] text-white'>
       Sign up
       <AiOutlineClose style={{fill: 'white'}} className='text-[30px] cursor-pointer' onClick={hide}/>
    </div>
  )
}
