import {createContext, useContext, useEffect, useState} from 'react';

const ProfileContext = createContext();
export const ProfileProvider = ({children})=>{
   let [profile, setProfile] = useState(true);
   let [users, setUsers]  = useState();
   useEffect(()=>{
    let token= localStorage.getItem('token');
    if(token){
        setProfile(true);
       
        let users = async()=>{
      
         
           
              let result = await axios.post('http://localhost:3000/user_detail', {token});
            console.log(result.data);
            let name= result.data.name.split(' ');
           
        
            setUsers(name[0]);
        
            }
            
        
            
            users();
                
          
    }
    else{
        setProfile(false)
    }


   },[profile])
    return(
        <>
            <ProfileContext.Provider value = {{profile, users}}>
            {children}

            </ProfileContext.Provider>
        </>
    )
}
export const useProfile =() => useContext(ProfileContext); 