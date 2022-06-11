import React, {useEffect, useRef, useState} from 'react'
import {SiMarketo} from 'react-icons/si'
import gp from '../blog/info3.jpeg'
import Image from 'next/image';
import {AiOutlineArrowUp} from 'react-icons/ai'
import {AiOutlineArrowDown} from 'react-icons/ai'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import {GoTriangleUp} from 'react-icons/go'
import {GoTriangleDown} from 'react-icons/go'

export default function Market() {
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

const moveLeft = () => {
  let x;
  x = slide - 1;
  if(x === 0){
    setSlide(5);
  }
  else{
    setSlide(x);
  }
}
const moveRight = () => {
  let x;
  x = slide + 1;
  if(x === 6){
    setSlide(1);
  }
  else{
    setSlide(x);
  }
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
  
  const Table = ({item}) => {
    return(
      <tr key={item.id} className='border-t border-solid border-[rgba(255,255,255,0.3)]'>
          <td className=''>
            <div className='flex items-center '>
              <div className='basis-[30%] flex items-center justify-center'>
                <div className='h-[20px] w-[20px] bg-[white] rounded-full relative'>
                  <Image src={item.image} layout='fill' objectFit='cover' />
                </div>
              </div>
              <div className='w-[100%]'>
              <div className='flex flex-col ml-[20px]'>
                <div className='text-white font-semibold text-center font-[roboto] basis-[30%]'>{item.symbol.toUpperCase()}</div>
                <div className='text-white text-[14px] text-center font-[roboto] basis-[30%]'>{item.name}</div>
              </div>
              </div>
            </div>
          </td>
          <td className='text-center'>{item.current_price}</td>
          <td className='text-center hidden sm:block '>{item.market_cap}</td>
          <td ref={addReveal} className='text-center'>{item.price_change_percentage_24h}  {item.price_change_percentage_24h > 0 ? <>&#65085;</> : <>&#65086; </>}</td>
          <td className='text-center text-[#46c796] '>{item.high_24h}</td>
          <td className='text-center text-[#f15858] '>{item.low_24h}</td>
          <td className='text-center hidden sm:hidden'>{item.total_supply && item.total_supply.toFixed(0)}</td>
      </tr>
    ); 
  }

  return (
    <div className='w-[100vw] flex flex-col'>
        <div className='flex items-center justify-center'>
            <SiMarketo style={{fill: 'hsl(34,100%,47%)'}} className='mr-[5px]'/>
            <p className='text-white font-[roboto]'>Market Analysis</p>
        </div>
        {/* navigation buttons */}
        <div className='flex w-[95vw] text-white justify-end'>
          <div className='flex w-[45%] sm:[25%] md:w-[25%] justify-center items-center mr-[30px]'>
            <FaAngleDoubleLeft onClick={moveLeft} className='cursor-pointer' />
            <div ref={no1} onClick={()=> pageSlide(1)} className='hidden sm:block ml-[8px] mr-[1px] cursor-pointer p-[5px] border-2 border-[rgba(255,255,255, 0.3)] rounded-lg navbtn border-solid w-[20%] text-center'>1</div>
            <div ref={no2} onClick={()=> pageSlide(2)} className='hidden sm:block border-2 mr-[1px] navbtn cursor-pointer p-[5px] border-[rgba(255,255,255, 0.3)] rounded-lg  border-solid w-[20%] text-center'>2</div>
            <div ref={no3} onClick={()=> pageSlide(3)} className='hidden sm:block border-2 mr-[1px] navbtn cursor-pointer p-[5px] border-[rgba(255,255,255, 0.3)] border-solid rounded-lg  w-[20%] text-center'>3</div>
            <div ref={no4} onClick={()=> pageSlide(4)} className='hidden sm:block border-2 mr-[1px] navbtn cursor-pointer p-[5px] border-[rgba(255,255,255, 0.3)] border-solid rounded-lg  w-[20%] text-center'>4</div>
            <div ref={no5} onClick={()=> pageSlide(5)} className='hidden sm:block mr-[8px] navbtn cursor-pointer p-[5px] border-2 border-[rgba(255,255,255, 0.3)] rounded-lg  border-solid w-[20%] text-center'>5</div>
            <FaAngleDoubleRight onClick={moveRight} className='cursor-pointer' />
          </div>
        </div>
        {/* end of navigation buttons */}
    
        <div className='flex items-center justify-center mt-[10px]'>
          <div className='w-[90vw] relative border-2 border-[rgba(255,255,255,0.3)] rounded-lg overflow-x-auto '>
              <div className='pattern'></div>
            <table className='text-white w-[90vw] table'>
              <thead>
              <tr className='items-center'>
                <th>Name</th>
                <th className=''>Price</th>
                <th className='hidden sm:block'>Market Cap</th>
                <th className=''>24h change</th>
                <th><div className='flex items-center justify-center sm:flex'>24h_high<AiOutlineArrowUp style={{fill:'#46c796', marginLeft: 5}}/></div></th>
                <th><div className='flex items-center justify-center sm:flex'>24h_low<AiOutlineArrowDown style={{fill:'#f15858', marginLeft: 5}}/></div></th>
                <th className='hidden sm:hidden'>Max Supply</th>
              </tr>
              </thead>
              <tbody className=''>
              {slide === 1 ? data.slice(0, 20).map((item) => {
                  return (
                    <Table item={item} key={item.id} />)
                })
              : slide === 2 ? data.slice(20,40).map((item) =>(
               <Table item={item} key={item.id} />))
              : slide === 3 ? data.slice(40,60).map((item) =>(
                <Table item={item} key={item.id} />
              )) 
              : slide === 4 ? data.slice(60,80).map((item) =>(
                <Table item={item} key={item.id} />
              )) 
              : slide === 5 ? data.slice(80,100).map((item) =>(
                <Table item={item} key={item.id} />
              )) : null
              }
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}
