import React from 'react';
import Container from '../Container/Container';
import NavBar from '../NavBar/NavBar';
import { StyledHeader } from './components';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <NavBar />
      </Container>
    </StyledHeader>
  );
};

export default Header;
