import React from 'react'
import vector from '../assets/Vectorz.svg'
import Group from '../assets/Group.png'

const Hero = () => {
  return (
    <div className='absolute top-[200px] left-[180px]'>
      <img src={vector} alt="" />
      <h1 className='text-white font-bold text-5xl'>No Matter Where</h1>
      <h1 className='text-white font-bold text-5xl'>You're going to we'll</h1>
      <h1 className='text-white font-bold text-5xl'>take you there</h1>

      <div className='flex p-4 bg-[#F3F3F399] mt-10 w-[800px] py-8 rounded-md backdrop-blur-[17.760618209838867px]'>


        <div className='p-2 flex items-center divide-x-2 justify-evenly w-full'>
          <h1 className='text-white  text-xl '>Where to?</h1>
          <h1 className='text-white px-4 text-xl'>Travel Type</h1>
          <h1 className='text-white px-4 text-xl'>Duration</h1>
        </div>
        <button className='bg-[#DF6951] p-2 rounded-md px-4 z-10 w-[150px] text-xl text-white'>Submit</button>
      </div>
      <div className='mt-4 flex'>
        <img src={Group} alt="" className='w-[160px]' />
        <h1 className='text-white'>2,500 people booked Tomorrowland Event in last 24 hours</h1>
      </div>
    </div>
  )
}

export default Hero