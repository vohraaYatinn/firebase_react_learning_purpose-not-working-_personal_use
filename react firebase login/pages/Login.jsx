import React,{useState} from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import Background from '../components/Background'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import {firebaseAuth} from "../utils/firebase-config.js"

export default function Login() {

  const [loginDetails,setLoginDetails] = useState({
    "email": "",
    "password": ""
})
const [loginError, setloginError] = useState(false)
const navigate = useNavigate()
const handleSignin = async() =>{
  setloginError(false)
  try {
    const {email, password} = loginDetails;
    const login = await signInWithEmailAndPassword(firebaseAuth,email,password);
  } catch (error) {
    setloginError(true)
  }
}
onAuthStateChanged(firebaseAuth,(currentUser)=>{
  if (currentUser) navigate("/")
})

  return (
    <Container>
        <Header signin={false}/>
        <Background/>
        <div className="loginComp">
            <h1>Sign In</h1>
            <div className="inps">
              <input type="text" name="email" id="" placeholder='Email or phone number' value={loginDetails.email} onChange={(e)=>{
            setLoginDetails({...loginDetails,[e.target.name]:e.target.value})}}/>
              <input type="password" name="password" id="" placeholder='Password' onChange={(e)=>{
            setLoginDetails({...loginDetails,[e.target.name]:e.target.value})}}/>
            </div>
            {loginError && <p className='errorMsg'>Invalid Email/Phone or Password</p>}
            <div className="signinbtn">
              <button className='signin' onClick={handleSignin}>Sign In</button>
            </div>
            <div className="extraadds">
        
              <input type="checkbox" name="remeber" id="" />
              <label htmlFor="remeber">Remember me</label>
     
  
            </div>
            <div className="newto">
              <p>New to Netflix? <Link className='signnow' to="/signup">Sign up Now</Link></p>
              <div>
                <div className="pageis">
              <p>This page is protected by Google reCAPTCHA to </p>
              <p>ensure you're not a bot. <Link className='learn'>Learn more.</Link></p>
              </div>
              </div>

            </div>
        </div>
    </Container>
  )
}

const Container = styled.div`
background-color: rgba(0,0,0,0.5);
height:100vh;
.loginComp{
  padding:4rem 0rem;
  background-color:rgba(0,0,0,0.7);
  display:flex;
  flex-direction:column;
  color:white;
  align-items:center;
  justify-content:center;
  width:40%;
  position:absolute;
  top:17%;
  left:30%;
}
.inps{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width:62%;

}
.inps input{
  padding:1rem;
  width:100%;
  margin-top:0.2rem;
}
.signinbtn{
  margin-top:1.5rem;
  width:69%;
}
.signin{
  width:10rem;
  background-color:red;
  color:white;
  width:100%;
  height:3rem;
}
.extraadds{
  margin-top:2rem;
  display:flex;
  position:relative;
  right:23%;
}
.newto{
  margin-top:3rem;
  color:grey;
}
.signnow{
  color:white;
  text-decoration:none;
  font-weight:bold;
}
.pageis{
  margin-top:2rem;
  line-height:10px;
}
.learn{
  color:blue;
  text-decoration:none;
}
.errorMsg{
  text-align:center;
  color:red;
}

`