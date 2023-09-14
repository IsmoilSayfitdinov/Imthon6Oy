import React, { useEffect, useState } from 'react'
import Netflix from "../../assets/img/Netflix.png"
import "./Navs.scss"
import { Link } from 'react-router-dom'

const Nav = () => {

    const [countrsItems , setCounterisItems] = useState([])

    useEffect(()=>{
       fetch("https://api.themoviedb.org/3/watch/providers/regions",{
        headers:{
            'Authorization':"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGQ1MDA3NGM3ZmQ5MjFmMjUzMWYwODVkYzk1OGFkMiIsInN1YiI6IjY1MDE5ZTY5ZGI0ZWQ2MTAzM2EyOWU4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gb8j1OJbXSKd9oPmeQlOy8I6SMGzm1nDTlY5SXtR4No"
        }
       })
       .then(response => response.json())
       .then(data => setCounterisItems(data?.results))
    },[])


  return (
    <div className='nav__main'>
        <div className="nav__block">
        <div className="nav__logo">
             <img src={Netflix} alt="" />
        </div>
        <ul>
            <Link to={"/"}><li>HOME</li></Link>
            <Link  to="/move"><li>TV-SHOWS</li></Link>
            <Link><li>MOVIES</li></Link>
            <Link> <li>NEW</li></Link>
            <Link><li>POPULAR</li></Link>
        </ul>
        </div>
        <div className="nav__countris">
            <div className="select__block">
                <span className='country__text'>COUNTRIES</span>
            <select>
                 {countrsItems?.map(itemsCounter => 
                    <option key={itemsCounter?.id}>{itemsCounter?.native_name}</option>
                )}
             </select>
            </div>
         <div>
            <input type="text" placeholder='Serach' className='input__Secrh'/>
         </div>
        </div>
    </div>
  )
}

export default Nav