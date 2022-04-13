import React, {useEffect, useState} from 'react'
import {SiMarketo} from 'react-icons/si'
import {AiOutlineArrowUp} from 'react-icons/ai'
import {AiOutlineArrowDown} from 'react-icons/ai'

export default function Market() {
 const [data, setData] = useState([]);
  const fetchinfo = async ()=>{
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    const data = await response.json();
    console.log(data);
    setData(data);
  }
  useEffect(() =>{
    fetchinfo();
  },[])
  return (
    <div>
        <div className='flex items-center justify-center'>
            <SiMarketo style={{fill: 'hsl(34,100%,47%)'}} className='mr-[5px]'/>
            <p className='text-white font-[roboto]'>Market Analysis</p>
        </div>
        <div className='w-[100vw] mt-[20px]'>
          <table className='w-[100%]'>
            <tr className=''>
              <th>Name</th>
              <th>Price</th>
              <th>24h Change</th>
              <th>24h Low</th>
              <th>24h High</th>
              <th>Max Supply</th>
            </tr>
            <tr className='w-[100%]'>
              <td>{data[0]?.name}</td>
              <td>{data[0]?.current_price}</td>
              <td>adcs</td>
              <td>adghhgv</td>
              <td>aghjk</td>
              <td>jkllkjhg</td>
            </tr>
          </table>
        </div>
    </div>
  )
}
