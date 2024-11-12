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
    <div className='w-full bg-white'>
        <div className=' text-black font-extrabold' style={{fontSize:'50px'}}>
            <p>All The Skills You Need In One Place</p>
        </div>
        <div>
            <p className='text-gray-500 mt-2'style={{fontSize:'23px',fontWeight:'500'}}>From critical skills to technical topics, Tech Temple support your professional development</p>
        </div>
        <div className='border-b-2 border-gray-400 mt-4'></div>
    </div>

    {/* Courses */}
    <div className='w-full'>

        {/* Courses Navbar */}
        <div className='w-full mt-12'>
            <div className={`w-11/12 h-10 flex items-center  ${show?'justify-between':'justify-evenly'} pl-3 m-auto rounded-full`} style={{boxShadow:' rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px'}}>
                {/* Nav Feilds */}
                {(!show && <div className='Nav-Fields flex justify-between  text-gray-600 font-bold flex-nowrap whitespace-nowrap ' style={{fontSize:'16px'}}>
                    <div className=' rounded-full hover:bg-purple-400 hover:text-white '>
                        <a className='hover:no-underline h-fit hover:text-white'href="#">Programming Language</a>
                    </div>
                    <div className='rounded-full hover:bg-purple-400 hover:text-white '>
                        <a className='hover:no-underline h-fit hover:text-white 'href="#">Programming Language</a>
                    </div>
                    <div className='rounded-full hover:bg-purple-400 hover:text-white '>
                        <a className='hover:no-underline h-fit hover:text-white ' href="#">Software Testing</a>
                    </div>
                    <div className='rounded-full hover:bg-purple-400 hover:text-white '>
                        <a className='hover:no-underline h-fit hover:text-white ' href="#">Mobile Developement</a>
                    </div>
                    <div className='rounded-full hover:bg-purple-400 hover:text-white '>
                        <a className='hover:no-underline h-fit hover:text-white ' href="#">Data Science</a>
                    </div>
                    <div className='rounded-full hover:bg-purple-400 hover:text-white '>
                        <a className='hover:no-underline h-fit hover:text-white ' href="#">Software Engineering</a>
                    </div>
                    <div className='rounded-full hover:bg-purple-400 hover:text-white '>
                        <a className='hover:no-underline h-fit hover:text-white ' href="#">Web Development</a>
                    </div>
                </div>)}

                <div className='flex items-center h-full border-blue-700 ' >
                    {/* Hide/Show Search Bar */}
                {(  show && <div className='ml-1'>
                    <img src={HidebarImg} className='h-6 w-6' onClick={Hidebar} alt="" />
                </div>     
                )}
                {(  show && <div className='ml-10'>
                    <div>
                        <input type="text"  className='pl-2 text-gray-900 placeholder-gray-500  rounded-md outline-none'placeholder='Search' style={{width:'900px',height:'33px',border:'solid 2px #676767'}} />
                    </div>
                </div>

                )}
                </div>
                {/* Search Icon */}
                <div className={`C-nav-SearchBar flex items-center ${show?'mr-8':'ml-7 mr-5'}`}>
                    <i className='fa-solid fa-magnifying-glass cursor-pointer text-lg rounded-full hover:bg-purple-100 pl-2 pr-2 pb-0.5 pt-0.5' onClick={ShowBar}></i>
                </div>
            </div>
        </div>
        
        {/* Courses Info */}
        <div className='m-auto max-md:p-6  mt-16' style={{maxWidth:'1400px'}}>
        <Swiper modules={[ Autoplay, Thumbs,  Navigation]}  followFinger={true} grabCursor={true} simulateTouch={true} spaceBetween={30} breakpoints = {{469: {slidesPerView: 1}, 768: {slidesPerView: 2}, 1240: {slidesPerView:3}}} 
         autoplay={{ delay: 3000,  disableOnInteraction: false,  }}   className="w-full  h-fit mt-6  z-0  max-md:pr-6 "> 
           <SwiperSlide className='' >
    
            {/*Selected Feild Course 1 */}
                <div className='border flex rounded-2xl ' style={{width: '100%',height:'230px',backgroundColor:'#EDEDED'}}>
                    <div className='max-w-1/3 h-full '>
                        <img src={CourseImage} className='w-full h-full rounded-tl-2xl rounded-bl-2xl' alt="" />
                    </div>
                        {/* details */}
                    <div className='w-2/3 h-full'>
                        <div className='ml-6 mt-2.5'>
                            <p className='text-xl font-bold  '>Java</p>
                        </div>
                        <div className='ml-6 mt-2 mr-3 mb-1 'style={{color:'#49454F'}}>
                            <p>Lorem ipsum dolor sit amet , adipisi elit. Reprehenderit, inventore debitis temporibus nihil optio, ullam debitis temporibus nihil optio, ullam
                            </p>
                        </div>
                        <div className='flex justify-end 'style={{marginTop:'20px'}}>
                            <div>
                                <button className='w-20 rounded-full text-center text-black font-semibold bg-purple-300 mr-3' style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Preview</button>
                            </div>
                            <div>
                                <button className='w-24 rounded-full text-center text-white bg-purple-700 mr-4'style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div >

            {/*Selected Feild Course 2 */}
              
        

           </SwiperSlide>
           <SwiperSlide >
    
            {/*Selected Feild Course 1 */}
                <div className='border flex rounded-2xl ' style={{width: '100%',height:'230px',backgroundColor:'#EDEDED'}}>
                    <div className='max-w-1/3 h-full '>
                        <img src={CourseImage} className='w-full h-full rounded-tl-2xl rounded-bl-2xl' alt="" />
                    </div>
                        {/* details */}
                    <div className='w-2/3 h-full'>
                        <div className='ml-6 mt-2.5'>
                            <p className='text-xl font-bold  '>Java</p>
                        </div>
                        <div className='ml-6 mt-2 mr-3 mb-1 'style={{color:'#49454F'}}>
                            <p>Lorem ipsum dolor sit amet , adipisi elit. Reprehenderit, inventore debitis temporibus nihil optio, ullam debitis temporibus nihil optio, ullam
                            </p>
                        </div>
                        <div className='flex justify-end 'style={{marginTop:'20px'}}>
                            <div>
                                <button className='w-20 rounded-full text-center text-black font-semibold bg-purple-300 mr-3' style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Preview</button>
                            </div>
                            <div>
                                <button className='w-24 rounded-full text-center text-white bg-purple-700 mr-4'style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div >

            {/*Selected Feild Course 2 */}
              
        

           </SwiperSlide>
           
           <SwiperSlide >
    
    {/*Selected Feild Course 1 */}
        <div className='border flex rounded-2xl ' style={{width: '100%',height:'230px',backgroundColor:'#EDEDED'}}>
            <div className='max-w-1/3 h-full '>
                <img src={CourseImage} className='w-full h-full rounded-tl-2xl rounded-bl-2xl' alt="" />
            </div>
                {/* details */}
            <div className='w-2/3 h-full'>
                <div className='ml-6 mt-2.5'>
                    <p className='text-xl font-bold  '>Java</p>
                </div>
                <div className='ml-6 mt-2 mr-3 mb-1 'style={{color:'#49454F'}}>
                    <p>Lorem ipsum dolor sit amet , adipisi elit. Reprehenderit, inventore debitis temporibus nihil optio, ullam debitis temporibus nihil optio, ullam
                    </p>
                </div>
                <div className='flex justify-end 'style={{marginTop:'20px'}}>
                    <div>
                        <button className='w-20 rounded-full text-center text-black font-semibold bg-purple-300 mr-3' style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Preview</button>
                    </div>
                    <div>
                        <button className='w-24 rounded-full text-center text-white bg-purple-700 mr-4'style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div >

    {/*Selected Feild Course 2 */}
      


           </SwiperSlide>
   
          <SwiperSlide >
    
    {/*Selected Feild Course 1 */}
        <div className='border flex rounded-2xl ' style={{width: '100%',height:'230px',backgroundColor:'#EDEDED'}}>
            <div className='max-w-1/3 h-full '>
                <img src={CourseImage} className='w-full h-full rounded-tl-2xl rounded-bl-2xl' alt="" />
            </div>
                {/* details */}
            <div className='w-2/3 h-full'>
                <div className='ml-6 mt-2.5'>
                    <p className='text-xl font-bold  '>Java</p>
                </div>
                <div className='ml-6 mt-2 mr-3 mb-1 'style={{color:'#49454F'}}>
                    <p>Lorem ipsum dolor sit amet , adipisi elit. Reprehenderit, inventore debitis temporibus nihil optio, ullam debitis temporibus nihil optio, ullam
                    </p>
                </div>
                <div className='flex justify-end 'style={{marginTop:'20px'}}>
                    <div>
                        <button className='w-20 rounded-full text-center text-black font-semibold bg-purple-300 mr-3' style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Preview</button>
                    </div>
                    <div>
                        <button className='w-24 rounded-full text-center text-white bg-purple-700 mr-4'style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div >

    {/*Selected Feild Course 2 */}
      


          </SwiperSlide>
          <SwiperSlide >
    
    {/*Selected Feild Course 1 */}
        <div className='border flex rounded-2xl ' style={{width: '100%',height:'230px',backgroundColor:'#EDEDED'}}>
            <div className='max-w-1/3 h-full '>
                <img src={CourseImage} className='w-full h-full rounded-tl-2xl rounded-bl-2xl' alt="" />
            </div>
                {/* details */}
            <div className='w-2/3 h-full'>
                <div className='ml-6 mt-2.5'>
                    <p className='text-xl font-bold  '>Java</p>
                </div>
                <div className='ml-6 mt-2 mr-3 mb-1 'style={{color:'#49454F'}}>
                    <p>Lorem ipsum dolor sit amet , adipisi elit. Reprehenderit, inventore debitis temporibus nihil optio, ullam debitis temporibus nihil optio, ullam
                    </p>
                </div>
                <div className='flex justify-end 'style={{marginTop:'20px'}}>
                    <div>
                        <button className='w-20 rounded-full text-center text-black font-semibold bg-purple-300 mr-3' style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Preview</button>
                    </div>
                    <div>
                        <button className='w-24 rounded-full text-center text-white bg-purple-700 mr-4'style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div >

    {/*Selected Feild Course 2 */}
      


   </SwiperSlide>
   <SwiperSlide >

    {/*Selected Feild Course 1 */}
        <div className='border flex rounded-2xl ' style={{width: '100%',height:'230px',backgroundColor:'#EDEDED'}}>
            <div className='max-w-1/3 h-full '>
                <img src={CourseImage} className='w-full h-full rounded-tl-2xl rounded-bl-2xl' alt="" />
            </div>
                {/* details */}
            <div className='w-2/3 h-full'>
                <div className='ml-6 mt-2.5'>
                    <p className='text-xl font-bold  '>Java</p>
                </div>
                <div className='ml-6 mt-2 mr-3 mb-1 'style={{color:'#49454F'}}>
                    <p>Lorem ipsum dolor sit amet , adipisi elit. Reprehenderit, inventore debitis temporibus nihil optio, ullam debitis temporibus nihil optio, ullam
                    </p>
                </div>
                <div className='flex justify-end 'style={{marginTop:'20px'}}>
                    <div>
                        <button className='w-20 rounded-full text-center text-black font-semibold bg-purple-300 mr-3' style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Preview</button>
                    </div>
                    <div>
                        <button className='w-24 rounded-full text-center text-white bg-purple-700 mr-4'style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div >

    {/*Selected Feild Course 2 */}
      


   </SwiperSlide>
   
   <SwiperSlide >

