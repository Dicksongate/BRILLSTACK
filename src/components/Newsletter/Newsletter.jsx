import React from 'react'
import './Newsletter.css'

function Newsletter() {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our news letter and stay updated</p>
        <div className='email'>
            <input type="email" placeholder='Your Email id' />
            <button>Subscribe</button>
        </div>      
    </div>
  )
}

export default Newsletter
