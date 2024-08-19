import React from 'react'
import './Item.css'

function Item(props) {
  return (
    <div className='item'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="item-prices">
          <div className="item-price-new">
          &#8358;{props.new_price}            
          </div>  
          <div className="item-price-old">
          &#8358;{props.old_price}
          </div>  
        </div>
      
    </div>
  )
  
}

export default Item
