import React from 'react';
import "./ChannelRow.css";
import { Avatar } from '@mui/material';

function ChannelRow(image,channel,subs,noOfVideos , description) {
  return (
    <div className='channelRow'>
        <Avatar className='channelRow_logo' alt={channel} src={image} />
       {/* <div className='channelRow_text'>
            <h4>{channel}</h4>
  </div> */}

    </div>
  )
}

export default ChannelRow