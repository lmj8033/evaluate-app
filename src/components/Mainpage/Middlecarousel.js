import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const Word = styled.h3`
  @media (max-width: 700px) {
    display: none;
  }
`;

export default function Middlecarousel() {
  return (
    <Carousel className="mt-5">
      <Carousel.Item className="mt-4">
        <img
          style={{ height: '38vw' }}
          className="d-block w-100"
          src="images/croatia1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <Word>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Word>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="mt-4">
        <img
          style={{ height: '38vw' }}
          className="d-block w-100"
          src="images/croatia2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <Word>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Word>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="mt-4">
        <img
          style={{ height: '38vw' }}
          className="d-block w-100"
          src="images/croatia3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <Word>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Word>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
