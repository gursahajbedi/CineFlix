// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useState,useContext } from "react"
import { Authcontext } from "../context/Context"


export const Login=()=>{
    const [username,setusername]=useState()
    const [password,setpassword]=useState()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const {login}=useContext(Authcontext)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const handlesubmit=(e)=>{
        e.preventDefault()
        login(username,password)
    }

    return(
        <div className="d-flex container justify-content-center align-items-center" style={{height:'100vh', width:'100vw'}}>
            <div className="container">
                <h1 className="my-5 display-3">Login</h1>
                <h3>Username</h3>
                <input type="text" className="form-control mb-4" onChange={(e)=>{setusername(e.target.value)}} />
                <h3>Password</h3>
                <input type="password" className="form-control mb-4" onChange={(e)=>{setpassword(e.target.value)}} />
                <button className="btn-lg btn-success mt-3" onClick={handlesubmit}> Submit</button>
            </div>
        </div>
    )
}