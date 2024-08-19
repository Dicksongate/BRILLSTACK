import React from 'react'
import './Contactpage.css'


function Contactpage() {
  return (
    <div className='contact-container'>
      <div className="addrress">
        <div className="lagos">          
          <h1>Lagos State</h1>
          <p>9,Oluwaseun Street</p>
          <p>Lagos Mainland</p>
          <p>Lagos State</p>                
          
        </div>
        <div className="akwaibom">
          <h1>Akwa Ibom State</h1>
          <p>Old Mercantile Bank Rd</p>
          <p>Ekparakwa</p>
          <p>Oruk Anam LGA</p>
        </div>
        <div className="ibadan">
          <h1>Oyo State</h1>
          <p>43,Obarielogun street</p>
          <p>Fasade-Egbeda</p>
          <p>Ibadan</p>
        
        </div>
      </div>
      <div className="social">
      <div className="phone">        
        <p>📞:08111145892</p>       
        <a href='mailto:brillstacktechnologies@gmail.com' target='_blank' rel='noreferrer' style={{textDecoration:'none'}}>Click here to Send Email</a>      
      </div>   
     
      </div>     
            
    </div>
  )
}

export default Contactpage;
