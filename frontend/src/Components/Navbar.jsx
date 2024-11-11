import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

export default function Navbar({user, logout, users}) {
  	const [ishovered,setIshovered] = useState(false)
	const [profile,setProfile] = useState(false)
	const [courses, setCourses] = useState();
    const [user, setUser] = useState(false);
	const [username, setUserName] = useState(useContext(ProfileContext)[1])
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

 
  
  function logout(){
    console.log("hello")
    localStorage.removeItem("token");
  
	setIshovered(false);
	setProfile(false);
	setUser(false)
	
  
signOut(auth).then(() => {
  console.log("hello")
}).catch((error) => {
  // An error happened.
});

  }

  
  
	useEffect( ()=>{
		data();
		let token = localStorage.getItem("token");
		if(token){
			setUser(true);
		}
		else{
			setUser(false)
		}
	
	
	  
	},[])
	let data = async()=>{
	  let result = await axios.post(`${url}course_detail`);
	   setCourses(result.data);
	  
	}
 
  
  return (
   <>
      <div className='navbar sticky-top z-10 bg-purple-300 flex items-center justify-between font-sans' style={{boxShadow:'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px'}}>

        {/* Frame-1 */}
        <div className='flex justify-between h-full items-center ml-8'>

            {/* Logo */}
            <div className= 'logo mr-7 '>
              <img src={logo} alt = "" className='w-full object-cover'/>
            </div>
			
			<div className='h-12 relative max-lg:hidden '>
			{/* courses and hovered div */}
			<div className='relative ' onMouseOver={hovered}  style={{marginTop:'10px'}}>
        		{/*hoveredDiv*/}
		        	{(ishovered && <div className='absolute text-lg text-gray-700  bg-purple-50' onMouseLeave={unhovered}  style={{top:'175%',width :'320px',borderRadius:'3px',fontWeight:'500',zIndex:9999,boxShadow:'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}} >
                 {/*section-1 */}
		            <div className='group flex border-b border-gray-800 hover:border-none justify-between items-center pl-6 pr-6  hover:bg-gray-200' style={{height:'50px'}}>
		        	    <div>
		        		  	<a className=' hover:no-underline text-gray-700 group-hover:text-purple-600' href="">Development</a>
		        	  	</div>
		        		<div >
		        			<i className='fa-solid fa-angle-right '></i>
		        		</div>
		        	</div>

					{/*Section 2 */}
		            	<div className=' group flex border-b border-gray-900  hover:border-none justify-between items-center pl-6 pr-6 hover:bg-gray-200' style={{height:'50px'}}>
		        		    <div className=''>
		        			  	<a className='hover:no-underline  text-gray-700 group-hover:text-purple-600' href="">Business</a>
		        		  	</div>
		        			<div>
		        				<i className='fa-solid fa-angle-right '></i>
		        			</div>
		        		</div>

					{/*Section 3 */}
		            	<div className='group flex border-b border-gray-900 hover:border-none justify-between items-center pl-6 pr-6 hover:bg-gray-200 ' style={{height:'50px'}}>
		        		    <div className=''>
		        			  	<a className='hover:no-underline  text-gray-700 group-hover:text-purple-600' href="">Finance & Accounting</a>
		        		  	</div>
		        			<div>
		        				<i className='fa-solid fa-angle-right '></i>
		        			</div>
		        		</div>

					{/*Section 4 */}
		            	<div className='group flex border-b border-gray-900 hover:border-none justify-between items-center pl-6 pr-6 hover:bg-gray-200 ' style={{height:'50px'}}>
		        		    <div className=''>
		        			  	<a className=' hover:no-underline  text-gray-700 group-hover:text-purple-600' href="">It & Software</a>
		        		  	</div>
		        			<div>
		        				<i className='fa-solid fa-angle-right '></i>
		        			</div>
		        		</div>

					{/*Section 5 */}
		            <div className='group flex border-b border-gray-900 hover:border-none justify-between items-center pl-6 pr-6  hover:bg-gray-200 ' style={{height:'50px'}}>
		        	    <div>
		        		  	<a className=' hover:no-underline  text-gray-700 group-hover:text-purple-600' href="">Design</a>
		        	  	</div>
		        		<div>
		        			<i className='fa-solid fa-angle-right '></i>
		        		</div>
		        	</div>

					{/*Section 6 */}
		            <div className=' group flex border-b border-gray-900 hover:border-none justify-between items-center pl-6 pr-6  hover:bg-gray-200 ' style={{height:'50px'}}>
		        	    <div className=''>
		        		  	<a className=' hover:no-underline  text-gray-700 group-hover:text-purple-600' href="">Lifestyle</a>
		        	  	</div>
		        		<div>
		        			<i className='fa-solid fa-angle-right '></i>
		        		</div>
		        	</div>

					{/*Section 7 */}
		            <div className='group flex border-b border-gray-900 hover:border-none justify-between items-center pl-6 pr-6  hover:bg-gray-200 ' style={{height:'50px'}}>
		        	    <div >
		        		  	<a className=' hover:no-underline  text-gray-700 group-hover:text-purple-600' href="">Music</a>
		        	  	</div>
		        		<div>
		        			<i className='fa-solid fa-angle-right '></i>
		        		</div>
		        	</div>

					{/*Section 8 */}
		            <div className='group flex border-b border-gray-900 hover:border-none justify-between items-center pl-6 pr-6  hover:bg-gray-200 ' style={{height:'50px'}}>
		        	    <div >
		        		  	<a className='hover:no-underline  text-gray-700 group-hover:text-purple-600'  href="">Health & Fitness</a>
		        	  	</div>
		        		<div>
		        			<i className='fa-solid fa-angle-right' ></i>
		        		</div>
		        	</div>
					{/*Section 9 */}
		            <div className='group flex hover:border-none justify-between items-center pl-6 pr-6 hover:bg-gray-200 ' style={{height:'50px'}}>
		        	    <div >
		        		  	<a className='hover:no-underline text-gray-700 group-hover:text-purple-600' href="">Office Productivity</a>
		        	  	</div>
		        		<div >
		        			<i className='fa-solid fa-angle-right '></i>
		        		</div>
		        	</div>
		    		</div>)}

            {/* Courses */}
              <div className='w-24 text-lg flex items-center font-inter relative cursor-pointer' style={{fontWeight:'500'}} >

              	<div className={`${ishovered?'text-purple-900':'text-gray-800'}`}> {/*headline*/}
                	    <p className=' mr-2' >Courses</p>
                  </div>

                  <div> {/*arrow icon*/}
                      <i className= {`fa-solid text-purple-900 fa-angle-right transition-transform duration-200 ${ishovered?'rotate-90 ':''} `}></i>
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
            <input className = 'w-64 h-11 rounded-tl-full rounded-bl-full pl-5 pr-3 text-base placeholder-gray-500 outline-none'type="text" style={{backgroundColor:'#ECE6F0'}} placeholder='Search'/>
          </div>

          <div className=' search-bar w-fit text-lg mr-5'>
            <i className=" magnify rounded-full fa-solid fa-magnifying-glass cursor-pointer" ></i>
          </div>
        </div>

		{/* Category */}
        <div className='Category flex justify-between items-center  from-neutral-900 font-inter text-lg max-lg:hidden' style={{fontWeight:'500'}}>
          <div className='mr-7'>
            {/* <p className='cursor-pointer hover:text-purple-900'>Plan & Pricing</p>*/}
			<a className ='cursor-pointer hover:no-underline hover:text-purple-900 hover:font-medium' href="">Plan & Pricing</a>
          </div>

          <div className='mr-7'>
			<a className='hover:no-underline cursor-pointer hover:text-purple-900 hover:font-medium' href="">Tech Temple Bussiness</a>
            {/* <p className='cursor-pointer hover:text-purple-800 hover:font-medium'>Tech Temple Bussiness</p> */}
          </div>

          <div  className='mr-7'>
			<a className='hover:no-underline cursor-pointer hover:text-purple-900 hover:font-medium' href="">Success Stories</a>
            {/* <p className='cursor-pointer hover:text-purple-800 hover:font-medium'>Success Stories</p> */}
          </div>
        </div>

        {/* Porfile Login Signup */}
        <div className='flex justify-between  items-center h54-12 font-normal text-purple-600  text-lg mr-8  max-lg:hidden  '>
          {user?
        <div className='flex items-center '>
          <div>
            <button className=' h-10 rounded-lg bg-purple-600 mr-8 text-white font-sans' style= {{fontSize:'17px',width:'90px'}}onClick={logout}>Log out</button>
          </div>

          <div className='text-2xl  h-full flex items-center mr-3'>
            <i className=" cursor-pointer fa-regular fa-circle-user text-3xl bg-gray-200 rounded-circle  "  onMouseOver={showProfile}></i>
          </div>

          </div>: <div className='flex'>
			<div className='text-purple-800'>
          <Link to = "/Signin">  <button className='signin-n transition-all  ease-in-out  h-10 rounded-lg  border-2 border-purple-600 hover:border-purple-300  mr-8 hover:text-white font-sans bg-purple-300 hover:bg-purple-500 'style={{width:'90px',fontWeight:'500'}}>Log In</button> </Link>
          </div>

          <div className=' rounded-lg bg-gray-200'><div>

          <Link to = "/Signup" > <button className=' h-10 rounded-lg transition-all duration-200 ease-in-out  border-2 border-purple-600 hover:border-purple-300  text-purple-500 hover:text-white font-sans hover:bg-purple-600'style={{width:'90px',fontWeight:'500'}}>Sign up</button></Link>
		  </div>
          </div>
          </div>
          }
         
			{/* Profile Section */}

				{(profile && <div className='relative h-full  mt-3 profile' onMouseLeave={()=>{
          document.querySelector('.profile').style.display = "none"
        }}>
					<div className='absolute bg-white w-48 font-inter -right-2 text-base  text-gray-600' style={{top:'110%',zIndex:'999',boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}} >
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