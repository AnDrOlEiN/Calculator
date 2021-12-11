import { BTN_ACTIONS } from "@/constants/keypad";
import { isInteger } from "./isInteger";

export const getResultExpression = (str) => {
  const arrayOfOperators = str.split(' ');

  const resultExpression = arrayOfOperators.reduce((sum, elem, index) => {
    if (index === 0 && Number(elem)) {
      sum = Number(elem);
    };

    switch(elem) {
      case BTN_ACTIONS.Plus:
        return sum += Number(arrayOfOperators[index + 1]);
      case BTN_ACTIONS.Minus:
        return sum -= Number(arrayOfOperators[index + 1]);
      case BTN_ACTIONS.Multiply:
        return sum *= Number(arrayOfOperators[index + 1]);
      case BTN_ACTIONS.Divide:
        return sum /= Number(arrayOfOperators[index + 1]);
      default:
        return sum;
    }
  }, 0);

  const result = isInteger(+resultExpression) ? resultExpression : resultExpression.toFixed(3);
  return result.toString();
}