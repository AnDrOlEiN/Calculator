export const getResultExpression = (str) => {
  const arrayOfOperators = str.split(' ');

  const resultExpression = arrayOfOperators.reduce((sum, elem, index) => {
    if (index === 0 && Number(elem)) {
      sum = Number(elem);
    };

    console.log(sum, elem, index, 'sdsd');

    switch(elem) {
      case '+':
        return sum += Number(arrayOfOperators[index + 1]);
      case '-':
        return sum -= Number(arrayOfOperators[index + 1]);
      case '*':
        return sum *= Number(arrayOfOperators[index + 1]);
      case '/':
        return sum /= Number(arrayOfOperators[index + 1]);
      default:
        return sum;
    }
  }, 0);

  const result = (+resultExpression % 2 === 0) ? resultExpression : resultExpression.toFixed(3);
  return result;
}