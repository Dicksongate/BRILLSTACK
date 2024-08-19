import React, { useState } from 'react'
import './Menubar.css'
import { Link } from 'react-router-dom'

function Menubar() {
  const [menu,setMenu] = useState('shop')
  return (    
        <div className="menu-container">
            <ul className="menu-item">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>shop</Link>{menu==="shop"?"":<></>}</li>  
             
            <li onClick={() => {setMenu("contact")}}><Link style={{textDecoration: 'none'}} to='/contact'>contact</Link></li>
            <li onClick={() => {setMenu("about")}}><Link style={{textDecoration: 'none'}} to='/about'>about</Link></li>
                <li onClick={() => {setMenu("product")}}><Link style={{textDecoration : 'none'}} to='/product'>product</Link></li>
                <li onClick={() => {setMenu("apps")}}><Link style={{textDecoration: 'none'}} to='/apps'>apps</Link></li>
                <li onClick={() => {setMenu("resources")}}><Link style={{textDecoration: 'none'}} to='/resources'>resources</Link></li>
            </ul>
        </div>
      
   
  )
}

export default Menubar
