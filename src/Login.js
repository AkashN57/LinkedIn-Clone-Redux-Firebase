import React, { useState } from 'react'
import "./Login.css"
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'

function Login() {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [profilePic,setProfilePic] = useState()

  const dispatch = useDispatch();

  const loginToApp = (e)=>{
    e.preventDeafault();

    auth.signInWithEmailAndPassword(email,password).then(userAuth=>{
      dispatch(login({
        email:userAuth.user.email,
        uid:userAuth.user.uid,
        displayName:userAuth.user.displayName,
        profilePic:userAuth.user.photoURL,
       })
      )
    }).catch(error=>alert(error))
  }

  const register = ()=>{
    if(!name){
     return alert("Please enter fullname")
    }

    auth.createUserWithEmailAndPassword(email,password)
    .then((userAuth) =>userAuth.user.updateProfile({
      displayName:name,
      photoURL:profilePic,
    }).then(()=>{
      dispatch(login({
        email:userAuth.user.email,
        uid:userAuth.user.uid,
        displayName:name,
        photoURL:profilePic,
      }))
  }) ).catch(
    error=> alert(error)
  )
  }

  return (
    <div className='login'>
      <img src='https://1000logos.net/wp-content/uploads/2023/01/LinkedIn-logo.png' alt=''></img>
      <form>

        <input 
        type='text' 
         placeholder='Fullname (required)'
          value={name} 
          onChange={(e)=>{setName(e.target.value)}}></input>
       
        <input 
        type='text'  
        placeholder='Profile pic URL (optional)' 
        value={profilePic} 
        onChange={(e)=>{setProfilePic(e.target.value)}}></input>
       
        <input 
        type='email' 
        placeholder='Email' 
        value={email} 
        onChange={(e)=>{setEmail(e.target.value)}}></input>
       
        <input 
        type='password' 
        placeholder='password' 
        value={password} 
        onChange={(e)=>{setPassword(e.target.value)}}></input>
       
        <button type='submit' onClick={(e)=>loginToApp}>Sign in</button>
      </form>
      <p>Not a member?{" "}
        <span className='login__register' onClick={register}>Regitser Now</span>
      </p>
    </div>
  )
}

export default Login