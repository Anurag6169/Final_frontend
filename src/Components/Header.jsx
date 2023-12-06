import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #0353C9;
  padding: 1rem;
  height: 3rem;
  color: #fff;
  
  @media (max-width: 430px) {
    padding: 0.5rem;
    height: 2rem;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  
  @media (max-width: 430px) {
    font-size: 1rem;
  }
`;

const Hamburger = styled.div`
  > img {
    width: 2rem;
    height: 2rem;
    object-fit: contain;
    
    @media (max-width: 430px) {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

const Header = () => {
  return (
    <Nav>
      <Title>RAP</Title>
      <Hamburger><img src="../images/ham.png" alt="hamburger icon" /></Hamburger>
    </Nav>
  );
};

export default Header;

