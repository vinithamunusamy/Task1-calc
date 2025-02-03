const calculatorScreen = document.getElementById('calculator-screen');

const updateScreen = (value) => {
  calculatorScreen.value = value;
};

const numbers = document.querySelectorAll("button:not(.operator):not(.equal-sign):not(.clear)");
const operators = document.querySelectorAll(".operator");
const decimal = document.querySelector(".decimal");
const clear = document.querySelector(".clear");
const equalSign = document.querySelector(".equal-sign");

let currentNumber = '0';
let prevNumber = '';
let calculationOperator = '';
let isDecimalAdded = false;

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

clear.addEventListener("click", (event) => {
  clearAll();
  updateScreen(currentNumber);
});

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

const inputOperator = (operator) => {
  prevNumber = currentNumber;
  calculationOperator = operator;
  currentNumber = '0';
  isDecimalAdded = false;
};

const inputDecimal = (dot) => {
  if (!isDecimalAdded) {
    currentNumber += dot;
    isDecimalAdded = true;
  }
};

const clearAll = () => {
  currentNumber = '0';
  prevNumber = '';
  calculationOperator = '';
  isDecimalAdded = false;
};

const calculate = () => {
  let result = '';
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    default:
      return;
  }
  currentNumber = result.toString();
  calculationOperator = '';
};
