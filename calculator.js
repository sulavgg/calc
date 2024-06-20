// calculator.js

// Basic math functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Error';
    }
    return a / b;
}

// Function to operate on two numbers based on the operator
function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null;
    }
}

// Variables to store current operation state
let firstNumber = '';
let secondNumber = '';
let currentOperator = '';
let displayValue = '0';

// Function to update the display
function updateDisplay() {
    const display = document.querySelector('.display');
    display.textContent = displayValue;
}

// Function to clear the calculator
function clearCalculator() {
    firstNumber = '';
    secondNumber = '';
    currentOperator = '';
    displayValue = '0';
    updateDisplay();
}

// Function to handle button clicks
function handleButtonClick(event) {
    const buttonText = event.target.textContent;

    if (buttonText >= '0' && buttonText <= '9') {
        if (currentOperator === '') {
            firstNumber += buttonText;
            displayValue = firstNumber;
        } else {
            secondNumber += buttonText;
            displayValue = secondNumber;
        }
    } else if (buttonText === 'C') {
        clearCalculator();
    } else if (buttonText === '=') {
        if (firstNumber !== '' && secondNumber !== '' && currentOperator !== '') {
            const result = operate(currentOperator, parseFloat(firstNumber), parseFloat(secondNumber));
            displayValue = (result === 'Error') ? 'Error' : parseFloat(result.toFixed(5)).toString();
            firstNumber = displayValue;
            secondNumber = '';
            currentOperator = '';
        }
    } else {
        if (firstNumber !== '') {
            if (secondNumber !== '') {
                const result = operate(currentOperator, parseFloat(firstNumber), parseFloat(secondNumber));
                displayValue = (result === 'Error') ? 'Error' : parseFloat(result.toFixed(5)).toString();
                firstNumber = displayValue;
                secondNumber = '';
            }
            currentOperator = buttonText;
        }
    }

    updateDisplay();
}

// Add event listeners to buttons
const buttons = document.querySelectorAll('.calculator button');
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

// Initialize display
updateDisplay();
