import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import axios from 'axios';
import url from '../misc/url';

export default function Navbar() {
  	const [ishovered,setIshovered] = useState(false)
	const [profile,setProfile] = useState(false)
	const [courses, setCourses] = useState();
  function hovered(){
    setIshovered(true)
  }
  function unhovered(){
	setIshovered(false)
  }
  function showProfile(){
	setProfile(!profile);
  document.querySelector('.profile').style.display = "block";
  }
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
	setIshovered(false);
	setProfile(false);
	
  
signOut(auth).then(() => {
  console.log("hello")
}).catch((error) => {
  // An error happened.
});

  }
  let [users, setUsers] = useState();
  
  useEffect( ()=>{
    let users = async()=>{
      
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
	useEffect( ()=>{
		data();
	   
	
	  
	},[])
	let data = async()=>{
	  let result = await axios.post(`${url}course_detail`);
	   setCourses(result.data);
	  
	}
 
  
  return (
   <>
      <div className='navbar sticky-top z-10 bg-gray-100    flex items-center justify-between font-sans' style={{boxShadow:'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px'}}>

        {/* Frame-1 */}
        <div className='flex justify-between h-full items-center ml-8'>

            {/* Logo */}
            <div className= 'logo mr-7 '>
              <img src={logo} alt = "" className='w-full object-cover'/>
            </div>
			
			<div className='h-12 relative max-lg:hidden '>
			{/* courses and hovered div */}
			<div className='relative ' onMouseOver={hovered}   style={{marginTop:'10px'}} onClick={()=>{setIshovered(false)}}>
        		{/*hoveredDiv*/}
		        	{(ishovered && <div  className='courses-modal absolute  text-lg font-base text-gray-800  bg-gray-100' onMouseLeave={unhovered}  style={{top:'175%',width :'320px', height: '500px',   borderRadius:'3px',zIndex:9999,boxShadow:'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px', overflowY: 'auto'}} >
                 {/*section-1 */}
				 {courses?courses.map(Element =>(
					<div className=' group flex border-b border-gray-900 hover:border-none justify-between items-center pl-6 pr-6  hover:bg-gray-300' style={{height:'50px'}}>
		        	    <div>
		        		  	<a className=' hover:no-underline group-hover:text-purple-600' href="">{Element.title}</a>
		        	  	</div>
		        		<div >
		        			<i className='fa-solid fa-angle-right text-black'></i>
		        		</div>
		        	</div>

				 )):''}
		           

				
		         
		    		</div>)}

            {/* Courses */}
              <div className='w-24 text-lg flex font-medium  items-center text-gray-800 font-inter relative cursor-pointer'  >

              	<div className={`${ishovered?'text-purple-600':''}`}> {/*headline*/}
                	    <p className=' mr-2' >Courses</p>
                  </div>

                  <div> {/*arrow icon*/}
                      <i className= {`fa-solid fa-angle-right transition-transform duration-200 ${ishovered?'rotate-90':''} `}></i>
                  </div>
              </div>
			  {/* div to be used for hovering
			  {(ishovered && <div className='h-4 border '></div>)} */}
			
			</div>
			</div>
        </div>


        {/* Search Bar*/}
		
        <div className=' w-fit flex justify-around items-center rounded-full font-inter  max-lg:hidden' style={{backgroundColor:'#ECE6F0'}}>
          
          <div className=''> {/*Input box */}
            <input className = 'w-64 h-12 rounded-tl-full rounded-bl-full pl-5 pr-3 text-base placeholder-gray-500 outline-none'type="text" style={{backgroundColor:'#ECE6F0'}} placeholder='Search'/>
          </div>

          <div className=' search-bar w-fit text-lg mr-5'>
            <i className=" magnify rounded-full fa-solid fa-magnifying-glass " ></i>
          </div>
        </div>


        <div className='flex justify-between items-center font-inter font-medium text-lg text-gray-800 max-lg:hidden '>
          <div className='mr-7'>
            <p className='cursor-pointer hover:text-purple-600'>Plan & Pricing</p>
          </div>

          <div className='mr-7'>
            <p className='cursor-pointer hover:text-purple-600'>Tech Temple Bussiness</p>
          </div>

          <div  className='mr-7'>
            <p className='cursor-pointer hover:text-purple-600'>Success Stories</p>
          </div>
        </div>

        {/* Porfile Login Signup */}
        <div className='flex justify-between  items-center h-12 font-medium text-purple-600  text-lg mr-8  max-lg:hidden  '>
          {user?
        <div className='flex items-center '>
          <div>
            <button className=' h-10 rounded-lg bg-purple-600 mr-8 text-white font-sans' style= {{fontSize:'17px',width:'90px'}}onClick={logout}>Log out</button>
          </div>

          <div className='text-2xl  h-full flex items-center mr-3 '>
            <i className=" cursor-pointer fa-regular fa-circle-user text-3xl bg-gray-200 rounded-circle  "  onMouseOver={showProfile}></i>
          </div>
          </div>: <div className='flex'><div>
          <Link to = "/Signin">  <button className=' h-10 rounded-lg bg-purple-600 font-medium mr-8 text-gray-900 font-sans hover:bg-purple-800'style={{width:'90px',color:'CDC1FF'}}>Log in</button> </Link>
          </div>

          <div className=''>
          <Link to = "/Signup" > <button className=' h-10 rounded-lg bg-purple-400 mr-8 text-gray-700 hover:bg-purple-700 font-sans hover:text-white'style={{width:'90px',color:'CDC1FF'}}>Sign up</button></Link>
          </div>
          </div>
          }
         
			{/* Profile Section */}

				{(profile && <div className='relative h-full  mt-3 profile' onMouseLeave={()=>{
          document.querySelector('.profile').style.display = "none"
        }} style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
					<div className='absolute bg-white w-48 -right-2 text-base  text-gray-600' style={{top:'110%',zIndex:'999',boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}} >
						{/* sections 1 */}
            <div className='flex border-b border-gray-400 items-center pl-4 group' style={{height:'45px'}}>
		    	    	    <div >
		    	    		    <a href = "#" className=' no-underline  hover:no-underline hover:text-black'>{users}</a>
		    	    	  	</div>
		    	    	</div>
						<div className='flex border-b border-gray-400 items-center pl-4 group hover:bg-gray-300' style={{height:'45px'}}>
		    	    	    <div >
		    	    		  	<a className='hover:no-underline group-hover:text-purple-600' href="">Home</a>
		    	    	  	</div>
		    	    	</div>
						{/* sections 2 */}
						<div className='group flex border-b border-gray-400 items-center pl-4 hover:text-purple-600 hover:bg-gray-300' style={{height:'45px'}}>
		    	    	    <div>
		    	    		  	<a className='hover:no-underline group-hover:text-purple-600' href="">My Bookmarks</a>
		    	    	  	</div>
		    	    	</div>
						{/* section 3 */}
						<div className='group flex border-b border-gray-400  items-center pl-4 hover:bg-gray-300' style={{height:'45px'}}>
		    	    	    <div>
		    	    		  	<a className='hover:no-underline group-hover:text-purple-600' href="">Edit Resume</a>
		    	    	  	</div>
		    	    	</div>
						{/* section 4 */}
						<div className='group flex border-b border-gray-400   items-center pl-4  hover:bg-gray-300' style={{height:'45px'}}>
		    	    	    <div>
		    	    		  	<a className='hover:no-underline group-hover:text-purple-600' href="">Safety Tips</a>
		    	    	  	</div>
		    	    	</div>
						{/* section 5 */}
						<div className='group flex border-b border-gray-400   items-center pl-4  hover:bg-gray-300' style={{height:'45px'}}>
		    	    	    <div>
		    	    		  	<a className='hover:no-underline group-hover:text-purple-600' href="">Help Center</a>
		    	    	  	</div>
		    	    	</div>
						{/* section 6 */}
						<div className='group flex items-center pl-4  hover:bg-gray-300' style={{height:'45px'}}>
		    	    	    <div>
		    	    		  	<a className='hover:no-underline group-hover:text-purple-600' href="">More</a>
		    	    	  	</div>
		    	    	</div>

					</div>
				</div>)}
			{/* ------------------ */}
        </div>
		<div className='hidden items-center max-lg:flex mr-6 text-2xl'>
		<i class="fa-solid fa-bars"></i>

		</div>
		</div>
    


   </>
  )
}