{/*Selected Feild Course 1 */}
<div className='border flex rounded-2xl ' style={{width: '100%',height:'230px',backgroundColor:'#EDEDED'}}>
    <div className='max-w-1/3 h-full '>
        <img src={CourseImage} className='w-full h-full rounded-tl-2xl rounded-bl-2xl' alt="" />
    </div>
        {/* details */}
    <div className='w-2/3 h-full'>
        <div className='ml-6 mt-2.5'>
            <p className='text-xl font-bold  '>Java</p>
        </div>
        <div className='ml-6 mt-2 mr-3 mb-1 'style={{color:'#49454F'}}>
            <p>Lorem ipsum dolor sit amet , adipisi elit. Reprehenderit, inventore debitis temporibus nihil optio, ullam debitis temporibus nihil optio, ullam
            </p>
        </div>
        <div className='flex justify-end 'style={{marginTop:'20px'}}>
            <div>
                <button className='w-20 rounded-full text-center text-black font-semibold bg-purple-300 mr-3' style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Preview</button>
            </div>
            <div>
                <button className='w-24 rounded-full text-center text-white bg-purple-700 mr-4'style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Buy Now</button>
            </div>
        </div>
    </div>
</div >

{/*Selected Feild Course 2 */}



   </SwiperSlide>

  <SwiperSlide >

