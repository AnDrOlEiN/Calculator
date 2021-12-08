import React from 'react';
import Container from '../Container/Container';
import NavBar from '../NavBar/NavBar';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#505050' }}>
      <Container>
        <NavBar />
      </Container>
    </header>
  );
};

export default Header;
