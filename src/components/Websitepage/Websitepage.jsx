import React from 'react'
import './Websitepage.css'

function Websitepage() {
  return (
    <div className='website-container'>
        <h1>Website Price Category</h1>
        <hr/>
      <div className="website">        
        <div className="single-page">
            <h1>Landing Page Website</h1>
            <p>&#8358;300000</p>
        </div>
        <div className="multi-page">
        <h1>Multipage Website</h1>
        <p>&#8358;500000</p>
        </div>
        <div className="ecom-page">
        <h1>E-commerce Website</h1>
        <p>&#8358;1200000</p>
        </div>
      </div>
    </div>
  )
}

export default Websitepage
