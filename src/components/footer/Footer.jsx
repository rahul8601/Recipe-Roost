import React from 'react'
import AppLogo from '../../assets/applogo.png'
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
  } from "react-icons/fa";

const Footer = () => {
  return (
  <div className=' bg-[#151515] py-4'> 
    <div className=' max-w-[1320px] m-auto' >
        <div className=' grid grid-cols-1 gap-y-[10px] sm-mob:grid-cols-2	  sm:grid-cols-4 items-center justify-between justify-items-center'>

       <div className='pl-[64px]'>  
      <div className='cursor-pointer  flex flex-col items-center w-[126px] drop-shadow-[0_1px_3px_#FF9F39]'>
        <img src={AppLogo} alt="" className='w-[62px] h-[36px] relative top-1 '/>
        <p className='font-bold font-sans text-lg relative bottom-1'>RECIPE ROOST</p>
      </div>
      
        <p className='flex items-center text-[#636363]'><MdEmail className='mr-2'/> <span>info@foodexpress.com</span></p>
        <p className='flex items-center text-[#636363]'><IoCall className='mr-2'/> <span>910 468 587 1235</span></p>
        <p className='flex items-center text-[#636363]'><IoLocationSharp className='mr-2'/> <span>6th floor, NYC</span></p>
      </div>

      <div className='text-[#636363]'>
        <h1 className='text-xl font-bold pb-3 text-gray-300'>Our Menu</h1>
        <p>Breakfast</p>
        <p>Lunch</p>
        <p>Dinner</p>
      </div>

      <div className='text-[#636363]'>
        <h1 className='text-xl font-bold pb-3 text-gray-300'>Information</h1>
        <p>About Us</p>
        <p>Testimonials </p>
        <p>Blog</p>
      </div>

         <div className='text-[#636363] '>
        <h1 className='text-xl font-bold pb-3 text-gray-300'>Useful Links</h1>
         <p>Service</p>
         <p>Help & Support</p>
         <p>Term & Conditions</p>
          </div>
      </div>


      <div className="flex items-center justify-center gap-3 p-10">
          <span className="w-[50px] h-[50px] bg-[#333333] cursor-pointer rounded-full items-center justify-center flex text-white  duration-200  hover:drop-shadow-[0_0px_4px_#FF9F39] hover:text-[#FF9F39]">
            <FaFacebookF className=''/>
          </span>
          <span className="w-[50px] h-[50px] bg-[#333333] cursor-pointer rounded-full items-center justify-center flex text-white duration-200 hover:drop-shadow-[0_0px_4px_#FF9F39] hover:text-[#FF9F39]">
            <FaInstagram />
          </span>
          <span className="w-[50px] h-[50px] bg-[#333333] cursor-pointer rounded-full items-center justify-center flex text-white duration-200 hover:drop-shadow-[0_0px_4px_#FF9F39] hover:text-[#FF9F39]">
            <FaTwitter />
          </span>
          <span className="w-[50px] h-[50px] bg-[#333333] cursor-pointer rounded-full items-center justify-center flex text-white duration-200 hover:drop-shadow-[0_0px_4px_#FF9F39] hover:text-[#FF9F39]">
            <FaLinkedin />
          </span>
        </div>
    </div>
    </div>
  )
}

export default Footer
