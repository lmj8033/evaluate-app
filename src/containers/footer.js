import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';

export function FooterContainer() {
  return (
    <>
      <Footer>
        <Footer.Wrapper>
          <Footer.Row>
            <Footer.Column>
              <Footer.Title>LOGO</Footer.Title>
              <Footer.Link href="#">
                This is just a project.<br></br> We don't offer any services
              </Footer.Link>
            </Footer.Column>
            <Footer.Column>
              <Footer.Title>Quick Links</Footer.Title>
              <Footer.Link href="#">Developers</Footer.Link>
              <Footer.Link href="#">Board</Footer.Link>
              <Footer.Link href="#">Community</Footer.Link>
              <Footer.Link href="#">Recruitment</Footer.Link>
            </Footer.Column>
            <Footer.Column>
              <Footer.Title>About us</Footer.Title>
              <Footer.Link href="#">Story</Footer.Link>
              <Footer.Link href="#">Link</Footer.Link>
              <Footer.Link href="#">Testimono</Footer.Link>
              <Footer.Link href="#">HI</Footer.Link>
            </Footer.Column>
            <Footer.Column>
              <Footer.Title>Social</Footer.Title>
              <Footer.Link href="#">Instagram</Footer.Link>
              <Footer.Link href="#">Facebook</Footer.Link>
              <Footer.Link href="#">Youtube</Footer.Link>
              <Footer.Link href="#">Twitter</Footer.Link>
            </Footer.Column>
          </Footer.Row>
        </Footer.Wrapper>
        <Copyright>
          <p>Copyrightⓒ2022 All rights reserved.</p>
        </Copyright>
      </Footer>
    </>
  );
}

const Copyright = styled.div`
  text-align: center;
  margin-top: 8vw;
`;
