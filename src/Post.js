import React, { useState,forwardRef } from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import RecommendOutlinedIcon from '@mui/icons-material/RecommendOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


const Post = forwardRef(({name,description,message,photoUrl,timestamp},ref) => {

    const user = useSelector(selectUser)

  return (
    <div ref={ref} className='post'>
        <div className='post__header'>
            <Avatar src={user.photoURL}>{name[0]}</Avatar>
            <dev className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </dev>
        </div>
        <div className='post__body'>
            <p>{message}</p>
            
        </div>
        <div className='post__buttons'>
            <InputOption Icon={RecommendOutlinedIcon} title="Like" color="grey"/>
            <InputOption Icon={ChatBubbleOutlineOutlinedIcon} title="Comment" color="grey"/>
            <InputOption Icon={ShareOutlinedIcon} title="Share" color="grey"/>
            <InputOption Icon={SendOutlinedIcon} title="Send" color="grey"/>
        </div>
    </div>
  )
})

export default Post