import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';


const ProductAll = () => {

  const getProducts = async () => {
      // **async await http 요청**
      // 비동기 처리 하는 가장 최근에 나온 문법.
      // (비동기 처리란? 특정 코드의 실행이 완료될 때 까지 기다리지 않고 다음 코드를 먼저 실행 <-> 동기 처리)
      // 기존에는 비동기 처리를 해주는게 콜백함수였지만,
      // 콜백함수로 사용할 경우에 콜백함수 안에 콜백함수가 들어갈 경우 함수가 계속 중첩되면서 가독성도 떨어지고
      // 로직 변경이 힘들어서 이 점을 보완해서 나온 문법

      let url = "http://localhost:5000/products"
      // 모든 데이터를 가진 주소를 부른다.
      let response = await fetch(url);
      // url을 fetch 해줘라
      let data = await response.json();
      // response에서 json을 뽑아와라
      console.log(data);
      // 데이터 배열 잘 가져오는지 확인**
    }

   useEffect(() => {
      getProducts()
    },[]);

    return (

    <div>ProductAll</div>
  )
}

export default ProductAll
