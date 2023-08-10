import { ReactElement, createContext, useState, useEffect } from "react";


export const Authcontext=createContext({})

export const Authprovider=({children})=>{
    const [user,setuser]=useState(null);
    
    const login=async(username:string,password:string)=>{
        localStorage.setItem('user',JSON.stringify(username))
        setuser(username)
    }
    const logout=async()=>{
        localStorage.removeItem('user')
        setuser(null)
    }

    useEffect(()=>{
        const usere=localStorage.getItem("user")
        if(usere){
            setuser(usere)
        }
    })

    return (
        <Authcontext.Provider value={{user,login,logout}}>
            {children}
        </Authcontext.Provider>
    )
}

