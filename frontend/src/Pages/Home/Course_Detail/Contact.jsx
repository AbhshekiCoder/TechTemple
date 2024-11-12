import React from 'react'
import ContactUsImg from '../../../assets/ContactUsImg.png'

export default function Contact() {
  return (
    <div className='flex mt-12' style={{backgroundColor:'#F7F7F7'}}>
    <div className='w-1/2 ml-16 mt-20'>
        <div className='font-extrabold' style={{fontSize:'50px'}}>
            <p text>Contact Us</p>
        </div>
        <div className='mt-10 '>
            <input className='' type="text" />
            </div>
        <div className='mt-10'>
            <input className='border' type="text" />
            </div>
        <div className='mt-10'>
            <input className ='border' type="text" />
        </div>
    </div>

    <div className='w-1/2 mt-16 mb-12 flex justify-end items-center '>
        <div>
            <img src={ContactUsImg} alt="" />
        </div>
    </div>
</div>
  )
}
