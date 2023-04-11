import React, { useEffect, useState } from 'react'
import {db} from "./firebase"
import "./Feed.css"
import CreateIcon from "@mui/icons-material/Create"
import InputOption from './InputOption'
import ImageIcon from "@mui/icons-material/Image"
import SubscriptionsIcon from "@mui/icons-material/Subscriptions"
import EventNoteIcon from "@mui/icons-material/EventNote"
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay"
import Post from './Post'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import FlipMove from 'react-flip-move';



function Feed() {

    
     const [input,setInput] = useState('')
     const [posts,setPosts] = useState([])
    
     const user = useSelector(selectUser)

     useEffect(()=>{
        db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot)=>(
            setPosts(snapshot.docs.map((doc) =>({
                id:doc.id,
                data:doc.data(),

            }))
        ))

      ) },[])

     const sendPost =(e)=>{
         e.preventDefault();
         db.collection('posts').add({
             name:user.displayName,
             description:user.email,
             message: input,
             photoUrl:user.photoURL || " ",
             timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            

         })

        setInput('')
     }   

     
  return (
    <div className='feed'>
        <div className='feed__inputContainer'>
            <div className='feed__input'>
                <CreateIcon/>
                <form >
                    <input value={input} onChange={(e)=>setInput(e.target.value)} type="text"/>
                    <button type='submit' onClick={sendPost}>Send</button> 
                </form>
            </div>
            <div className='feed__inputOptions'>
                <InputOption title='Photo' Icon={ImageIcon} color="#70b5f9"/>
                <InputOption title='Photo' Icon={SubscriptionsIcon} color="#e7a33e"/>
                <InputOption title='Photo' Icon={EventNoteIcon} color="#c0cbcd"/>
                <InputOption title='Photo' Icon={CalendarViewDayIcon} color="#7fc15e"/>
            </div>
        </div>

        {/*Post*/}
        <flipMove>
        {posts.map(({id,data:{name,description,message,photoUrl}})=>( 
         <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />)
           
        )} 
        </flipMove>
        

    </div>
  )
}

export default Feed