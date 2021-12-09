import React from 'react';
import { StyledWrapper, StyledHistory, StyledItem } from './components';

const History = () => {
  return (
    <StyledWrapper>
      <h2 style={{ textAlign: 'center', fontSize: 18 }}>History</h2>
      <StyledHistory>
        <ul style={{ marginBottom: 0 }}>
          <StyledItem>100*2</StyledItem>
          <StyledItem>4900/123</StyledItem>

          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, esse quos ea nulla corrupti recusandae impedit, voluptates necessitatibus dolor voluptatibus, cupiditate sit. Quaerat debitis voluptates dolorem soluta sint iste facere.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, esse quos ea nulla corrupti recusandae impedit, voluptates necessitatibus dolor voluptatibus, cupiditate sit. Quaerat debitis voluptates dolorem soluta sint iste facere.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, esse quos ea nulla corrupti recusandae impedit, voluptates necessitatibus dolor voluptatibus, cupiditate sit. Quaerat debitis voluptates dolorem soluta sint iste facere.
        </ul>
      </StyledHistory>
    </StyledWrapper>

  );
};

export default History;