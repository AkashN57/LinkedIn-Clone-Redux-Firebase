import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Sidebar() {

    const user = useSelector(selectUser)

    const recentItem = (topic)=>{
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    }

  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg"></img>
            <Avatar src={user.photoURL} className='sidebar__avatar'>{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>

        </div>

        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>777</p>
            </div>
            <div className='sidebar__stat'>
            <p>Views on post</p>
                <p className='sidebar__statNumber'>7</p>
            </div>
        </div>

        <div className='sidebar__bottom'>
            <p>Recent</p>
            <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>reactjs</p>
        </div>
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>programming</p>
        </div>
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>softwareengineering</p>
        </div>
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>design</p>
        </div>
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>developer</p>
        </div>
        </div>
    </div>
  )
}

export default Sidebar