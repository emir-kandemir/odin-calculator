const add = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

const subtract = function (firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

const multiply = function (firstNumber, secondNumber) {
  return firstNumber * secondNumber;
};

const divide = function (firstNumber, secondNumber) {
  return firstNumber / secondNumber;
};

const operate = function (firstNumber, secondNumber, operator) {
  switch (operator) {
    case '+':
      return add(firstNumber, secondNumber);
    case '-':
      return subtract(firstNumber, secondNumber);
    case '*':
      return multiply(firstNumber, secondNumber);
    case '/':
      return divide(firstNumber, secondNumber);
  }
};

const calcScreen = document.getElementById('calc-screen');
const buttons = document.querySelectorAll('button');
const buttonText = buttons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button.textContent);
    return button.textContent;
  });
});

calcScreen.textContent = 123;
