import { onAuthStateChanged ,signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import logo from "../assets/logo.png"
import {firebaseAuth} from "../utils/firebase-config.js"


export default function Navbar(props) {
    const navigate = useNavigate();

    const signoutUser = () =>{
        signOut(firebaseAuth)
    }

    onAuthStateChanged(firebaseAuth,(currentUser)=>{
        if (!currentUser) navigate("/login")
      })
      
    const [inputClick, setinputClick] = useState(false)
    const links = [
        {"name":"Home","url":"/"},
        {"name":"TVshows","url":"/tvshows"},
        {"name":"Movies","url":"/movies"},
        {"name":"My List","url":"/mylist"},
    ];
  return (
    <Container style={{backgroundColor: props.isScrolled ? "black":"transparent"}}>
        <div>
<img src={logo} alt="" className='netflixlogo'/>
{links.map((link)=><Link to={link.url} className="navlinks">{link.name}</Link>)}

        </div>
        <div>
        {inputClick && <input type="text" className='searchInput'/> }
        <i className="fa fa-search" aria-hidden="true" onClick={()=>setinputClick(!inputClick)}></i>
        <i className="fa fa-power-off" aria-hidden="true" onClick={signoutUser}></i>

        </div>
    </Container>
  )
}

const Container = styled.div`

display:flex;
z-index:1000;
align-items:center;
justify-content:space-between;
padding:0rem 1rem;
position:fixed;
transition:all 0.4s ease;
width:98vw;

div{
display:flex;
align-items:center;
justify-content:center;
}
.netflixlogo{
    height: 9vh;
}
.navlinks{
    text-decoration:none;
    color:white;
    margin:0rem 1rem;
    font-family: sans-serif;

}
i{
    color:white;
}
.fa-search{
    margin-left:0.3rem;
}
.fa-power-off{
    margin-left:1rem;
}
.searchInput{
    transition: 1s all ease-in
}

`
