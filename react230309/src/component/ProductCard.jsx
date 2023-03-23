import React from 'react'
import './ProductCard.css';


const ProductCard = ({menu}) => {
  return (
    <div className='ProductCardBox' key={menu.id}>
      <img src={menu.img} alt='신발'/>
      <div className='PCBItem1'>{menu.choice == true ? "베스트셀러" : ''}</div>
      <div>{menu.title}</div>
      <div>{menu.price}</div>
      <div className='PCBItem1'>{menu.new == true ? "신상품" : ''}</div>
    </div>
  )
}

export default ProductCard