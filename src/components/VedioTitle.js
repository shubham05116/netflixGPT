import React from 'react'

const VedioTitle = ({title , overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-36 absolute text-white bg-gradient-to-r from-black'>
         <h1 className='text-4xl font-bold mb-5'>{title}</h1>
         <p className='w-1/2 text-md pb-5'>{overview}</p>
    <div>
      <button className=' px-10 bg-white p-5 font-bold text-lg rounded-lg text-black mr-5 '>Play</button>
      <button className=' border-red-200 px-10 bg-gray-400 p-5 font-bold text-lg rounded-lg text-white'>More Info</button>
    </div>
    </div>
  )
}

export default VedioTitle
