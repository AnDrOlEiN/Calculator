import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Container = ({children}) => {
  return (
    <StyledContainer>{children}</StyledContainer>
  );
};

export default Container;