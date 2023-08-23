import React from 'react'
import {AiOutlineClose,AiOutlineCheckCircle} from 'react-icons/ai'
import {BiDownArrowAlt} from 'react-icons/bi'
import {IoIosAddCircleOutline} from 'react-icons/io'
import man from '../assets/man.png'

const Payment = () => {
  return (
    <div className='w-screen h-screen flex items-center bg-gray-200'>

        <div className='shadow-md mx-auto p-3 bg-white '>
            <div className='flex justify-between items-center  mb-6'>
                <h1 className='text-gray-500'>Sending Money</h1>
                <AiOutlineClose size={20}/>


            </div>
            <h1 className='font-medium mb-2'>How much would you like to send?</h1>

            <input type="text" placeholder='100.00' className='border border-gray-400 rounded-md p-2 w-full mb-6' />
            <div className='flex flex-row space-x-2 justify-between p-1' >

                <h1 className='border p-3 rounded-md'>$10.00</h1>
                <h1 className='border p-3 rounded-md'>$50.00</h1>
                <h1 className='border border-green-700 p-3 rounded-md '>$100.00</h1>
                <h1 className='border p-3 rounded-md'>$500.00</h1>

            </div>
            <h1 className='font-medium mt-3'>From</h1>
            <div className='bg-gray-100 p-3 flex flex-row justify-between mb-6'>
                <div className='flex items-center'>
                <AiOutlineCheckCircle size={30} className='text-green-800 mr-1'/>
                    <h1 className='font-medium'>Checking</h1>
                </div>
                <div className='flex items-center'>
                    <h1 className='text-gray-500'>card ending in 6678</h1>
                    <BiDownArrowAlt size={20}/>
                </div>

            </div>
            <div className='flex justify-between mt-3'>
                <h1 className='font-medium'>Reciving</h1>
                <div className='flex flex-row items-center text-green-800 font-bold'>
                <IoIosAddCircleOutline size={20} className='mr-1'/>
                <h1 >Add Recipent</h1>
                </div>
            </div>
            <div className='bg-gray-100 flex  p-3 mt-3 mb-6'>
               
                    <img src={man} className='w-12' alt="" />
                    <div>
                        <h1 className='font-medium '>Kathy Miller</h1>
                        <h1 className='text-gray-500'>@KittyKatmills</h1>
                    </div>

                </div>
                <button className='bg-green-700 rounded-md w-full p-2 font-semibold text-white'>Send $100.00</button>
        </div>

    </div>
  )
}

export default Payment