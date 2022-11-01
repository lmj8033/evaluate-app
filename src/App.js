import styled from 'styled-components';
import GlobalStyle from './components/Mainpage/GlobalStyle';
import Header from './components/Mainpage/Header';
import Middlecarousel from './components/Mainpage/Middlecarousel';
// import Login from './components/LoginPage/Login';
import { FooterContainer } from './containers/footer';
import Navbar from './components/Mainpage/Navbar.js';
import Photo from './components/Mainpage/Photo.js';
import Language from './components/Mainpage/Language.js';
import Middle from './components/Mainpage/Middle';
import Login2 from './components/LoginPage/Login2';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Mypage from './components/Mypages/Mypage';
import Study from './components/Mypages/Study';
import Profile from './components/Mypages/Profile';
import Tutor from './components/Tutorpage/Tutor';
// import { Login } from './components/accountBox/LoginForm';
// import LoginForm from './components/accountBox/LoginForm';

function App() {
  const isLogin = useSelector((state) => state.user.isLogin);

  return (
    <>
      <GlobalStyle />
      {/* <Header />

      <Container>
        <Middlecarousel />
        <Developer />
      </Container>
    
      <FooterContainer /> */}
      {/* <Navbar />
      <Photo />
      <Language />
      <Middle /> */}
      <Routes>
        <Route path="/login" element={<Login2 />}></Route>
        {/* <Route path="/login" element={isLogin ? <Login2 /> : <Login2 />} /> */}
        <Route path="/mypage" element={<Mypage />}></Route>
        <Route path="/mypage/profile" element={<Profile />}></Route>
        <Route path="/mypage/study" element={<Study />}></Route>
        <Route path="/middle" element={<Middle />}></Route>
        <Route path="/login" element={isLogin ? <Middle /> : <Login2 />} />
        <Route path="/tutor" element={<Tutor />}></Route>
      </Routes>
    </>
  );
}

export default App;
