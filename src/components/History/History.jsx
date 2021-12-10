import React from 'react';
import { useSelector } from 'react-redux';
import { StyledWrapper, StyledHistory, StyledItem } from './components';

const History = () => {
  const { savedExpression } = useSelector((state) => state.calculator);

  console.log(savedExpression);

  return (
    <StyledWrapper>
      <h2 style={{ textAlign: 'center', fontSize: 18 }}>History</h2>
      <StyledHistory>
        <ul style={{ marginBottom: 0 }}>
          {savedExpression.map((expression, index) => {
            return expression ? <StyledItem key={index}>{expression}</StyledItem> : null;
          })}
        </ul>
      </StyledHistory>
    </StyledWrapper>

  );
};

export default History;