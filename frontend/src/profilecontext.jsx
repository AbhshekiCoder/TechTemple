import {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import url from './misc/url';
export const ProfileContext = createContext();
export const ProfileProvider = ({children})=>{
   let [profile, setProfile] = useState(true);
   let [users, setUsers]  = useState();
   useEffect(()=>{
    let token= localStorage.getItem('token');
    if(token){
        setProfile(true);
       
        let user = async()=>{
      
         
           
              let result = await axios.post(`${url}user_detail`, {token});
            console.log(result.data);
            let name= result.data.name.split(' ');
           
           console.log(name)
            setUsers(name[0]);
            console.log(users)
        
            }
            
        
            
            user();
                
          
    }
   


   },[profile])
   useEffect(()=>{
    setProfile(false)

   },[])
  
   
    return(
        <>
            <ProfileContext.Provider value = {[profile, users]}>
            {children}

            </ProfileContext.Provider>
        </>
    )
}
export const useProfile = ()=>{
    return useContext(ProfileContext)
}