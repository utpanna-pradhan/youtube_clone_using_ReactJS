//import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
//import { Link } from 'react-router-dom';




function Header(){

   //const [inputSearch , setInputSearch] = useState("");

    return(
    <div className='header'>

        {/* first child */}
        <div className='header_left'>
            <MenuIcon />
            
            <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
             alt="" />
            
            
        </div>

        
        {/* second child */}
        <div className='header_input'> 
            <input  type='text' placeholder='Search' />
            <SearchIcon className='header_inputButton' />
             
            
        </div>
        <div className='mic'>
            <KeyboardVoiceIcon className='micButton' />
        </div>
        
        
        {/* third child */} 
         <div className='header_icons'>
            <VideoCallIcon className='header_icon' />
            <AppsIcon className='header_icon' />
            <NotificationsIcon  className='header_icon' />
            <Avatar alt="Remy Sharp" src=" https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg " />
         </div>
      
    </div>
    )
    } 
export default Header;