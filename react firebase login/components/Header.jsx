import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from "../assets/logo.png"

export default function Header(props) {
    return (
        <Container props>
            <img src={logo} alt="" />
           { props.signin && <Link to="/login" className="btn">Sign in</Link> }
        </Container>
          )
        }
        
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0rem 2rem;
    background-color:rgba(0,0,0,0.9);
    img{
        height: 9vh;
    }
    .btn{
        background-color:red;
        color: white;
        padding: 0.5rem 0.8rem;
        text-decoration: none;
        border: 1px solid transparent;
    }
`
        