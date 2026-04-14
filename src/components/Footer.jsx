import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* ------left section ho yo ---- */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat aliquam praesentium quaerat voluptate voluptatum rerum, a ut possimus necessitatibus cumque, doloribus incidunt voluptas tempora voluptates? Dolorem ab maxime quaerat dolor!
                Assumenda, architecto vel quia nostrum illo et a modi.</p>
            </div>

            {/* ------center section ho yo ---- */}
            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>


            {/* ------right section ho yo ---- */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+977 9817062940</li>
                    <li>sagaradhikaricode@gmail.com</li>
                </ul>
            </div>

        </div>
        <div>
            {/* ------Copyright hahah ------ */}
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2026 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer