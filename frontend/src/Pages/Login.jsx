import {React, useEffect, useState} from 'react'
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'
import apple from '../assets/apple.png'
import SignupFrame1_img from '../assets/SignupImage.png'
import axios from 'axios'
import { Message } from 'rsuite';
import {signInWithPopup} from 'firebase/auth';


import auth from '../firebase/firebase';

import {GoogleAuthProvider} from 'firebase/auth';
import { FacebookAuthProvider } from 'firebase/auth';
import { PhoneAuthProvider } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import url from '../misc/url';




export default function Login() {
	let [type, setType] = useState("success");
    let navigate = useNavigate();

	
	let signin = async(e)=>{
		e.preventDefault();
		let form = document.forms['Signinform'];
		let email = form.email.value;
		let password = form.password.value;
		let obj = {
			email: email,
			password: password
		}

		let result = await axios.post(`${url}login`, obj);
		if(!result.data.success){
			setType("warning");
			document.querySelector('.message').style.display = 'block';
			document.getElementById("message").innerText = result.data.message;
			
			setTimeout(()=>{
				document.querySelector('.message').style.display = 'none';

			},2000)

		}
		else{
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
			alert("login success")
			setTimeout(()=>{
				document.querySelector('.message').style.display = 'none';

			},2000)
			  
			localStorage.setItem("token", result.data.token);
			setTimeout(()=>{
				navigate('/')

			},4000)
		
			
			}
			
		}
	}
	
	let  google_authentication = async()=>{
		
		const provider = new GoogleAuthProvider();
	signInWithPopup(auth, provider).then(async(res)=>{
let obj ={
	name: res.user.displayName,
	email: res.user.email
}

let result = await axios.post(`${url}register_apps`, obj);
		if(!result.data.success){
			setType("warning");
			document.querySelector('.message').style.display = 'block';
			document.getElementById("message").innerText = result.data.message;
			setTimeout(()=>{
				document.querySelector('.message').style.display = 'none';

			},2000)

		}
		else{
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
	
    <div className='Signup flex w-full h-screen overflow-hidden'>
      	<div className='SignupFrame1 w-1/2 pl-4 flex justify-end items-center ' >
			<div >
				<img src={SignupFrame1_img} alt="" />
			</div>
      	</div>
	
      	<div className='w-1/2 pl-4 pr-4 SignupFrame2 ' >
			<div id = "SignupFrame2">

				<div className='text-center font-inter mt-3'>
				<p className='font-semibold text-3xl mt-24 mb-1 leading-normal'>Log In To Continue Your Learning Journey</p>
				</div>
				
				<div>
				<form action="" name = "Signinform" onSubmit={signin}>

					<div>
					<input type="email" className='w-full h-10 border-black border-1 rounded-md pl-3 pr-3 mt-8' placeholder='Email' name="email" required />
					</div>

					<div>
					<input type="password" className='w-full h-10 border-black border-1 rounded-md pl-3 pr-3 mt-8' placeholder='Password' name="password" required/>
					</div>

					<div>
						<button className='w-full text-white h-10 mt-8 font-semibold text-xl ' style={{backgroundColor:'#920DE3'}}>Submit</button>
					</div>

					
				</form>

                <div className='flex justify-evenly items-center mt-11 '>
                    <hr className='border-2 flex-grow' style={{borderColor:'#AEAEAE'}}/>
                    <p className='ml-2 mr-2 font-semibold' style={{color:'#AEAEAE'}}>Other Log In Options</p>
                    <hr className='border-2 flex-grow' style={{borderColor:'#AEAEAE'}}/>
                </div>

				<div className='flex justify-between w-44 m-auto pt-8'>
					<img className = 'h-8 w-8' src ={google} onClick = {google_authentication}/>
					<img className = 'h-8 w-8 rounded-circle' src ={facebook} style={{backgroundColor:'#1877F2'}} onClick={facebook_authentication}/>
					<img className = 'h-8 w-8' src ={apple}/>
				</div>

				<div className='mt-8'>
					<div className='w-full h-10 flex justify-center items-center text-lg' style={{backgroundColor:'#E9E9E9'}}>
						<p className='font-semibold mr-2'>Don't Have An Acoount?</p>
						<Link to = "/Signup" className='text-purple-800 font-semibold'>Sign Up</Link>
					</div>

					<hr className='w-full' style={{borderBottom:'solid 1px black'}}/>

                    <div className='w-full h-10 flex justify-center items-center text-purple-800' style={{backgroundColor:'#E9E9E9'}}>
                        <p className='font-semibold text-lg' ><u>Login with your organisation</u></p>
                    </div>
				</div>

		
      			</div>
    		</div>
		</div>
	</div>
	</>
  )
}

