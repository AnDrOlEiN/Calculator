import React from 'react';
import Loading from '../../components/Loading/Loading';

import { StyledTitle } from './components';

const Home = () => {
  return (
    <>
      <StyledTitle>Welcome Home</StyledTitle>
      <Loading />
    </>
  )
}

export default Home;