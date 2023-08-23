import React from 'react'
import guidedtours from '../assets/tour-guide.png'
import travelling from '../assets/travelling.png'
import medical from '../assets/medical-team.png'
import hands from '../assets/hands.png'
import rectangle from '../assets/Rectangle .png'


const Category = () => {
    return (
        <div className='w-[full] p-4 mt-[100px] relative'>

            <div className='flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-[#DF6951] text-xl  font-medium'>CATEGORY</h1>
                    <h1 className='font-bold text-[#181E4B] text-5xl mt-3'>We Offer Best Services</h1>              
                </div>
            </div>
            {/* Tour Guide */}

            <div className='flex flex-row  justify-evenly mt-8'>

            <div className='flex items-center'>
                <div className='w-[200px] flex flex-col items-center justify-center gap-4'>
                    <img src={guidedtours} alt="" />
                    <h1 className='font-bold text-xl'>Guided Tours</h1>
                    <h1 className='text-[#5E6282]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. , quo.</h1>
                </div>

            </div>
            <div className='flex items-center shadow-xl rounded-3xl p-10 z-50'>
                <div className='w-[200px] flex flex-col items-center justify-center gap-4 '>
                    <img src={travelling} alt="" />
                    <h1 className='font-bold text-xl'>Best Flights Options</h1>
                    <h1 className='text-[#5E6282]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. , quo.</h1>
                </div>

            </div>
            <div className='flex items-center'>
                <div className='w-[200px] flex flex-col items-center justify-center gap-4'>
                    <img src={guidedtours} alt="" />
                    <h1 className='font-bold text-xl'>Religious Tours</h1>
                    <h1 className='text-[#5E6282]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. , quo.</h1>
                </div>

            </div>
            <div className='flex items-center'>
                <div className='w-[200px] flex flex-col items-center justify-center gap-4'>
                    <img src={guidedtours} alt="" />
                    <h1 className='font-bold text-xl'>Medical Insurance</h1>
                    <h1 className='text-[#5E6282]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. , quo.</h1>
                </div>

            </div>
            </div>
            <div className='absolute top-[400px] left-[550px] -z-50'>
            <img src={rectangle} alt="" />

            </div>
        </div>

    )
}

export default Category