import React, {useEffect, useRef, useState} from 'react'
import {SiMarketo} from 'react-icons/si'
import gp from '../blog/info3.jpeg'
import Image from 'next/image';
import {AiOutlineArrowUp} from 'react-icons/ai'
import {AiOutlineArrowDown} from 'react-icons/ai'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import {GoTriangleUp} from 'react-icons/go'
import {GoTriangleDown} from 'react-icons/go'

export default function Market2() {
 const [data, setData] = useState([]);
 const [slide, setSlide] = useState(1);
 const no1 = useRef('');
 const no2 = useRef('')
 const no3 = useRef(null)
 const no4 = useRef(null)
 const no5 = useRef(null)
 const change24h = useRef('');
 const reveal = useRef([]);
 reveal.current = [];
  
  const pageSlide = (props) => {
    setSlide(props);
  }
  if(no1.current !== '' && slide === 1){
    no1.current.style.backgroundColor = 'hsl(34,100%,47%)';
    no2.current.style.backgroundColor = '';
    no3.current.style.backgroundColor = '';
    no4.current.style.backgroundColor = '';
    no5.current.style.backgroundColor = '';
  }else if(no2.current !== '' && slide === 2){
    no2.current.style.backgroundColor = 'hsl(34,100%,47%)';
    no1.current.style.backgroundColor = '';
    no3.current.style.backgroundColor = '';
    no4.current.style.backgroundColor = '';
    no5.current.style.backgroundColor = '';
  }else if(no3.current !== null && slide === 3){
    no3.current.style.backgroundColor = 'hsl(34,100%,47%)';
    no2.current.style.backgroundColor = '';
    no1.current.style.backgroundColor = '';
    no4.current.style.backgroundColor = '';
    no5.current.style.backgroundColor = '';
  }else if(no4.current !== null && slide === 4){
    no4.current.style.backgroundColor = 'hsl(34,100%,47%)';
    no2.current.style.backgroundColor = '';
    no3.current.style.backgroundColor = '';
    no1.current.style.backgroundColor = '';
    no5.current.style.backgroundColor = '';
  }else if(no5.current !== null && slide === 5){
    no5.current.style.backgroundColor = 'hsl(34,100%,47%)';
    no2.current.style.backgroundColor = '';
    no3.current.style.backgroundColor = '';
    no4.current.style.backgroundColor = '';
    no1.current.style.backgroundColor = '';
  }



  const fetchinfo = async ()=>{
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    const data = await response.json();
    // console.log(data);
    console.log(data[3].name);
    setData(data);
  }  
  useEffect(() => {
    fetchinfo();
  },[])
  
   const addReveal = (el)=>{
     if(el && !reveal.current.includes(el)){
       reveal.current.push(el)
     };
     reveal.current.forEach(el=>{
       var change = el.innerHTML.toString();
       var result = change.search('-');
        if(result === -1){
          el.style.color = '#46c796';
          el.style.fontSize = '1.2rem';
        }else{
          el.style.color = '#f15858';
        }
      })
   } 

  return (
    <div className='w-[100vw] flex flex-col'>
        <div className='flex items-center justify-center'>
            <SiMarketo style={{fill: 'hsl(34,100%,47%)'}} className='mr-[5px]'/>
            <p className='text-white font-[roboto]'>Market Analysis</p>
        </div>
        {/* navigation buttons */}
        <div className='flex w-[100vw] text-white justify-end'>
          <div className='flex w-[20%] justify-center items-center mr-[30px]'>
            <FaAngleDoubleLeft  />
            <div ref={no1} onClick={()=> pageSlide(1)} className='ml-[5px] cursor-pointer p-[5px] border border-[rgba(255,255,255, 0.3)] border-solid w-[20%] text-center'>1</div>
            <div ref={no2} onClick={()=> pageSlide(2)} className='border cursor-pointer p-[5px] border-[rgba(255,255,255, 0.3)] border-solid w-[20%] text-center'>2</div>
            <div ref={no3} onClick={()=> pageSlide(3)} className='border cursor-pointer p-[5px] border-[rgba(255,255,255, 0.3)] border-solid w-[20%] text-center'>3</div>
            <div ref={no4} onClick={()=> pageSlide(4)} className='border cursor-pointer p-[5px] border-[rgba(255,255,255, 0.3)] border-solid w-[20%] text-center'>4</div>
            <div ref={no5} onClick={()=> pageSlide(5)} className='mr-[5px] cursor-pointer p-[5px] border border-[rgba(255,255,255, 0.3)] border-solid w-[20%] text-center'>5</div>
            <FaAngleDoubleRight />
          </div>
        </div>
        {/* end of navigation buttons */}
    
        <div className='flex items-center justify-center bg-[green]'>
          <div className='w-[90vw] border border-[rgba(255,255,255,0.3)] rounded-lg '>
            <table className='text-white w-[90vw] bg-[red]  '>
              <thead>
              <tr className=''>
                <th>Name</th>
                <th>Price</th>
                <th className='hidden md:flex'>Market Cap</th>
                <th className=''>24h change</th>
                <th><div className='flex items-center justify-center hidden sm:flex'>24h_high<AiOutlineArrowUp style={{fill:'#46c796', marginLeft: 5}}/></div></th>
                <th><div className='flex items-center justify-center hidden sm:flex'>24h_low<AiOutlineArrowDown style={{fill:'#f15858', marginLeft: 5}}/></div></th>
                <th className='hidden md:flex'>Max Supply</th>
              </tr>
              </thead>
              <tbody>
              {slide === 1 ? data.slice(0, 20).map((item) => {
                  return (
                    <tr key={item.id} className=''>
                      <td className='bg-[brown]'>
                        <div className=''>
                          <div className=''>
                            <div className='h-[20px] w-[20px] rounded-full relative'>
                              <Image src={item.image} layout='fill' objectFit='cover' />
                            </div>
                          </div>
                          <div className=''>
                          <div className=''>
                            <div className='text-white  font-[roboto] '>{item.symbol.toUpperCase()}</div>
                            <div className='text-white  font-[roboto]'>{item.name}</div>
                          </div>
                          </div>
                        </div>
                      </td>
                      <td className='text-center'>{item.current_price}</td>
                      <td className='text-center hidden '>{item.market_cap}</td>
                      <td ref={addReveal} className='text-center'>{item.price_change_percentage_24h}  {item.price_change_percentage_24h > 0 ? <>&#65085;</> : <>&#65086; </>}</td>
                      <td className='text-center hidden '>{item.high_24h}</td>
                      <td className='text-center hidden '>{item.low_24h}</td>
                      <td className='text-center hidden '>{item.total_supply}</td>
                    </tr>);
                })
              : null}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}
