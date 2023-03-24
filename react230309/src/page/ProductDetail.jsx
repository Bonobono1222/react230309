import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './ProductDetail.css';
import PrivateRoute from '../route/PrivateRoute';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const ProductDetail = () => {

  let {id} = useParams();
  // useParams를 이용하여 id값을 가져온다.
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    // API 호출
    // /products/ 뒤에 값은 내가 클릭한 값이 들어와야 한다.
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    setProduct(data);
  }

  useEffect(() => {
    getProductDetail()
  },[])

  return (
    <div className='ProductDetailBox'>
      <div className='PDBImg'>
      <img src={product?.img} alt='신발'/>
      </div>
      <div className='PDBI'>
      <div className='PCBItem2 new'>{product?.new == true ? "신상품" : ''}</div>
      <div className='PCBItem1 PCBItem2'>{product?.choice == true ? "베스트셀러" : ''}</div>
      <div>{product?.title}</div>
      <div className='PCBItem2'>{product?.price}원</div>
      <div className='PCBItem2'>{product?.size}</div>
      <div className='PCBItem3'>{product?.inpo}</div>
      </div>
    </div>
  )
}

export default ProductDetail
