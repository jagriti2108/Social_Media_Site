import React from 'react'
import './Post.css';
import { Avatar } from '@mui/material';
function Posts({username,  caption, imageUrl} ) {
  return (
    <div className='post'>
      {/*Post Header: avatar + username */}
      <Avatar src="https://source.unsplash.com/random/?img=2"/>
      
      <h6 className='post_header'>{username}</h6>
      
      {/* post img */}
      <img className='post_img' src={imageUrl} alt=''></img>
      
      {/*Post Footer: username + caption */}
      <h6 className='post_text'><strong>{username}</strong> {caption}</h6>
    </div>
  )
}

export default Posts
