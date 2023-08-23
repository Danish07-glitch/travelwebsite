import React from 'react'
import bgimage from '../assets/bgimage.png'
import Arrow from '../assets/Arrow.png'

const Dashboard = () => {
  return (
   
    <>
    {/* <div style={{
        backgroundImage:`url(${bgimage})`,
        height:'100vh',
        width:'100vw',
    backgroundSize:'cover',
    // backgroundRepeat:"no-repeat"
    }}/> */}
    <div className=''>

    <img src={bgimage} alt="" className='object-cover w-screen h-screen'/>

            <div className='flex px-[175px] justify-between py-12 absolute top-0 items-center  w-full'>
            <div>
                <h1 className='text-white text-2xl font-bold'>Travel</h1>
                <img src={Arrow} className='w-[3.75rem] mt-[-9px] ml-[14px] rotate-[-2deg]' alt="" />

            </div>
            <div className='flex text-white'>
                <h2 className='mr-5'>Home</h2>
                <h2 className='mr-5'>About</h2>
                <h2 className='mr-5'>Services</h2>
                <h2 className='mr-5'>Upcoming Packages</h2>
            </div>
            <div>
                <button className=' p-2 text-white rounded-md bg-[#DF6951]'>Get In Touch</button>
            </div>

            
        </div> 

    </div>
   
    </>
  )
}

export default Dashboard