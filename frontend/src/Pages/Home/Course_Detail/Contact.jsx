import React from 'react'
import ContactUsImg from '../../../assets/ContactUsImg.png'

export default function Contact() {
  return (
    <div className='flex mt-10 w-full' style={{backgroundColor:'#F7F7F7'}}>
    <div className='w-1/2 ml-20 mt-20 border-2 border-black'>
        <div className='font-extrabold' style={{fontSize:'50px'}}>
            <p text>Contact Us</p>
        </div>
        <div className='mt-10'>
            <input className='max-w-60' placeholder='' type="text" />
            </div>
        <div className='mt-10'>
            <input className='border' type="text" />
            </div>
        <div className='mt-10'>
            <input className ='border' type="text" />
        </div>
    </div>

    <div className='w-1/2  flex justify-end items-center '>
        <div>
            <img src={ContactUsImg} alt="" />
        </div>
    </div>
</div>
  )
}
