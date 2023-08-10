import { useContext, useState, useEffect} from "react"
import {Link} from "react-router-dom"
import { Authcontext } from "../context/Context"
import axios from "axios"
import "./img.css"
import { Navbar } from "./navbar"


export const Content=()=>{
    const [page,setPage]=useState(1)
    const [data,setdata]=useState([])
    const [loading,setloading]=useState(true)

useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows?page=${page}`).then((res)=>{
        console.log(res.data)
        setdata(res.data)
        setloading(false)
    })
}, [page])


    return(
        <div>
            <Navbar/>
            <div className="container-fluid">
                <div className="container-fluid d-flex flex-wrap">
                {data.map((element)=>(
                    <Link to={'/movie'} className="text-decoration-none text-dark" state={
                        {
                            'premiered':element['premiered'],
                            'ended':element['ended'],
                            'rating':element['rating']['average'],
                            'summary':element['summary'],
                            'name':element['name'],
                            'genres':element['genres'],
                            'language':element['language'],
                            'img':element['image']?element['image']['original']:'https://i.pinimg.com/1200x/e7/41/6d/e7416d7a42a0b688908fb97915ddfcb4.jpg'
                       }
                    }>
                        <div className="card m-4" style={{maxWidth:'13rem'}}>
                            {element['image']?(<img className="card-img-top" src={element['image']['medium']} alt="" />):(<img className="card-img-top" src="https://i.pinimg.com/1200x/e7/41/6d/e7416d7a42a0b688908fb97915ddfcb4.jpg"/>)}
                            <div className="card-body">
                                <h5 className="card-text">{element.name}</h5>
                            </div>
                        </div>
                    </Link>
                ))}
                </div>
                <div className="container-fluid mb-5 mt-3">
                    <button onClick={()=>{setPage(page+1)}} className="btn-lg btn-dark me-3" >Next Page</button>
                    {page>1 && (<button onClick={()=>{setPage(page-1)}} className="btn-lg btn-dark">Previous Page</button>)}
                </div>
            </div>
        </div>
    )
}