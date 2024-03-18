import React, { useEffect, useState } from 'react'
import Post from '../body/Post'
// import Searchbox from '../body/Searchbox'
import './indexpage.css'
import Homepage from './Homepage'
import Sidebar from '../body/Sidebar'

function IndexPage() {
 const [posts,setPosts]=useState([])
  useEffect(()=>{
    fetch('http://localhost:4000/post')
     .then(response =>{
      response.json().then(posts =>{
      // console.log(posts);
      setPosts(posts);
    });
    });
  }
  ,[])
  return (
    <div className='indexpage'>
       <div className='indexpage-home'>
       <Homepage/>
       </div>
       <div>
        <Sidebar/>
       </div>
       {/* <div className='indexpage-post'> */}
        <div className='indexpage-postul'> 
        {posts.length >0 && posts.map(post=>(
         <div className='indexpage-postli'>
         <Post key={post.id} {...post}/>
         </div>
        ))}
        </div>
        {/* </div> */}
    </div>
  )
}

export default IndexPage