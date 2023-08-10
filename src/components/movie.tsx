import {useLocation} from 'react-router-dom'
import { Navbar } from './navbar'
import { useContext, useState } from 'react'
import './movie.css'
import { Authcontext } from '../context/Context'



export const Movie=()=>{
    const location=useLocation()
    const moviedata=location.state
    const parser=new DOMParser()
    const genres=moviedata.genres
    const [show,setshow]=useState(false)
    const {user}=useContext(Authcontext)
    const [tickets,settickets]=useState(1)
    const [loc,setloc]=useState('Janak Cinema, Janakpuri')
    const [time,settime]=useState('12:30pm')

    return(
        <>
            <div>
                <Navbar/>
                <div className='mt-5 container card border-0 d-flex justify-content-center' style={{maxWidth:'30rem'}}>
                    <div className='display-4 bg-dark text-light p-4'>{moviedata.name}</div>
                    <div className='bg-dark text-warning ps-4 pb-4'> Rating :{moviedata.rating?(<span> {moviedata.rating} </span>):(<span> N/A </span>)}</div>
                    <img src={moviedata.img}></img>
                    <div className='card-body bg-dark text-light'>
                        <div style={{color:'lightgreen'}}> Premiered : {moviedata.premiered} </div>
                        <div style={{color:"pink"}}> Ended : {moviedata.ended} </div>
                        {genres && (<div>{genres.map((genre)=>(
                            <span className='text-light fw-bold'><i>{genre} | </i></span>
                        ))}
                        </div>)}
                        <button className=" mt-3 btn btn-danger" onClick={()=>{setshow(true)}}>Book Show</button>
                    </div>
                </div>
                {show && (
                <div className='pop d-flex justify-content-center align-items-center'>
                    <div className='container bg-light'>
                        <form>
                            <h1><i>Book My Ticket</i></h1>
                            <h3>Username</h3>
                            <input type="text" className='form-control' value={user} disabled />
                            <h3>Tickets</h3>
                            <select className='form-control' onChange={(e)=>{settickets(e.target.value)}}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                            </select>
                            <h3>Location</h3>
                            <select className='form-control' onChange={(e)=>{setloc(e.target.value)}}>
                                <option value="Janak Cinema, Janakpuri">Janak Cinema, Janakpuri</option>
                                <option value="PVR, Vikaspuri">PVR, Vikaspuri</option>
                                <option value="PVR, Pacific Mall">PVR, Pacific Mall</option>
                                <option value="Fun Cinemas, Subhash Nagar">Fun Cinemas, Subhash Nagar</option>
                            </select>
                            <h3>Timings</h3>
                            <select className='form-control' onChange={(e)=>{settime(e.target.value)}}>
                                <option value='12:30pm'>12:30 PM</option>
                                <option value='4:30pm'>4:30 PM</option>
                                <option value='7:30pm'>7:30 PM</option>
                                <option value='9:00pm'>9:00 AM</option>
                                <option value="12:30am">12:30 AM</option>
                            </select>
                            <div className='mt-4 d-flex justify-content-between border-top border-bottom border-2 border-dark'>
                                <div className='container h4 fw-light'>
                                    <div>username : {user}</div>
                                    <div>tickets : {tickets}</div>
                                    <div>location: {loc}</div>
                                    <div>time: {time}</div>
                                </div>
                                <div className='container h4 fw-light border-2text-center'>
                                    <div className='text-success'>Price (Including GST and Taxes)</div>
                                    <br />
                                    <div className='h2 border text-center'>Rs. {300*tickets}</div>
                                </div>
                            </div>
                            <button className='btn btn-danger text-center my-4' onClick={()=>{setshow(false)}}>Checkout</button>
                        </form>
                    </div>
                </div>
                )}
                <div className='container mt-4'>
                    <div className='h4 fw-light pb-5'>{parser.parseFromString(moviedata.summary,'text/html').body.firstChild?.textContent}</div>
                </div>
            </div>
        </>
    )
}