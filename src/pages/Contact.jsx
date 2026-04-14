import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'
const Contact = () => {



  return (
    <div>
        <div className='text-center text-2xl pt-10 text-gray-500'>
          <p>CONTACT <span>US</span></p>
        </div>

        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
          <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

          <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-lg text-gray-600'>Our Office</p>
            <p className='text-gray-500'>52713 Bhadrapur <br /> Hospital Mode, NEPAL</p>
            <p className='text-gray-500'>phone: +977 9817062940 <br /> Email: sagaradhikaricode@gmail.com</p>
            <p className='font-semibold text-lg text-gray-600'>Careers at PRESCRIPTO</p>
            <p className='text-gray-500'>Learn more about out teams and job opening</p>
            <button  className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore jobs</button>
          </div>
        </div>
    </div>
  )
}

export default Contact