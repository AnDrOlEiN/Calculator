import React from 'react';
import Loader from 'react-loader-spinner';

import { StyledLoader } from './components';

const Loading = () => {
  return (
    <StyledLoader>
      <Loader type="Oval" color="#000000"
        height={80} width={80} />
    </StyledLoader>
  );
};

export default Loading;
