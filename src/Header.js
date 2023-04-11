import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from "@mui/icons-material/Home"
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount"
import BusinesscenterIcon from "@mui/icons-material/BusinessCenter"
import ChatIcon from "@mui/icons-material/Chat"
import NotificationsIcon from "@mui/icons-material/Notifications"
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {

  const dispatch = useDispatch()

  const logoutOfApp = ()=>{
      dispatch(logout())
      auth.signOut()
  }

  const user = useSelector(selectUser)

  return (

   
    <div className='header'>
        
        <div className='header__left'>
                <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png'></img>
                <div className='header__search'>
                   <SearchIcon/>
                    <input type='text' placeholder='Search'></input>
                </div>
        </div>
        <div className='header__right'>
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOption Icon={BusinesscenterIcon} title="Jobs"/>
            <HeaderOption Icon={ChatIcon} title="Messaging"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption avatar={true} title="Me" onClick={logoutOfApp}/>
            
        </div>
    </div>
  )
}

export default Header