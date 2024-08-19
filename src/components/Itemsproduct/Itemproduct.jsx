import React from 'react'
import './Itemsproduct.css'




function Itemproduct(props) {
  return (
    <div className='item-container'>
      <div className="item">
      <img src={props.image} alt="" />
        <p>{props.name}</p>
        <p>{props.category}</p>                   
        <p> &#8358;{props.price}</p>
      </div>
                  
                 
    </div>
  )
}

export default Itemproduct