{/*Selected Feild Course 1 */}
<div className='border flex rounded-2xl ' style={{width: '100%',height:'230px',backgroundColor:'#EDEDED'}}>
    <div className='max-w-1/3 h-full '>
        <img src={CourseImage} className='w-full h-full rounded-tl-2xl rounded-bl-2xl' alt="" />
    </div>
        {/* details */}
    <div className='w-2/3 h-full'>
        <div className='ml-6 mt-2.5'>
            <p className='text-xl font-bold  '>Java</p>
        </div>
        <div className='ml-6 mt-2 mr-3 mb-1 'style={{color:'#49454F'}}>
            <p>Lorem ipsum dolor sit amet , adipisi elit. Reprehenderit, inventore debitis temporibus nihil optio, ullam debitis temporibus nihil optio, ullam
            </p>
        </div>
        <div className='flex justify-end 'style={{marginTop:'20px'}}>
            <div>
                <button className='w-20 rounded-full text-center text-black font-semibold bg-purple-300 mr-3' style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Preview</button>
            </div>
            <div>
                <button className='w-24 rounded-full text-center text-white bg-purple-700 mr-4'style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Buy Now</button>
            </div>
        </div>
    </div>
</div >

{/*Selected Feild Course 2 */}



  </SwiperSlide>
  <SwiperSlide >
    
    {/*Selected Feild Course 1 */}
        <div className='border flex rounded-2xl ' style={{width: '100%',height:'230px',backgroundColor:'#EDEDED'}}>
            <div className='max-w-1/3 h-full '>
                <img src={CourseImage} className='w-full h-full rounded-tl-2xl rounded-bl-2xl' alt="" />
            </div>
                {/* details */}
            <div className='w-2/3 h-full'>
                <div className='ml-6 mt-2.5'>
                    <p className='text-xl font-bold  '>Java</p>
                </div>
                <div className='ml-6 mt-2 mr-3 mb-1 'style={{color:'#49454F'}}>
                    <p>Lorem ipsum dolor sit amet , adipisi elit. Reprehenderit, inventore debitis temporibus nihil optio, ullam debitis temporibus nihil optio, ullam
                    </p>
                </div>
                <div className='flex justify-end 'style={{marginTop:'20px'}}>
                    <div>
                        <button className='w-20 rounded-full text-center text-black font-semibold bg-purple-300 mr-3' style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Preview</button>
                    </div>
                    <div>
                        <button className='w-24 rounded-full text-center text-white bg-purple-700 mr-4'style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div >

    {/*Selected Feild Course 2 */}
      


   </SwiperSlide>
   <SwiperSlide >

    {/*Selected Feild Course 1 */}
        <div className='border flex rounded-2xl ' style={{width: '100%',height:'230px',backgroundColor:'#EDEDED'}}>
            <div className='max-w-1/3 h-full '>
                <img src={CourseImage} className='w-full h-full rounded-tl-2xl rounded-bl-2xl' alt="" />
            </div>
                {/* details */}
            <div className='w-2/3 h-full'>
                <div className='ml-6 mt-2.5'>
                    <p className='text-xl font-bold  '>Java</p>
                </div>
                <div className='ml-6 mt-2 mr-3 mb-1 'style={{color:'#49454F'}}>
                    <p>Lorem ipsum dolor sit amet , adipisi elit. Reprehenderit, inventore debitis temporibus nihil optio, ullam debitis temporibus nihil optio, ullam
                    </p>
                </div>
                <div className='flex justify-end 'style={{marginTop:'20px'}}>
                    <div>
                        <button className='w-20 rounded-full text-center text-black font-semibold bg-purple-300 mr-3' style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Preview</button>
                    </div>
                    <div>
                        <button className='w-24 rounded-full text-center text-white bg-purple-700 mr-4'style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div >

    {/*Selected Feild Course 2 */}
      


   </SwiperSlide>
   
   <SwiperSlide >

