import React from 'react'

const VedioTitle = ({title , overview}) => {
  return (
    <div className='pt-40 ml-12'>
         <h1 className='text-4xl font-bold mb-5'>{title}</h1>
         <p className='w-1/2 text-md  mb-10'>{overview}</p>
    <div>
      <button className=' border-red-200 bg-gray-500 p-5 font-bold text-lg rounded-lg text-white m-4 '>Play</button>
      <button className=' border-red-200 bg-gray-500 p-5 font-bold text-lg rounded-lg text-white'>More Info</button>
    </div>
    </div>
  )
}

export default VedioTitle
