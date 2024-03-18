import React from 'react'
import {format} from 'date-fns'
import './Post.css'
import { Link } from 'react-router-dom'
function Post({_id,title,summary,cover,content,createdAt,author}) {
  return (
  <div className='postall'>
   <div className='post'>
    <div className='post-image'>
      <Link to={`/post/${_id}`}>
         <img src={'https://mern-back-end-jug7.onrender.com/'+cover} alt='' width='100%' height='100%' />
      </Link>
    </div>
    <div className='text'>
    <Link to={`/post/${_id}`}>
    <h3>{title}</h3>
    </Link>
    {/* <p className='info'>
      <a className='author'>{author.username}</a>
      <time>{format(new Date(createdAt),'dd-MM-yyyy  HH:mm')}</time>
    </p> */}
    {/* <p className="summary">
    {summary}
   </p> */}
  </div>
  <div className='footer-post'>
    <Link className='footer-link' to={`/post/${_id}`}>See more</Link>
  </div>
  </div> 
  </div>
  )
}

export default Post