{/*Selected Feild Course 1 */}
<div className='border flex rounded-2xl ' style={{width: '100%',height:'230px',backgroundColor:'#EDEDED'}}>
    <div className='max-w-1/3 h-full '>
        <img src={CourseImage} className='w-full h-full rounded-tl-2xl rounded-bl-2xl' alt="" />
    </div>
        {/* details */}
    <div className='w-2/3 h-full'>
        <div className='ml-6 mt-2.5'>
            <p className='text-xl font-bold  '>Java</p>
        </div>
        <div className='ml-6 mt-2 mr-3 mb-1 'style={{color:'#49454F'}}>
            <p>Lorem ipsum dolor sit amet , adipisi elit. Reprehenderit, inventore debitis temporibus nihil optio, ullam debitis temporibus nihil optio, ullam
            </p>
        </div>
        <div className='flex justify-end 'style={{marginTop:'20px'}}>
            <div>
                <button className='w-20 rounded-full text-center text-black font-semibold bg-purple-300 mr-3' style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Preview</button>
            </div>
            <div>
                <button className='w-24 rounded-full text-center text-white bg-purple-700 mr-4'style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Buy Now</button>
            </div>
        </div>
    </div>
</div >

{/*Selected Feild Course 2 */}



   </SwiperSlide>

  <SwiperSlide >

{/*Selected Feild Course 1 */}
<div className='border flex rounded-2xl ' style={{width: '100%',height:'230px',backgroundColor:'#EDEDED'}}>
    <div className='max-w-1/3 h-full '>
        <img src={CourseImage} className='w-full h-full rounded-tl-2xl rounded-bl-2xl' alt="" />
    </div>
        {/* details */}
    <div className='w-2/3 h-full'>
        <div className='ml-6 mt-2.5'>
            <p className='text-xl font-bold  '>Java</p>
        </div>
        <div className='ml-6 mt-2 mr-3 mb-1 'style={{color:'#49454F'}}>
            <p>Lorem ipsum dolor sit amet , adipisi elit. Reprehenderit, inventore debitis temporibus nihil optio, ullam debitis temporibus nihil optio, ullam
            </p>
        </div>
        <div className='flex justify-end 'style={{marginTop:'20px'}}>
            <div>
                <button className='w-20 rounded-full text-center text-black font-semibold bg-purple-300 mr-3' style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Preview</button>
            </div>
            <div>
                <button className='w-24 rounded-full text-center text-white bg-purple-700 mr-4'style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Buy Now</button>
            </div>
        </div>
    </div>
</div >

