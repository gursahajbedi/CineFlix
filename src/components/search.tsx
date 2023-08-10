import { useContext, useState, useEffect} from "react"
import {Link,useLocation} from "react-router-dom"
import { Authcontext } from "../context/Context"
import axios from "axios"
import { Navbar } from "./navbar"

export const Search=()=>{
    const location=useLocation()
    const searchdata = location.state
    const [data,setdata]=useState([])

    useEffect(()=>{
        axios.get(`https://api.tvmaze.com/search/shows?q=${searchdata}`).then((res)=>{
            console.log(res.data)
            setdata(res.data)
        })
    },[searchdata])
    
    return(
        <div>
            <Navbar/>
            <div className="container-fluid">
                <div className="container-fluid d-flex flex-wrap">
                    {data.map((element)=>
                    (
                        <Link to={'/movie'} className="text-decoration-none text-dark" state={
                            {
                                'premiered':element['show']['premiered'],
                                'ended':element['show']['ended'],
                                'rating':element['show']['rating']['average'],
                                'summary':element['show']['summary'],
                                'name':element['show']['name'],
                                'genres':element['show']['genres'],
                                'language':element['show']['language'],
                                'img':element['show']['image']['original']
                            }
                        }>
                            <div className="card m-4" style={{maxWidth:'13rem'}}>
                                {element['show']['image']?(<img className="card-img-top" src={element['show']['image']['medium']} alt="" />):(<img className="card-img-top" src="https://i.pinimg.com/1200x/e7/41/6d/e7416d7a42a0b688908fb97915ddfcb4.jpg"/>)}
                                <div className="card-body">
                                    <h5 className="card-text">{element['show']['name']}</h5>
                                </div>
                            </div>
                        </Link>
                    )
                    )}
                </div>

            </div>
        </div>
    )
}