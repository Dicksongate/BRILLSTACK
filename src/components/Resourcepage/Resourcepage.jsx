import React, { useState } from 'react'
import './Resourcepage.css'
import { Link } from 'react-router-dom'


function Resourcepage() {
  const [resource,setResource] = useState('apps')
  // const [videos,setVideos] = useState('videos')
  // const [others,setOthers] = useState('others')
  return (
   
    <div>
        <div className="resource-container">
          <div className="resource">        
            <button className="apps" onClick={()=>{setResource("apps")}}><Link to='/apps' style={{textDecoration:'none'}}>Apps</Link>{resource==="apps"?<hr/>:<></>}</button>
            <button className="videos" onClick={()=>{setResource("videos")}}><Link to='/videos' style={{textDecoration:'none'}}>Videos</Link>{resource==="videos"?<hr/>:<></>}</button>
            <button className="others" onClick={()=>{setResource("others")}}><Link to='/others' style={{textDecoration:'none'}}>Others</Link>{resource==="others"?<hr/>:<></>}</button>
            <div className="back-home">
             
            </div>
         
          </div>
          <p onClick={() => setResource('/')}><Link to='/'><h3>home page</h3></Link></p>
           
        </div>
      
    </div>
  )
}

export default Resourcepage;
