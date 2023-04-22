import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Background from '../components/Background'
import Header from '../components/Header'
import {firebaseAuth} from "../utils/firebase-config.js"

export default function Signup() {
    
    const [getStarted, setStarted] = useState(false)
    const [emailError, setemailError] = useState(false)
    const [loginDetails, setLoginDetails] = useState({
        "email": "",
        "password": ""
    })
    const navigate = useNavigate()

    const handleSignIn  = async() => {
        setemailError(false)
        try {
            const {email, password} = loginDetails;
            await createUserWithEmailAndPassword(firebaseAuth,email,password)
            
        } catch (error) {
            if(error.code === 'auth/email-already-in-use'){
                setemailError(true)
            }
        }
    };
    onAuthStateChanged(firebaseAuth,(currentUser)=>{
        if (currentUser) navigate("/")
    })

  return (
<Container>
    <Header signin={true}/>
    <Background/>
    <div className="h1head">
    <h1>Unlimited Movies, TV</h1>
    <h1>shows and more.</h1>
    </div>
    <p>Watch anywhere. Cancel anytime.</p>
    <p>Ready to watch? Enter your email to create or restart your membership.</p>
    <div className="inputs">
        <input type="text" name="email" placeholder='Email address' value={loginDetails.email} onChange={(e)=>{
            setLoginDetails({...loginDetails,[e.target.name]:e.target.value})
        }}/>
        {getStarted && <input type="password" name="password" placeholder='Password' value={loginDetails.password} onChange={(e)=>{
            setLoginDetails({...loginDetails,[e.target.name]:e.target.value})
        }}/>}
        {!getStarted && <button onClick={()=>setStarted(true)}>Get Started &gt;</button>}
    </div>
    {emailError && <p className='errorRed'>This Email already in use!</p>}
    <div className='inputs inpbtn'>{getStarted && <button onClick={handleSignIn}>Sign up</button>}</div>

</Container>
  )
}

const Container = styled.div`
background-color: rgba(0,0,0,0.5);
height:100vh;
.h1head{
    color:white;
    line-height:0.7rem;
    font-size:2rem;
    text-align:center;
    margin-top:28vh;
}
p{
    color:white;
    text-align:center;
    font-size:1.4rem;
}
.inputs{
    display:flex;
    align-items:center;
    justify-content:center;
}
.inputs input{
    padding:1rem;
    width:30%;
}
.inputs button{
    background-color:red;
    color:white;
    padding:1rem;
    width:10%;
}
.inpbtn{
    margin-top:0.4rem;
}
.errorRed{
    color:red;
    text-align:center;
}


`
