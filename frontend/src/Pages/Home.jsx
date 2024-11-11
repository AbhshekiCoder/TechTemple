import { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/swiper-bundle.css'; 
import SwiperCore from 'swiper';
import {Autoplay, EffectCards, Scrollbar} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import url from '../misc/url'
import 'swiper/css/effect-cube';
import { Navigation, Pagination, Thumbs} from 'swiper/modules';
import axios from "axios";
import { signOut , auth} from "../firebase/firebase";
import { ProfileContext, useProfile } from "../profilecontext";


function Home(){
  const [users, setUsers] = useState(useProfile)
 
  //https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600
  //https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=600
  //https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_640.png
  useEffect(()=>{
    console.log(users)

  },[])
    return(
      
        <>
         <Navbar  />

       
         <Swiper modules={[ Autoplay, Thumbs]}  spaceBetween={30} centeredSlides={true} autoplay={{ delay: 3000,  disableOnInteraction: false,  }} pagination={{ clickable: true }}   className="w-full h-fit z-0 "> 
         <SwiperSlide className="carousel-item " style={{height: "500px"}}><img src = "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600"  className="w-full h-full object-cover "/></SwiperSlide> 
         <SwiperSlide  className="carousel-item h-96" style={{height: "500px"}}><img src = "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=600"  className="w-full h-full object-cover "/></SwiperSlide> 
         <SwiperSlide  className="carousel-item h-96" style={{height: "500px"}}><img src = "https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_640.png"  className="w-full h-full object-cover "/></SwiperSlide> 
         
         </Swiper>
         <div className=" border  mt-60" style={{maxWidth: "1368px"}}>

         </div>
         
        </>
    )
}
export default Home;