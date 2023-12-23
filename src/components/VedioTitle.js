import React from 'react'

const VedioTitle = ({title , overview}) => {
  return (
    <div className='w-[1260px] aspect-video pt-[10%] px-24 absolute text-white bg-gradient-to-r from-black'>
         <h1 className='text-2xl font-bold mb-3'>{title}</h1>
         <p className='w-[25rem] pb-5'>{overview}</p>
    <div>
      <button className=' bg-white p-5 font-bold text-lg rounded-lg text-black mr-5 '>Play</button>
      <button className=' border-red-200  bg-gray-400 p-5 font-bold text-lg rounded-lg text-white'>More Info</button>
    </div>
    </div>
  )
}

export default VedioTitle
