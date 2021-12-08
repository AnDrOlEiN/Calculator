import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const StyledLoader = styled.div`
  margin-top: 25px; 
  text-align: center;
`;

const Loading = ({...props}) => {
  return (
    <StyledLoader>
      <Loader type="Oval" color="#000000"
        height={80} width={80} />
    </StyledLoader>
  );
};

export default Loading;
