import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants/router';
import React from 'react';


import { StyledNav, StyledWrapperLink, StyledLinkElem, StyledTitle } from './components';

const NavBar = () => {
  return (
    <StyledNav>
      <StyledTitle>Calculator App</StyledTitle>
      <StyledWrapperLink>
        <StyledLinkElem exact to={HOME_PAGE_ROUTE}>
          Home    
        </StyledLinkElem>
        <StyledLinkElem to={SETTINGS_PAGE_ROUTE}>
          Settings
        </StyledLinkElem>
      </StyledWrapperLink>
    </StyledNav>
  );
};

export default NavBar;
