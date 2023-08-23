import React from 'react'
import emirates from '../assets/emirates.png'
import swiss from '../assets/swiss.png'



const Company = () => {
  return (
    <div className='w-full bg-[#F7F7F7] flex items-center justify-evenly p-[70px]'>
        
            <img src={emirates} alt="" />
            <img src={swiss} alt="" />
            <img src={emirates} alt="" />
            <img src={swiss} alt="" />

       
    </div>
  )
}

export default Company