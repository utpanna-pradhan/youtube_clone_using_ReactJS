import React from 'react';
import Avatar from '@mui/material/Avatar';
import "./VideoCard.css";


function VideoCard( { title,image ,channel ,views, timestamp , channel_image }) 
{
  return (
    <div className='videoCard'>
        <img src ={image} alt=""  className='videoCard_thumbnail' />
        
        <div className='videoCard_info'>
          <Avatar className='videoCard_avatar' alt ={channel} src={channel_image} />
            <div className='videoCard_text'>
              <p className='para'>{title}</p>
              <p>{channel}</p>
              <p>{views} . {timestamp}</p>
            </div>
        </div>
    </div>
  )
}

export default VideoCard