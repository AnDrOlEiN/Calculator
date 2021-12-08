import React from 'react';
import styled from 'styled-components';
import Loading from '../../components/Loading/Loading';

const StyledHome = styled.h1`
  color: ${props => props.theme.colors.dark};
`;

const Home = () => {
  return (
    <>
      <StyledHome>Welcome Home</StyledHome>
      <Loading />
    </>
  )
}

export default Home;