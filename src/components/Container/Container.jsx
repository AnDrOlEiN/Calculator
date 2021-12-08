import React from 'react';

import { StyledContainer } from './components';

const Container = ({ children }) => {
  return (
    <StyledContainer>{children}</StyledContainer>
  );
};

export default Container;