import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Login.css';


const Login = ({setUserLogin}) => {

  const navigate = useNavigate()

  const loginUser = (e) => {
    e.preventDefault();
    // preventDefault로 form이 새로고침 하는걸 막아준다.
    console.log('loginUser')

    setUserLogin(true);
    navigate('/')
  }

  return (
    <div className='loginBox'>
      <form onSubmit={(e) => loginUser(e)}>
      {/* form 자체에서 주는 이벤트를 파라미터 값으로 보내줌 
        onSubmit -> type이 Submit일 경우 사용 */}
      <div className='logoBox'>
        <img src={process.env.PUBLIC_URL + '/nikelogo.png'} alt='logo'></img>
      </div>
      <div className='loginEmail'>
        <p>가입 또는 로그인을 위해 이메일을 입력하세요.</p>
      <div className='selectBox'>
        <span>대한민국</span>
        <select>
          <option disabled>변경</option>
          <option>대한민국</option>
          <option>대한민국</option>
          <option>대한민국</option>
          <option>대한민국</option>
          <option>대한민국</option>
          <option>대한민국</option>
          <option>대한민국</option>
        </select>
      </div>
      </div>
      <div className='EinputBox'>
        <input type='text' placeholder='이메일'></input>
      </div>
      <div className='loginI'>
        <p>계속 진행하면 나이키의 <a href=''>개인 정보 처리 방침</a> 및 <a href=''>이용약관</a>에 동의하게 됩니다.</p>
      </div>
      <button type='submit' className='nextBtn'>계속</button>
      </form>
    </div>
  )
}

export default Login
