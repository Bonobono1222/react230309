import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './page/Login';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Nav from './component/Nav';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Router 사용 시 dom 설치, 인덱스 파일에서 <BrowserRouter>로 App 감싸주고
// import { BrowserRouter } from "react-router-dom"; 입력해주기
// App파일에서 import {Routes, Route} from 'react-router-dom'; 입력

// 1. 전체상품 페이지(ProductAll), 로그인페이지(Login), 상세페이지(ProductDetail)
// 2. 로그인 전에 상세페이지 접속시 로그인 페이지를 먼저 보여준다.
// 3. 로그인이 이미 되어 있다면 상세페이지를 보여준다.
// 4. 로그인 하면 로그아웃 버튼이 보이고, 로그아웃 하면 로그인 버튼이 보인다.

function App() {
  return (
    <div className="App">
    <Nav/>
    <Routes>
      <Route path='/' element={<ProductAll/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/product/:id' element={<ProductDetail/>}/>
    </Routes>
    </div>
  );
}

export default App;
