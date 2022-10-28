import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  top: 0;
  padding: 0 3vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: #777;
  position: fixed;
  width: 100%;
  z-index: 3;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background-color: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 950px) {
    display: flex;
  }
`;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  color: white;
  transition: all 0.3s ease-in;
  font-size: 1rem;

  &:hover {
    color: #7b7fda;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  transition: 0.6s;

  @media (max-width: 950px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? 'max-height' : '0')};
    transition: max-height 0.6s ease-in-out;
  }
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: white;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Nav>
        <Logo href="#">
          Eli <span>Codes</span>
        </Logo>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuLink href="">Developer</MenuLink>
          <MenuLink href="">Board</MenuLink>
          <MenuLink href="">Community</MenuLink>
          <MenuLink href="">Recruitment</MenuLink>
          <MenuLink href="">Login</MenuLink>
          <MenuLink href="">My page</MenuLink>
        </Menu>
      </Nav>
    </>
  );
};

export default Header;