{/*Selected Feild Course 2 */}



  </SwiperSlide>
  <SwiperSlide >
    
    {/*Selected Feild Course 1 */}
        <div className='border flex rounded-2xl ' style={{width: '100%',height:'230px',backgroundColor:'#EDEDED'}}>
            <div className='max-w-1/3 h-full '>
                <img src={CourseImage} className='w-full h-full rounded-tl-2xl rounded-bl-2xl' alt="" />
            </div>
                {/* details */}
            <div className='w-2/3 h-full'>
                <div className='ml-6 mt-2.5'>
                    <p className='text-xl font-bold  '>Java</p>
                </div>
                <div className='ml-6 mt-2 mr-3 mb-1 'style={{color:'#49454F'}}>
                    <p>Lorem ipsum dolor sit amet , adipisi elit. Reprehenderit, inventore debitis temporibus nihil optio, ullam debitis temporibus nihil optio, ullam
                    </p>
                </div>
                <div className='flex justify-end 'style={{marginTop:'20px'}}>
                    <div>
                        <button className='w-20 rounded-full text-center text-black font-semibold bg-purple-300 mr-3' style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Preview</button>
                    </div>
                    <div>
                        <button className='w-24 rounded-full text-center text-white bg-purple-700 mr-4'style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div >

    {/*Selected Feild Course 2 */}
      


   </SwiperSlide>
   <SwiperSlide >

    {/*Selected Feild Course 1 */}
        <div className='border flex rounded-2xl ' style={{width: '100%',height:'230px',backgroundColor:'#EDEDED'}}>
            <div className='max-w-1/3 h-full '>
                <img src={CourseImage} className='w-full h-full rounded-tl-2xl rounded-bl-2xl' alt="" />
            </div>
                {/* details */}
            <div className='w-2/3 h-full'>
                <div className='ml-6 mt-2.5'>
                    <p className='text-xl font-bold  '>Java</p>
                </div>
                <div className='ml-6 mt-2 mr-3 mb-1 'style={{color:'#49454F'}}>
                    <p>Lorem ipsum dolor sit amet , adipisi elit. Reprehenderit, inventore debitis temporibus nihil optio, ullam debitis temporibus nihil optio, ullam
                    </p>
                </div>
                <div className='flex justify-end 'style={{marginTop:'20px'}}>
                    <div>
                        <button className='w-20 rounded-full text-center text-black font-semibold bg-purple-300 mr-3' style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Preview</button>
                    </div>
                    <div>
                        <button className='w-24 rounded-full text-center text-white bg-purple-700 mr-4'style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div >

    {/*Selected Feild Course 2 */}
      


   </SwiperSlide>
   
   <SwiperSlide >

{/*Selected Feild Course 1 */}
<div className='border flex rounded-2xl ' style={{width: '100%',height:'230px',backgroundColor:'#EDEDED'}}>
    <div className='max-w-1/3 h-full '>
        <img src={CourseImage} className='w-full h-full rounded-tl-2xl rounded-bl-2xl' alt="" />
    </div>
        {/* details */}
    <div className='w-2/3 h-full'>
        <div className='ml-6 mt-2.5'>
            <p className='text-xl font-bold  '>Java</p>
        </div>
        <div className='ml-6 mt-2 mr-3 mb-1 'style={{color:'#49454F'}}>
            <p>Lorem ipsum dolor sit amet , adipisi elit. Reprehenderit, inventore debitis temporibus nihil optio, ullam debitis temporibus nihil optio, ullam
            </p>
        </div>
        <div className='flex justify-end 'style={{marginTop:'20px'}}>
            <div>
                <button className='w-20 rounded-full text-center text-black font-semibold bg-purple-300 mr-3' style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Preview</button>
            </div>
            <div>
                <button className='w-24 rounded-full text-center text-white bg-purple-700 mr-4'style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Buy Now</button>
            </div>
        </div>
    </div>
</div >

{/*Selected Feild Course 2 */}



   </SwiperSlide>

  <SwiperSlide >

{/*Selected Feild Course 1 */}
<div className='border flex rounded-2xl ' style={{width: '100%',height:'230px',backgroundColor:'#EDEDED'}}>
    <div className='max-w-1/3 h-full '>
        <img src={CourseImage} className='w-full h-full rounded-tl-2xl rounded-bl-2xl' alt="" />
    </div>
        {/* details */}
    <div className='w-2/3 h-full'>
        <div className='ml-6 mt-2.5'>
            <p className='text-xl font-bold  '>Java</p>
        </div>
        <div className='ml-6 mt-2 mr-3 mb-1 'style={{color:'#49454F'}}>
            <p>Lorem ipsum dolor sit amet , adipisi elit. Reprehenderit, inventore debitis temporibus nihil optio, ullam debitis temporibus nihil optio, ullam
            </p>
        </div>
        <div className='flex justify-end 'style={{marginTop:'20px'}}>
            <div>
                <button className='w-20 rounded-full text-center text-black font-semibold bg-purple-300 mr-3' style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Preview</button>
            </div>
            <div>
                <button className='w-24 rounded-full text-center text-white bg-purple-700 mr-4'style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Buy Now</button>
            </div>
        </div>
    </div>
</div >

