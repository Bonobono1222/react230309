import React from 'react'
import './ProductCard.css';

const ProductCard = () => {
  return (
    <div className='ProductCardBox'>
      <img src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a364b2e6-f179-49f4-a401-6b8e68a42432/%ED%8E%98%EA%B0%80%EC%88%98%EC%8A%A4-40-%EC%97%AC%EC%84%B1-%EB%A1%9C%EB%93%9C-%EB%9F%AC%EB%8B%9D%ED%99%94-mw2zMwLz.png' alt='신발'></img>
      <div className='PCBItem1'>베스트셀러</div>
      <div>제품명</div>
      <div>가격</div>
      <div>신상품</div>
    </div>
  )
}

export default ProductCard
