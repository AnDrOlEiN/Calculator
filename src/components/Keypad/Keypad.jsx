import React from 'react';
import { BTNS_LIST } from '@/constants/keypad';
import { StyledKeypad, StyledButton } from './components';

const Keypad = () => {

  const handleClick = (btn) => {
    console.log(btn);
  }

  return (
    <StyledKeypad>
      {
        BTNS_LIST.map((btn, index) => (
          <StyledButton
              key={index}
              onClick={() => handleClick(btn)}
          >
              {btn.display}
          </StyledButton>
        ))
      }
    </StyledKeypad>
  );
};

export default Keypad;