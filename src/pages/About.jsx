import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500 '>
        <p>ABOUT <span className='text-gray-700 front-medium'>US</span></p>

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12 '>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welsome to prescripto , you have to trust the partner in managing your health cause he is your partner so today is my birthday and yersterday i was happy because today was going to be my birthday , but today is my birthday and i am not happy cause my birthday is today and today will became memory...</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit tempore labore nesciunt atque? Earum cumque atque modi voluptates dolore laboriosam nesciunt, perspiciatis tempora asperiores repudiandae rerum rem fugiat omnis. is today and today will became memory...</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fugit quidem delectus nihil nostrum rerum eum consectetur totam amet neque aut deleniti, laboriosam impedit ipsum. Tempore quisquam quo magni veritatis.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span> CHOOSE US </span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border  px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all- duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Lorem ipsum dolor sit amet consectetur s voluptates.</p>

        </div>
        <div className='border  px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all- duration-300 text-gray-600 cursor-pointer'>
          <b>Convinience:</b>
          <p>ipsum dolor sit amet consectetur s voluptates.</p>
        </div>
        <div className='border  px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all- duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>ipsum dolor sit ame Lorem ipsum dolor sit amets voluptates.</p>
        </div>
      </div>

    </div>
  )
}

export default About