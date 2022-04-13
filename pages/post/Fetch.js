import React from 'react'

export default function Fetch() {
    const fetchinfo = async ()=>{
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
      const data = await response.json();
      console.log(data);
    }
  return (
    <div className='bg-[red] text-white' onClick={fetchinfo}>Fetch</div>
  )
}
