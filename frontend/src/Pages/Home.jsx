import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/swiper-bundle.css'; 
import SwiperCore from 'swiper';
import {Autoplay, EffectCards} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import { Navigation, Pagination, Scrollbar, Thumbs} from 'swiper/modules';
import axios from "axios";

function Home(){
  let [users, setUsers] = useState();
  
  useEffect( ()=>{
    let users = async()=>{
      document.querySelector('.navbar').style.display = 'flex';
    let token = localStorage.getItem('token');
    if(token){
      let result = await axios.post('http://localhost:3000/user_detail', {token});
    console.log(result.data);
    let name= result.data.name.split(' ');
   

    setUsers(name[0]);

    }
    

    }
    users();
		
  

	},[])
  let [user, setUser] = useState();
 
  useEffect(()=>{
    let data = localStorage.getItem("token");
    if(data){
      setUser(true);
    }

  },[user])
  function logout(){
    console.log("hello")
    localStorage.removeItem("token");
    setUser(false);
  }
  //https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600
  //https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=600
  //https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_640.png
  
    return(
        <>
         <Navbar user={user} logout={logout} users = {users} />

       
         <Swiper modules={[ Autoplay, Thumbs]}  spaceBetween={30} centeredSlides={true} autoplay={{ delay: 3000,  disableOnInteraction: false,  }} pagination={{ clickable: true }}   className="w-full h-96 z-0"> 
         <SwiperSlide className="carousel-item h-96"><img src = "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600"  className="w-full h-96 object-cover "/></SwiperSlide> 
         <SwiperSlide  className="carousel-item h-96"><img src = "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=600"  className="w-full h-96 object-cover "/></SwiperSlide> 
         <SwiperSlide  className="carousel-item h-96"><img src = "https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_640.png"  className="w-full h-96 object-cover "/></SwiperSlide> 
         
         </Swiper>
        </>
    )
}
export default Home;