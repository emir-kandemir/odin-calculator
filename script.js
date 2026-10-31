const add = function (firstNumber, secondNumber) {
  const result = firstNumber + secondNumber;
  return result;
};

const subtract = function (firstNumber, secondNumber) {
  const result = firstNumber - secondNumber;
  return result;
};

const multiply = function (firstNumber, secondNumber) {
  const result = firstNumber * secondNumber;
  return result;
};

const divide = function (firstNumber, secondNumber) {
  const result = firstNumber / secondNumber;
  return result;
};

const operate = function (firstNumber, secondNumber, operator) {
  const operators = ['+', '-', '/', '*'];
  switch (operator) {
    case '+':
      operator = operators[0];
      add(firstNumber, secondNumber);
      break;
  }
};
