import React, { useState } from 'react';
import { BTNS_LIST, BTNS_OPERATORS_LIST } from '@/constants/keypad';
import { StyledKeypad, StyledButton } from './components';
import { useDispatch } from 'react-redux';
import { setSavedExpression } from '@/store/calculateReducer';
import PropTypes from 'prop-types';
import { getResultExpression } from '@/utils/getResultExpression';
import { message } from 'antd';

const Keypad = ({ calcValue, setCalcValue }) => {
  const dispatch = useDispatch();

  const [prevValue, setPrevValue] = useState('');

  const setNumbersToInput = (value) => {
    if (checkExpressionLength()) {
      message.error('Максимально допустимая длина строки!');
      return;
    }

    setCalcValue((prev) => prev + value);
    setPrevValue(value);
  }

  const addDot = (value) => {
    if (!calcValue.includes(value)) {
      const newCalcValue = calcValue.replace(/[.]/g, '');
      setCalcValue(newCalcValue + value);
    }
  };

  const addOperator = (value) => {
    if (checkExpressionLength()) {
      message.error('Максимально допустимая длина строки!');
      return;
    }

    if (BTNS_OPERATORS_LIST.includes(prevValue)) {
      const newCalcValue = calcValue.replace(/[ ,+,*,/,-]/g, '');
      setCalcValue(`${newCalcValue} ${value} `);
      return;
    }

    // Варик с обновлением строки
    // const expressionLength = calcValue.split(' ').length;
    // if (expressionLength >= 3) {
    //   setCalcValue((prev) => String(getResultExpression(prev)) + " " + value + " ");
    // } else {
    setCalcValue((prev) => `${prev} ${value} `);
    // }

    setPrevValue(value);
  }

  const setResult = () => {
    setCalcValue(getResultExpression(calcValue).toString());

    if (calcValue === '0') return;
    dispatch(setSavedExpression(calcValue));
  }

  const resetValue = () => {
    setCalcValue('');
  };

  const clearValue = () => {
    if (calcValue.trim().includes('Infinity')) return setCalcValue('');
    setCalcValue(calcValue.trim().slice(0, -1));
  }

  // возможно не понадобится => уточнить
  const checkExpressionLength = () => {
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
      case '.': 
        addDot(value);
        break;
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
      case '-':
      case '*':
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