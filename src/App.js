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
import Login from './components/accountBox/loginForm';

function App() {
  // const isLogin = useSelector((state) => state.users.isLogin);

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
      </Routes>
    </>
  );
}

export default App;
