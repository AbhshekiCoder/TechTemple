import axios from 'axios'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import url from '../misc/url';

export default function () {
    let Navigate = useNavigate()
    let login = async(e)=>{
    
        let form = document.forms['form'];
        let email = form.email.value;
        let password = form.password.value;
        let role = form.role.value;
        let obj = {
            email: email,
            password: password,
            role: role
        }
        let result = await axios.post(`${url}signin`, obj );
        if(result.data.success){
            alert(result.data.message);
            console.log(result.data.role)
            localStorage.setItem("users", result.data.token)
            if(result.data.role == 'students'){
                Navigate('/StudentDashboard');
            }
        }
        else{
            alert(result.data.message)
        }

    }

  return (
    <div>
      <form name = "form" >
        <input type = "email" name="email"/>
        <input type = "password" name='password'/>
        <select name='role'>
        <option value="Admin">Admin</option>
        <option value="students">Students</option>
        <option value="teacher">teacher</option>

        </select>
        
      </form>
      <button onClick={login}>
        submit
      </button>
     
    </div>
  )
}
