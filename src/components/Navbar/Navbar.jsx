import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo1.png'
import cat_icon from '../Assets/cart.jpg'
import { Link } from 'react-router-dom'

export default function Navbar() {

  const [menu,setMenu] = useState("shop")
  return (
    <div className='navbar'>
      <div className='nav-logo'>
      <Link style={{textDecoration: 'none'}} to='/'><img src={logo} alt="" /></Link>
      <Link style={{textDecoration: 'none'}} to='/'><p>BRILLSTACK TECHNOLOGIES</p></Link>
      </div>  
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("menu")}}><Link style={{textDecoration: 'none'}} to='/menu'>menu</Link>{menu==="menu"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("contact")}}><Link style={{textDecoration: 'none'}} to='/contact'>contact</Link>{menu==="contact"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("about")}}><Link style={{textDecoration: 'none'}} to='/about'>about</Link>{menu==="about"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("product")}}><Link style={{textDecoration: 'none'}} to='/product'>product</Link>{menu==="product"?<hr/>:<></>}</li>        
        <li onClick={()=>{setMenu("resources")}}><Link style={{textDecoration: 'none'}} to='/resources'>resouces</Link>{menu==="resources"?<hr/>:<></>}</li>        
      </ul>
      <div className='nav-login-cart'>
        <Link style={{textDecoration: 'none'}} to='/login'><button>Login</button></Link>
        <Link style={{textDecoration: 'none'}} to='/cart'><img src={cat_icon} alt="" /></Link>
        <div className='nav-cart-count'>0</div>

      </div>         
    </div>
  )
}
