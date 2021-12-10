import React from 'react';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

const Calculator = () => {
  return (
    <div style={{ width: '100%', marginRight: 15 }}>
      <Display />
      <Keypad />
    </div>
  );
};

export default Calculator;