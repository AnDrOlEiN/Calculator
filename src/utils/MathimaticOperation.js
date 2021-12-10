export const MathimaticOperation = (str) => {
  const arrayOfOperators = str.split(' ');

  const resultOfMathOperation = arrayOfOperators.reduce((sum, elem, index) => {
    if (index === 0 && Number(elem)) {
      sum = Number(elem);
    };

    console.log(sum, elem, index);

    switch(elem) {
      case '+':
        return sum += Number(arrayOfOperators[index + 1]).toFixed(3);
      case '-':
        return sum -= Number(arrayOfOperators[index + 1]).toFixed(3);
      case '*':
        return sum *= Number(arrayOfOperators[index + 1]).toFixed(3);
      case '/':
        return sum /= Number(arrayOfOperators[index + 1]).toFixed(3);
      default:
        return sum.toFixed(3);
    }
  }, 0);

  console.log(resultOfMathOperation, 'resultOfMathOperation');

  const result = String(resultOfMathOperation).length > 12 ? resultOfMathOperation.toExponential() : resultOfMathOperation;
  return result;
}