import {React, useState} from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import {Autoplay, EffectCards, Thumbs, Pagination, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import CourseImage from '../../../assets/CourseImage.png'
import HidebarImg from '../../../assets/Hidebar.png'
export default function CoursesNavbar() {
    const [show, setShow] = useState(false)
    function ShowBar(){
        setShow(true)
    }
    function Hidebar(){
        setShow(false)
    }
  return (
    <div>
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
        <div className='m-auto   mt-16' style={{maxWidth:'1400px'}}>
        <Swiper modules={[ Autoplay, Thumbs,  Navigation]}  followFinger={true} grabCursor={true} simulateTouch={true} spaceBetween={30} breakpoints = {{469: {slidesPerView: 1}, 768: {slidesPerView: 2}, 1240: {slidesPerView:3}}} 
         autoplay={{ delay: 3000,  disableOnInteraction: false  }}   className="w-full  h-fit mt-6  z-0  max-lg:pl-6 max-lg:pr-6 "> 
           <SwiperSlide className=' ' >
    
            {/*Selected Feild Course 1 */}
                <div className='border flex rounded-2xl  max-lg:h-fit max-md:h-60 max-lg:pb-3 max-md:pb-0 ' style={{maxwidth: '100%',backgroundColor:'#EDEDED'}}>
                    <div className='max-w-1/3 h-full  max-md:h-60 border '>
                        <img src={CourseImage} className='w-full h-full  max-md:h-60 rounded-tl-2xl rounded-bl-2xl' alt="" />
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
                        <div className='flex justify-end  mt-5 max-lg:mt-10 max-md:mt-5 max-sm:mt-0'>
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
           <SwiperSlide className='  ' >
    
    {/*Selected Feild Course 1 */}
        <div className='border flex rounded-2xl  max-lg:h-fit max-md:h-60 max-lg:pb-3 max-md:pb-0 ' style={{maxwidth: '100%',backgroundColor:'#EDEDED'}}>
            <div className='max-w-1/3 h-full  max-md:h-60 border '>
                <img src={CourseImage} className='w-full h-full  max-md:h-60 rounded-tl-2xl rounded-bl-2xl' alt="" />
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
                <div className='flex justify-end  mt-5 max-lg:mt-10  max-md:mt-5 border max-sm:mt-0'>
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
    </div>
  )
}
