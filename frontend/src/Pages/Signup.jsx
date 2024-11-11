import React, { useState, useEffect } from 'react'
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'
import apple from '../assets/apple.png'
import SignupFrame1_img from '../assets/SignupImage.png'
import {signInWithPopup} from 'firebase/auth';
import axios from 'axios'
import { Message } from 'rsuite';
import {auth} from '../firebase/firebase';

import {GoogleAuthProvider} from 'firebase/auth';
import { FacebookAuthProvider } from 'firebase/auth';
import { PhoneAuthProvider } from 'firebase/auth'
import {Link, useNavigate} from "react-router-dom"
import url from '../misc/url';

export default function Signup() {
	let [type, setType] = useState("success");
	let navigate = useNavigate();
	let register = async(e)=>{
		e.preventDefault();
		let form = document.forms['Signupform'];
		console.log(form.name.value)

		let name = form.name.value;
		let email = form.email.value;
		let password = form.password.value;
		let obj = {
			name: name,
			email: email,
			password: password
		}
		
		let result = await axios.post(`${url}register`, obj);
		if(result.data.success){
			setType("success");
			document.querySelector('.message').style.display = 'block';
			document.getElementById("message").innerText = result.data.message;
			setTimeout(()=>{
				document.querySelector('.message').style.display = 'none';

			},2000)
			setTimeout(()=>{
				navigate('/Signin')

			},4000)


		}
		else{
			setType("warning");
			document.querySelector('.message').style.display = 'block';
			document.getElementById("message").innerText = result.data.message;
			setTimeout(()=>{
				document.querySelector('.message').style.display = 'none';

			},2000)


		}


		

	}

	let  google_authentication = async()=>{
		console.log("hello")
		const provider = new GoogleAuthProvider();
	signInWithPopup(auth, provider).then(async(res)=>{
let obj ={
	name: res.user.displayName,
	email: res.user.email
}
let result = await axios.post(`${url}register_apps`, obj);
		if(result.data.success){
			let result1 = await axios.post(`${url}token`, {token: result.data.token });
			if(!result1){
				setType("warning");
				document.querySelector('.message').style.display = 'block';
				document.getElementById("message").innerText = result1.data.message;
				setTimeout(()=>{
					document.querySelector('.message').style.display = 'none';
	
				},2000)
				
	
			}
			else{
				setType("success");
			
			document.querySelector('.message').style.display = 'block';
			document.getElementById("message").innerText = result.data.message;
			setTimeout(()=>{
				document.querySelector('.message').style.display = 'none';

			},2000)
			  
			localStorage.setItem("token", result.data.token);
			setTimeout(()=>{
				navigate('/')

			},4000)

		}
	}
		else{
			setType("warning");
			document.querySelector('.message').style.display = 'block';
			document.getElementById("message").innerText = result.data.message;
			setTimeout(()=>{
				document.querySelector('.message').style.display = 'none';

			},2000)


		}
  console.log(obj)
	}).catch((err)=>{
	 console.log(err);
	})
	
	}

	
	let facebook_authentication = async()=>{
		const provider = new PhoneAuthProvider();
	    signInWithPopup(auth, provider).then(async(res)=>{
			console.log(res)
		
				}).catch((err)=>{
				 console.log(err);
				})
	}
	
  return (
	<>

   <div className='absolute flex justify-center w-full'>
   <Message type={type} bordered showIcon    placement = "topCenter" className='mt-6 hidden message' >
	<strong id = "message">Success!</strong> 
   </Message>

   </div>
	
    <div className='Signup flex  w-full h-screen  '>
	   
      	<div className='SignupFrame1 w-1/2 pl-4 flex justify-end items-center ' >
			<div >
				<img src={SignupFrame1_img} alt="" />
			</div>
      	</div>
	
      	<div className='w-1/2 pl-4 pr-4 SignupFrame2 ' >
			<div id = "SignupFrame2">
				<div className='text-center'>
				<p className='font-semibold text-3xl mt-16 mb-12 '>Sign Up And Start <br />Learning</p>
				</div>
				
				<div>
				<form action="" name = "Signupform" onSubmit={register}>
					<div>
					<input type="text" className='w-full h-10 border-black border-1 rounded-md pl-3 pr-3 ' name = "name" placeholder='Full name'   required />
					</div>

					<div>
					<input type="email" className='w-full h-10 border-black border-1 rounded-md pl-3 pr-3 mt-8' placeholder='Email' name="email" required />
					</div>

					<div>
					<input type="password" className='w-full h-10 border-black border-1 rounded-md pl-3 pr-3 mt-8' placeholder='Password' name="password" required/>
					</div>

					<div>
						<button className='w-full text-white h-10 mt-8 font-semibold ' style={{backgroundColor:'#920DE3'}}>Sign Up</button>
					</div>

					
					<div className='flex justify-around mt-10'> 
						<div className='w-fit'>
							<input type="checkbox" className='border-2 h-6 border-black' name='checkbox' />
						</div>

						<div className='pl-3  w-fit'>
							<p className='text-sm '>Send me special offer personalized recommendations, and learning tips.</p>
						</div>
					</div>
				</form>

				<div className='flex justify-between w-44 m-auto pt-8'>
					<img className = 'h-8 w-8' src ={google} onClick={google_authentication}/>
					<img className = 'h-8 w-8 rounded-circle' src ={facebook} style={{backgroundColor:'#1877F2'}} onClick={facebook_authentication}/>
					<img className = 'h-8 w-8' src ={apple}/>
				</div>

				<div>
					<div className='text-sm w-fit pt-5 flex justify-center flex-wrap m-auto '>
						<p className='mr-1 font-semibold '>By Signing Up, You Agree To Our</p> 
						<a href="" className='font-semibold text-purple-700 '><u>Terms & Use</u></a>
						 <p className='w-fit font-semibold ml-1 mr-1'> and </p>
						<a href="" className='w-fit font-semibold text-purple-700 '> <u>Privacy Policy </u></a>
					</div>

					<div className='flex w-fit m-auto pt-3'>
						<p className='mr-2 font-semibold'>Already Have An Account?</p>
						<Link to = "/Signin" className='text-purple-700'><u>Log In</u></Link>
					</div>
				</div>

		
      			</div>
    		</div>
		</div>
	</div>
	</>
  )
}

