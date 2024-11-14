import React, { useState } from 'react'
import HidebarImg from '../../assets/Hidebar.png'
import CourseImage from '../../assets/CourseImage.png'
import ReviewProfile from '../../assets/ReviewProfile.png'
import ReviewProfile1 from '../../assets/ReviewProfile1.png'
import ReviewProfile2 from '../../assets/ReviewProfile2.png'
import ReviewProfile3 from '../../assets/ReviewProfile3.png'
import ContactUsImg from '../../assets/ContactUsImg.png'

import { SwiperSlide, Swiper } from 'swiper/react'
import {Autoplay, EffectCards, Thumbs, Pagination, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import CoursesNavbar from './Course_Detail/CoursesNavbar'
import Review from './Course_Detail/Review'
import Contact from './Course_Detail/Contact'
export default function Course_detail() {
    const [show, setShow] = useState(false)
    function ShowBar(){
        setShow(true)
    }
    function Hidebar(){
        setShow(false)
    }
    
  return (
    <>
     <div className='MainContainer'>
    <div className='w-full bg-white'>
        <div className='font-extrabold text-gray-950' style={{fontSize:'50px'}}>
            <p>All The Skills You Need In One Place</p>
        </div>
        <div>
            <p className='text-gray-500 mt-2'style={{fontSize:'23px',fontWeight:'500'}}>From critical skills to technical topics, Tech Temple support your professional development</p>
        </div>
        <div className='border-b-2 border-gray-400 mt-4'></div>
    </div>

    {/* Courses */}
    <div className='w-full'>

      
        
        {/* Courses Info */}
        <CoursesNavbar/>
       
        
        {/*  */}
        <div className='w-full bg-white'>
            <div className=' mt-24 text-black font-extrabold' style={{fontSize:'50px'}}>
                <p>Accelerate growth — for you or your organization</p>
            </div>
            <div>
                <p className='text-gray-500 mt-2'style={{fontSize:'23px',fontWeight:'500'}}>Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more.</p>
            </div>
        </div>
        
        {/*  */}
        <div className='max-w-full'>
            {/* Cards */}
        </div>

        {/* Review */}
      <Review/>

        {/* Contact Us */}
       

    </div>
    </div>
    <Contact/>
    </>
  )
}
