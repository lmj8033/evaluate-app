import styled from 'styled-components';

export const Container = styled.div`
  padding: 5rem 2rem 2rem 2rem;
  background: radial-gradient(
    circle,
    rgba(92, 39, 251, 1) 0%,
    rgba(112, 71, 247, 1) 100%
  );
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 1rem;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 1.5rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  }
`;
export const Link = styled.a`
  color: #fff;
  margin-bottom: 1.3rem;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #ff9c00;
    transition: 200ms ease-in;
  }
`;
export const Title = styled.p`
  font-size: 1.5rem;
  color: black;
  margin-bottom: 1.5rem;
  font-weight: bold;
`;
