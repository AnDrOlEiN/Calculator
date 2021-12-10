import React, { useState } from 'react';
import { BTNS_LIST, BTNS_OPERATORS_LIST } from '@/constants/keypad';
import { StyledKeypad, StyledButton } from './components';
import { useDispatch } from 'react-redux';
import { setSavedNumber } from '@/store/calculateReducer';
import PropTypes from 'prop-types';
import { MathimaticOperation } from '@/utils/MathimaticOperation';
import { message } from 'antd';

const Keypad = ({ calcValue, setCalcValue }) => {
  const dispatch = useDispatch();

  // const prevValue = useRef('');
  const [prevValue, setPrevValue] = useState('');

  const setNumbersToInput = (value) => {
    if (checkLength()) {
      message.error('Максимально допустимая длина строки!');
      return;
    }

    setCalcValue((prev) => prev + value);
    setPrevValue(value);
  }

  const addOperator = (value) => {
    if (checkLength()) {
      message.error('Максимально допустимая длина строки!');
      return;
    }

    if (BTNS_OPERATORS_LIST.includes(prevValue)) {
      const newCalcValue = calcValue.replace(/[ , +,*,/,-]/g, '');
      setCalcValue(newCalcValue + " " + value + " ");
      return;
    }

    const expressionLength = calcValue.split(' ').length;
    
    if (expressionLength >= 3) {
      setCalcValue((prev) => String(MathimaticOperation(prev)) + " " + value + " ");
    } else {
      setCalcValue((prev) => prev + " " + value + " ");
    }

    setPrevValue(value);
  }

  const setResult = () => {
    setCalcValue(String(MathimaticOperation(calcValue)));
    dispatch(setSavedNumber(String(MathimaticOperation(calcValue))));
  }

  const resetValue = () => {
    setCalcValue('');
  };

  const clearValue = () => {
    setCalcValue(calcValue.trim().slice(0, -1));
  }

  const checkLength = () => {
    return calcValue.length >= 18;
  };

  const chooseAction = (value) => {
    switch(value){
      case 'CE':
        resetValue();
        break;
      case 'C':
        clearValue();
        break;
      // case '.': 
      //   console.log(value);
      //   break;
      // case '(': 
      //   console.log(value);
      //   break;
      // case ')': 
      //   console.log(value);
      //   break;
      case '=':
        setResult();
        break;
      case '+':
        addOperator(value);
        break;
      case '-':
        addOperator(value);
        break;
      case '*':
        addOperator(value);
        break;
      case '/':
        addOperator(value);
        break;
      default:
        setNumbersToInput(value);
    }
}

  return (
    <StyledKeypad>
      {
        BTNS_LIST.map((btn, index) => (
          <StyledButton
            key={index}
            onClick={(e) => chooseAction(e.target.textContent)}
          >
            {btn.name}
          </StyledButton>
        ))
      }
    </StyledKeypad>
  );
};

Keypad.propTypes = {
  calcValue: PropTypes.string,
  setCalcValue: PropTypes.func,
}

export default Keypad;