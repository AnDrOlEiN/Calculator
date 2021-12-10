import React, { useState } from 'react';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

const Calculator = () => {
  const [calcValue, setCalcValue] = useState('');

  return (
    <div style={{ width: '100%', marginRight: 15 }}>
      <Display calcValue={calcValue} />
      <Keypad calcValue={calcValue} setCalcValue={setCalcValue} />
    </div>
  );
};

export default Calculator;