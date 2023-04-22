import React, { useState , useEffect } from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import homeImage from "../assets/home.jpg"
import "../styles/fontFamily.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getGenres } from '../store'


export default function Netflix() {
  const [isScrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  useEffect(() => {
   dispatch(getGenres());
  }, [])
  

  window.onscroll = () =>{
    setScrolled(window.pageYOffset === 0? false : true );
    return ()=> (window.onscroll = null);
  }
  return (
    <>
    <Navbar isScrolled={isScrolled}/>
    <Container>
      <div className="home">
        <img src={homeImage} alt="" />
        <div className="titles">
        <h1 className='hometitle'>STRANGER THINGS</h1>
        <div className="buttns">
          <button onClick={()=>navigate('/player')}><i class="fa fa-play" aria-hidden="true"></i> Play</button>
          <button><i class="fa fa-info-circle" aria-hidden="true"></i> More Info</button>
        </div>
        </div>
      </div>
    </Container>
    </>
  )
}

const Container = styled.div`
height:100vh;
.home{
  height:100vh;
}
.home img{
  height:100vh;
  width:100vw;
  filter:brightness(60%);
}
.titles{
  position:absolute;
  top:40%;
  left:10%;
}
.hometitle{
  z-index:10;
  color:white;
  font-size:5rem;
  font-family: 'Anton', sans-serif;
}
.buttns{
  margin-top:-2rem;
}
.buttns button{
  padding:1rem 2rem;
  margin-right:1rem;
  cursor:pointer;
  font-size:1.2rem;
}
.buttns button:nth-child(2){
  background-color:grey;
}
.buttns button:nth-child(2):hover{
  background-color:white;
}
`
