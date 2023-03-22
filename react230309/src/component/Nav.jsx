import React from 'react';
import './Nav.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// FontAwesomeIcon import
import { faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {faHeart } from "@fortawesome/free-regular-svg-icons";
// 사용할 아이콘 import

const Nav = () => {
  const loginList = ['매장찾기', '고객찾기', '가입하기', '로그인'];
  // 변수 loginList에 array형태(배열)로 값을 넣어줌
  const menuList = ['New Releases', 'Men', 'Women', 'Kids', 'Sale', 'SNKRS', '나이키 앱'];

  return (
    <div className='login'>
      <div className='loginList'> 
        <ul>
        {
          loginList.map((item, i) => {
            // 고유의 key값을 넣어줘야 해서 매개변수 i가 필요
            return (
              <li className='loginItem' key={i}>{item}</li>
            )
          })
        }
        </ul>
      </div>
      <div className='nav'>
        <img src={process.env.PUBLIC_URL + '/nikelogo.png'} alt='logo'>
        </img>
        <ul className='gnbList'>
        {
          menuList.map((menu, i) => {
            return (
              <li className='gnbItem' key={i}>{menu}</li>
            )
          })
        }
        </ul>
        <div className='iconList'>
          <div className='searchBox'>
            <FontAwesomeIcon className='icSearch' icon={faMagnifyingGlass} />
            <input type="text" placeholder='검색'/>
          </div>
        <div>
         <FontAwesomeIcon className='icon' icon={faHeart} />
         <FontAwesomeIcon className='icon' icon={faCartShopping} />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Nav
