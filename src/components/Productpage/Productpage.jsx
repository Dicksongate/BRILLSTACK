import React from 'react'
import './Productpage.css'
import all_product from '../Assets/all_products';
import Itemproduct from '../Itemsproduct/Itemproduct';

function Productpage() {
  return (
    <div className="products">
      {all_product.map((item,i) => {
        return <div className="product">
          <Itemproduct key={i} id={item.id} image={item.image} name={item.name} category={item.category} price={item.price}/>
        </div>
      })}
    </div>   
      
              
      
   
  )
}

export default Productpage;
