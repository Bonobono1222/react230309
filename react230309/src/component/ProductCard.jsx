import React from 'react'
import './ProductCard.css';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';


const ProductCard = ({menu}) => {


  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${menu.id}`);
  }

  return (
    <div className='ProductCardBox' key={menu.id} onClick={showDetail}>
      <img src={menu?.img} alt='신발'/>
      <div className='PCBItem1'>{menu?.choice == true ? "베스트셀러" : ''}</div>
      <div>{menu?.title}</div>
      <div>{menu?.price}</div>
      <div className='PCBItem1'>{menu?.new == true ? "신상품" : ''}</div>
    </div>
  )
}

export default ProductCard