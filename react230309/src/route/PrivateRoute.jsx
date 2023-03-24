import React from 'react'
import { Navigate } from 'react-router-dom';
import ProductDetail from '../page/ProductDetail';
import { useState } from 'react';


const PrivateRoute = ({userLogin}) => {
  // 조건문이나 반복문 안에서 useNavigate()를 가져다가 쓸 수 없다.

  return (
    userLogin === true ? <ProductDetail/> : <Navigate to='/login'/>
  )
}

export  default PrivateRoute