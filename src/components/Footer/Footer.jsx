import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/hand.jpg'
import instagram_logo from '../Assets/instagram.jpg'
import facebook_icon from '../Assets/facebook.jpg'
import watsapp_icon from '../Assets/watsapp.jpg'
import youtube_icon from '../Assets/youtube.jpg'
import logo from '../Assets/logo1.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>BRILLSTACK 🙋‍♀️</p>
        </div>
       <ul className="footer-links">
        <li><Link to='/about' style={{textDecoration:'none'}}>Company</Link></li>
        <li><Link to='/product' style={{textDecoration:'none'}}>Products</Link></li>
        <li><Link to='/contact' style={{textDecoration:'none'}}>Offices</Link></li>
        <li><Link to='/about' style={{textDecoration:'none'}}>About</Link></li>
        <li><Link to='/contact' style={{textDecoration:'none'}}>Contact</Link></li>
       </ul>
       <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram_logo} alt="" />        

        </div>
        <div className="footer-icons-container">
            <a href='https://web.facebook.com/acadsoftware' target='_blank' rel='noreferrer'><img src={facebook_icon} alt="" /></a>           
                     

        </div>
        <div className="footer-icons-container">
            <a href='https://wa.me/+2348111145892' target='_blank' rel='noreferrer'><img src={watsapp_icon} alt="" /></a>          
                      
        </div>
        <div className="footer-icons-container">
            <a href="https://youtu.be/zG2aiI-KqIo" target='_blank' rel='noreferrer'> <img src={youtube_icon} alt="" /></a>          
           
        </div>
       </div>
       <div className="footer-copyright">
        <hr/>
        <p><img src={logo} alt="" />&copy; 2024  - All Right Reserved</p>
       </div>
      
    </div>
  )
}

export default Footer
