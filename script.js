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
  switch (operator) {
    case '+':
      return add(firstNumber, secondNumber);
    case '-':
      return subtract(firstNumber, secondNumber);
    case '*':
      return multiply(firstNumber, secondNumber);
  }
};