{/*Selected Feild Course 2 */}



  </SwiperSlide>
  <SwiperSlide >
    
    {/*Selected Feild Course 1 */}
        <div className='border flex rounded-2xl ' style={{width: '100%',height:'230px',backgroundColor:'#EDEDED'}}>
            <div className='max-w-1/3 h-full '>
                <img src={CourseImage} className='w-full h-full rounded-tl-2xl rounded-bl-2xl' alt="" />
            </div>
                {/* details */}
            <div className='w-2/3 h-full'>
                <div className='ml-6 mt-2.5'>
                    <p className='text-xl font-bold  '>Java</p>
                </div>
                <div className='ml-6 mt-2 mr-3 mb-1 'style={{color:'#49454F'}}>
                    <p>Lorem ipsum dolor sit amet , adipisi elit. Reprehenderit, inventore debitis temporibus nihil optio, ullam debitis temporibus nihil optio, ullam
                    </p>
                </div>
                <div className='flex justify-end 'style={{marginTop:'20px'}}>
                    <div>
                        <button className='w-20 rounded-full text-center text-black font-semibold bg-purple-300 mr-3' style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Preview</button>
                    </div>
                    <div>
                        <button className='w-24 rounded-full text-center text-white bg-purple-700 mr-4'style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div >

    {/*Selected Feild Course 2 */}
      


   </SwiperSlide>
   <SwiperSlide >

    {/*Selected Feild Course 1 */}
        <div className='border flex rounded-2xl ' style={{width: '100%',height:'230px',backgroundColor:'#EDEDED'}}>
            <div className='max-w-1/3 h-full '>
                <img src={CourseImage} className='w-full h-full rounded-tl-2xl rounded-bl-2xl' alt="" />
            </div>
                {/* details */}
            <div className='w-2/3 h-full'>
                <div className='ml-6 mt-2.5'>
                    <p className='text-xl font-bold  '>Java</p>
                </div>
                <div className='ml-6 mt-2 mr-3 mb-1 'style={{color:'#49454F'}}>
                    <p>Lorem ipsum dolor sit amet , adipisi elit. Reprehenderit, inventore debitis temporibus nihil optio, ullam debitis temporibus nihil optio, ullam
                    </p>
                </div>
                <div className='flex justify-end 'style={{marginTop:'20px'}}>
                    <div>
                        <button className='w-20 rounded-full text-center text-black font-semibold bg-purple-300 mr-3' style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Preview</button>
                    </div>
                    <div>
                        <button className='w-24 rounded-full text-center text-white bg-purple-700 mr-4'style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div >

    {/*Selected Feild Course 2 */}
      


   </SwiperSlide>
   
   <SwiperSlide >

{/*Selected Feild Course 1 */}
<div className='border flex rounded-2xl ' style={{width: '100%',height:'230px',backgroundColor:'#EDEDED'}}>
    <div className='max-w-1/3 h-full '>
        <img src={CourseImage} className='w-full h-full rounded-tl-2xl rounded-bl-2xl' alt="" />
    </div>
        {/* details */}
    <div className='w-2/3 h-full'>
        <div className='ml-6 mt-2.5'>
            <p className='text-xl font-bold  '>Java</p>
        </div>
        <div className='ml-6 mt-2 mr-3 mb-1 'style={{color:'#49454F'}}>
            <p>Lorem ipsum dolor sit amet , adipisi elit. Reprehenderit, inventore debitis temporibus nihil optio, ullam debitis temporibus nihil optio, ullam
            </p>
        </div>
        <div className='flex justify-end 'style={{marginTop:'20px'}}>
            <div>
                <button className='w-20 rounded-full text-center text-black font-semibold bg-purple-300 mr-3' style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Preview</button>
            </div>
            <div>
                <button className='w-24 rounded-full text-center text-white bg-purple-700 mr-4'style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Buy Now</button>
            </div>
        </div>
    </div>
</div >

{/*Selected Feild Course 2 */}



   </SwiperSlide>

  <SwiperSlide >

{/*Selected Feild Course 1 */}
<div className='border flex rounded-2xl ' style={{width: '100%',height:'230px',backgroundColor:'#EDEDED'}}>
    <div className='max-w-1/3 h-full '>
        <img src={CourseImage} className='w-full h-full rounded-tl-2xl rounded-bl-2xl' alt="" />
    </div>
        {/* details */}
    <div className='w-2/3 h-full'>
        <div className='ml-6 mt-2.5'>
            <p className='text-xl font-bold  '>Java</p>
        </div>
        <div className='ml-6 mt-2 mr-3 mb-1 'style={{color:'#49454F'}}>
            <p>Lorem ipsum dolor sit amet , adipisi elit. Reprehenderit, inventore debitis temporibus nihil optio, ullam debitis temporibus nihil optio, ullam
            </p>
        </div>
        <div className='flex justify-end 'style={{marginTop:'20px'}}>
            <div>
                <button className='w-20 rounded-full text-center text-black font-semibold bg-purple-300 mr-3' style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Preview</button>
            </div>
            <div>
                <button className='w-24 rounded-full text-center text-white bg-purple-700 mr-4'style={{height:'36px',fontSize:'15px',fontWeight:'600'}}>Buy Now</button>
            </div>
        </div>
    </div>
</div >

