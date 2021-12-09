import Calculator from '@/components/Calculator/Calculator';
import History from '@/components/History/History';
import React from 'react';

import { StyledFlex } from './components';

const Home = () => {
  return (
    <>
      <StyledFlex>
        <Calculator />
        <History />
      </StyledFlex>
    </>
  )
}

export default Home;