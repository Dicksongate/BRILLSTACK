import React, { useContext } from 'react'
import './Mainproductpage.css'
import all_products from '../Assets/all_products'
import { useParams } from 'react-router-dom'

function Mainproductpage() {
  const {productList} = useContext(all_products)
  const {productId} = useParams()
  const product = productList.find((e)=> e.id === Number(productId))
  return (
    <div>
      <product/>
      
    </div>
  )
}

export default Mainproductpage