{/*Selected Feild Course 2 */}



  </SwiperSlide>
   
  
           
          
        </Swiper>
        </div>
        
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
        <div className='w-full bg-white'>
            <div className=' mt-24 text-black font-extrabold' style={{fontSize:'50px'}}>
                <p>Review</p>
            </div>
            <div className='grid grid-cols-3 gap-5 grid-rows-3 mt-10'>
                {/* Card 1 */}
                <div className='border p-4 rounded-lg'style={{backgroundColor:'#EDEDED'}}>
                    <div className='flex'>
                        <div className='w=1/3 pl-5 pt-3'>
                            <img src={ReviewProfile} className='w-20' alt="" />
                        </div>
                        <div className='w-2/3 font-inter pl-8 mt-3 pt-0.5' style={{color:'#7B7B7B'}}>
                            {/* Name */}
                            <div style={{fontWeight:'600',fontSize:'30px'}}>
                                <p>Eleanor</p>
                            </div>
                            {/* Job-Title */}
                            <div  style={{fontSize:'17px'}}>
                                Lorem Ipsum
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className =' flex text-3xl h-12 mt-4 pt-2 ml-5 mr-4 ' style={{color:'#F4D10B'}}>
                            <div>
                                <i className='fa-solid fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-solid fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-solid fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-regular fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-regular fa-star mr-2'></i>
                            </div>
                            </div>
                    </div>

                    <div className='text-xl mt-3 ml-5 mr-4 mb-2' style={{fontWeight:'500',color:'#7B7B7B'}}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className='border p-4 rounded-lg'style={{backgroundColor:'#EDEDED'}}>
                    <div className='flex'>
                        <div className='w=1/3 pl-5 pt-3'>
                            <img src={ReviewProfile2} className='w-20' alt="" />
                        </div>
                        <div className='w-2/3 font-inter pl-8 mt-3 pt-0.5' style={{color:'#7B7B7B'}}>
                            {/* Name */}
                            <div style={{fontWeight:'600',fontSize:'30px'}}>
                                <p>Eleanor</p>
                            </div>
                            {/* Job-Title */}
                            <div  style={{fontSize:'17px'}}>
                                Lorem Ipsum
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className =' flex text-3xl h-12 mt-4 pt-2 ml-5 mr-4 ' style={{color:'#F4D10B'}}>
                            <div>
                                <i className='fa-solid fa-star mr-2 '></i>
                            </div>
                            <div>
                                <i className='fa-solid fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-solid fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-solid fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-regular fa-star mr-2'></i>
                            </div>
                            </div>
                    </div>

                    <div className='text-xl mt-3 ml-5 mr-4 mb-2' style={{fontWeight:'500',color:'#7B7B7B'}}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className='border p-4 rounded-lg'style={{backgroundColor:'#EDEDED'}}>
                    <div className='flex'>
                        <div className='w=1/3 pl-5 pt-3'>
                            <img src={ReviewProfile3} className='w-20' alt="" />
                        </div>
                        <div className='w-2/3 font-inter pl-8 mt-3 pt-0.5' style={{color:'#7B7B7B'}}>
                            {/* Name */}
                            <div style={{fontWeight:'600',fontSize:'30px'}}>
                                <p>Eleanor</p>
                            </div>
                            {/* Job-Title */}
                            <div  style={{fontSize:'17px'}}>
                                Lorem Ipsum
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className =' flex text-3xl h-12 mt-4 pt-2 ml-5 mr-4 ' style={{color:'#F4D10B'}}>
                            <div>
                                <i className='fa-solid fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-solid fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-solid fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-regular fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-regular fa-star mr-2'></i>
                            </div>
                            </div>
                    </div>

                    <div className='text-xl mt-3 ml-5 mr-4 mb-2' style={{fontWeight:'500',color:'#7B7B7B'}}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                    </div>
                </div>

                {/* Card 4 */}
                <div className='border p-4 rounded-lg'style={{backgroundColor:'#EDEDED'}}>
                    <div className='flex'>
                        <div className='w=1/3 pl-5 pt-3'>
                            <img src={ReviewProfile} className='w-20' alt="" />
                        </div>
                        <div className='w-2/3 font-inter pl-8 mt-3 pt-0.5' style={{color:'#7B7B7B'}}>
                            {/* Name */}
                            <div style={{fontWeight:'600',fontSize:'30px'}}>
                                <p>Eleanor</p>
                            </div>
                            {/* Job-Title */}
                            <div  style={{fontSize:'17px'}}>
                                Lorem Ipsum
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className =' flex text-3xl h-12 mt-4 pt-2 ml-5 mr-4 ' style={{color:'#F4D10B'}}>
                            <div>
                                <i className='fa-solid fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-solid fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-solid fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-regular fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-regular fa-star mr-2'></i>
                            </div>
                            </div>
                    </div>

                    <div className='text-xl mt-3 ml-5 mr-4 mb-2' style={{fontWeight:'500',color:'#7B7B7B'}}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                    </div>
                </div>

                {/* Card 5 */}
                <div className='border p-4 rounded-lg'style={{backgroundColor:'#EDEDED'}}>
                    <div className='flex'>
                        <div className='w=1/3 pl-5 pt-3'>
                            <img src={ReviewProfile2} className='w-20' alt="" />
                        </div>
                        <div className='w-2/3 font-inter pl-8 mt-3 pt-0.5' style={{color:'#7B7B7B'}}>
                            {/* Name */}
                            <div style={{fontWeight:'600',fontSize:'30px'}}>
                                <p>Eleanor</p>
                            </div>
                            {/* Job-Title */}
                            <div  style={{fontSize:'17px'}}>
                                Lorem Ipsum
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className =' flex text-3xl h-12 mt-4 pt-2 ml-5 mr-4 ' style={{color:'#F4D10B'}}>
                            <div>
                                <i className='fa-solid fa-star mr-2 '></i>
                            </div>
                            <div>
                                <i className='fa-solid fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-solid fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-solid fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-regular fa-star mr-2'></i>
                            </div>
                            </div>
                    </div>

                    <div className='text-xl mt-3 ml-5 mr-4 mb-2' style={{fontWeight:'500',color:'#7B7B7B'}}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                    </div>
                </div>

                {/* Card 6 */}
                <div className='border p-4 rounded-lg'style={{backgroundColor:'#EDEDED'}}>
                    <div className='flex'>
                        <div className='w=1/3 pl-5 pt-3'>
                            <img src={ReviewProfile3} className='w-20' alt="" />
                        </div>
                        <div className='w-2/3 font-inter pl-8 mt-3 pt-0.5' style={{color:'#7B7B7B'}}>
                            {/* Name */}
                            <div style={{fontWeight:'600',fontSize:'30px'}}>
                                <p>Eleanor</p>
                            </div>
                            {/* Job-Title */}
                            <div  style={{fontSize:'17px'}}>
                                Lorem Ipsum
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className =' flex text-3xl h-12 mt-4 pt-2 ml-5 mr-4 ' style={{color:'#F4D10B'}}>
                            <div>
                                <i className='fa-solid fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-solid fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-solid fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-regular fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-regular fa-star mr-2'></i>
                            </div>
                            </div>
                    </div>

                    <div className='text-xl mt-3 ml-5 mr-4 mb-2' style={{fontWeight:'500',color:'#7B7B7B'}}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                    </div>
                </div>                

                {/* Card 7 */}
                <div className='border p-4 rounded-lg'style={{backgroundColor:'#EDEDED'}}>
                    <div className='flex'>
                        <div className='w=1/3 pl-5 pt-3'>
                            <img src={ReviewProfile1} className='w-20' alt="" />
                        </div>
                        <div className='w-2/3 font-inter pl-8 mt-3 pt-0.5' style={{color:'#7B7B7B'}}>
                            {/* Name */}
                            <div style={{fontWeight:'600',fontSize:'30px'}}>
                                <p>Eleanor</p>
                            </div>
                            {/* Job-Title */}
                            <div  style={{fontSize:'17px'}}>
                                Lorem Ipsum
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className =' flex text-3xl h-12 mt-4 pt-2 ml-5 mr-4 ' style={{color:'#F4D10B'}}>
                            <div>
                                <i className='fa-solid fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-solid fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-solid fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-regular fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-regular fa-star mr-2'></i>
                            </div>
                            </div>
                    </div>

                    <div className='text-xl mt-3 ml-5 mr-4 mb-2' style={{fontWeight:'500',color:'#7B7B7B'}}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                    </div>
                </div>

                {/* Card 8 */}
                <div className='border p-4 rounded-lg'style={{backgroundColor:'#EDEDED'}}>
                    <div className='flex'>
                        <div className='w=1/3 pl-5 pt-3'>
                            <img src={ReviewProfile2} className='w-20' alt="" />
                        </div>
                        <div className='w-2/3 font-inter pl-8 mt-3 pt-0.5' style={{color:'#7B7B7B'}}>
                            {/* Name */}
                            <div style={{fontWeight:'600',fontSize:'30px'}}>
                                <p>Eleanor</p>
                            </div>
                            {/* Job-Title */}
                            <div  style={{fontSize:'17px'}}>
                                Lorem Ipsum
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className =' flex text-3xl h-12 mt-4 pt-2 ml-5 mr-4 ' style={{color:'#F4D10B'}}>
                            <div>
                                <i className='fa-solid fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-solid fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-solid fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-regular fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-regular fa-star mr-2'></i>
                            </div>
                            </div>
                    </div>

                    <div className='text-xl mt-3 ml-5 mr-4 mb-2' style={{fontWeight:'500',color:'#7B7B7B'}}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                    </div>
                </div>

                {/* Card 9 */}
                <div className='border p-4 rounded-lg'style={{backgroundColor:'#EDEDED'}}>
                    <div className='flex'>
                        <div className='w=1/3 pl-5 pt-3'>
                            <img src={ReviewProfile3} className='w-20' alt="" />
                        </div>
                        <div className='w-2/3 font-inter pl-8 mt-3 pt-0.5' style={{color:'#7B7B7B'}}>
                            {/* Name */}
                            <div style={{fontWeight:'600',fontSize:'30px'}}>
                                <p>Eleanor</p>
                            </div>
                            {/* Job-Title */}
                            <div  style={{fontSize:'17px'}}>
                                Lorem Ipsum
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className =' flex text-3xl h-12 mt-4 pt-2 ml-5 mr-4 ' style={{color:'#F4D10B'}}>
                            <div>
                                <i className='fa-solid fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-solid fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-solid fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-regular fa-star mr-2'></i>
                            </div>
                            <div>
                                <i className='fa-regular fa-star mr-2'></i>
                            </div>
                            </div>
                    </div>

                    <div className='text-xl mt-3 ml-5 mr-4 mb-2' style={{fontWeight:'500',color:'#7B7B7B'}}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                    </div>
                </div>

            </div>
        </div>

        {/* Contact Us */}
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

    </div>
    
    </>
  )
}
