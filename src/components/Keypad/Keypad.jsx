import React, { useState } from 'react';
import { BTN_LIST, BTN_OPERATORS_LIST, BTN_ACTIONS } from '@/constants/keypad';
import { StyledKeypad, StyledButton } from './components';
import { useDispatch } from 'react-redux';
import { addExpression } from '@/store/calculateReducer';
import PropTypes from 'prop-types';
import { getResultExpression } from '@/utils/getResultExpression';
import { message } from 'antd';

const Keypad = ({ calcValue, setCalcValue }) => {
  const dispatch = useDispatch();

  const [prevValue, setPrevValue] = useState('');

  const addNumbersToInput = (value) => {
    if (checkExpressionLength()) {
      message.error('Максимально допустимая длина строки!');
      return;
    }

    const [firstElementExpression] = calcValue.split('');

    if (firstElementExpression === '0') {
      setCalcValue(value);
    } else {
      setCalcValue((prev) => prev + value);
    }

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

    if (BTN_OPERATORS_LIST.includes(prevValue)) {
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
    setCalcValue(getResultExpression(calcValue));

    if (calcValue === '0') return;

    dispatch(addExpression(calcValue));
  }

  const resetValue = () => {
    setCalcValue('');
  };

  const clearValue = () => {
    if (calcValue.trim().includes(BTN_ACTIONS.Infinity)) return setCalcValue('');

    const newCalcValue = calcValue.trim().slice(0, -1);
    setCalcValue(newCalcValue);
  }

  // возможно не понадобится => уточнить
  const checkExpressionLength = () => {
    return calcValue.length >= 18;
  };

  const chooseAction = (value) => {
    switch(value){
      case BTN_ACTIONS.CE:
        resetValue();
        break;
      case BTN_ACTIONS.C:
        clearValue();
        break;
      case BTN_ACTIONS.Dot: 
        addDot(value);
        break;
      // case '(': 
      //   console.log(value);
      //   break;
      // case ')': 
      //   console.log(value);
      //   break;
      case BTN_ACTIONS.Equals:
        setResult();
        break;
      case BTN_ACTIONS.Plus:
      case BTN_ACTIONS.Minus:
      case BTN_ACTIONS.Multiply:
      case BTN_ACTIONS.Divide:
        addOperator(value);
        break;
      default:
        addNumbersToInput(value);
    }
}

  return (
    <StyledKeypad>
      {
        BTN_LIST.map((btn, index) => (
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