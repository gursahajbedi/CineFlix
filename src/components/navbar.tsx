// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useContext, useState} from "react"
import {Link} from "react-router-dom"
import { Authcontext } from "../context/Context"


export const Navbar=()=>{
    const [search,setsearch]=useState()
    const {logout}=useContext(Authcontext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(search)
    }
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-4 d-flex justify-content-between flex-nowrap">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><div className="display-4">Cineflix</div></a>
                </div>
                <div className="">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav mr-auto">
                    <a className="nav-item nav-link active" onClick={logout}><h4 className="mt-1 btn btn-danger">Logout</h4></a>
                    <form onSubmit={handleSubmit} className="form-inline nav-item d-flex flex-nowrap">
                        <input type="text" className="nav-item mr-sm-2 form-control" style={{width:"15rem"}} placeholder="search" onChange={(e)=>setsearch(e.target.value)}/>
                        <Link to='/search' state={search}><button className="  btn btn-success my-2 my-sm-0">Search</button></Link>
                    </form>
                  </div>
                </div>
            </nav>
        </div>
    )
}