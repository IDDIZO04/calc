const calculator = document.querySelector('.calculator');
const display = document.querySelector('.calculator-display');
const buttons = document.querySelectorAll('.calculator-button');

let firstOperand = null;
let secondOperand = null;
let operator = null;

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
    return a / b;
}

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

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === '+' || value === '-' || value === '*' || value === '/') {
            operator = value;
            firstOperand = parseFloat(display.textContent);
            display.textContent = '0';
        } else if (value === '.') {
            if (!display.textContent.includes('.')) {
                display.textContent += value;
            }
        } else if (value === '=') {
            secondOperand = parseFloat(display.textContent);
            const result = operate(operator, firstOperand, secondOperand);
            display.textContent = result;
            firstOperand = null;
            secondOperand = null;
            operator = null;
        } else {
            display.textContent += value;
        }
    });
});


