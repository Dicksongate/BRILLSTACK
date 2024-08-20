import React from 'react'
import './Hero.css'
import hand_shake from '../Assets/hand3.jpg'
import websit_logo from '../Assets/website.jpg'
import order_icon from '../Assets/order.jpg'

function Hero() {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY👋</h2>
        <div>
         <div className="hand-hand-icon">
          <p>GET YOUR</p>
          <img src={hand_shake} alt="" />
         </div>
         <p>BUSINESS WEBSITE</p>
         <p>FROM US✔</p>
        </div>
        <div className="website-latest-btn">
          <div className='website'>BEST WEBSITE</div>
          <img src={order_icon} alt="" />
        </div>

      </div>
      <div className="hero-right">
        <img src={websit_logo} alt="" style={{width:'200px',height:'150px'}} />
        
      </div>
      
    </div>
  )
}

export default Hero
