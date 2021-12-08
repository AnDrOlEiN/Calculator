import React from 'react';


import { StyledNav, StyledWrapperLink, StyledLinkElem } from './components';

const NavBar = () => {
  return (
    <StyledNav>
      <h2 style={{ fontSize: '18px', color: '#fff', fontWeight: 400 }}>Calculator App</h2>
      <StyledWrapperLink>
        <StyledLinkElem exact to="/">
          Home    
        </StyledLinkElem>
        <StyledLinkElem to="/settings">
          Settings
        </StyledLinkElem>
      </StyledWrapperLink>
    </StyledNav>
  );
};

export default NavBar;
