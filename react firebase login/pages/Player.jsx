import React from 'react'
import styled from 'styled-components'
import {BsArrowLeft} from "react-icons/bs"
import video from "../assets/demo.mp4"
import { useNavigate } from 'react-router-dom'

export default function Player() {
    const navigate = useNavigate()
  return (
    <Container>
        <div className="player">
            <div className="back">
                <BsArrowLeft onClick={()=>navigate(-1)}/>
            </div>
            <video src={video} autoPlay loop controls muted className='playvideo'></video>
        </div>
    </Container>
  )
}

const Container = styled.div`
padding:0rem;
margin:0rem;
.back{
    position:absolute;
    z-index:10;
    top:4%;
    left:5%;
    color:white;
    font-size:2rem;
    cursor:pointer;

}
.player{
    height:100vh;
    width:100vw;
}
.playvideo{
    height:100%;
    // width:100%;
}
`