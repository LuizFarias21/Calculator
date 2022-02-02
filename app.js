let toggle = false;
let num1;
let num2;
let operator = '';

let displayValue = document.querySelector('.displayValue');
const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

for (let digit = 0; digit <= digits.length - 1; digit++) {
    const digitButton = document.querySelector(`.${digits[digit]}`);
    digitButton.addEventListener('click', () => {
        if (toggle) displayValue.textContent = '';
        toggle = false;
        let copyDisplayValue = displayValue.textContent.split('');
        copyDisplayValue.push(`${digit}`);
        displayValue.textContent = copyDisplayValue.join('');
        num1 = Number(displayValue.textContent);
    })
}

const AC_btn = document.querySelector('.AC');

AC_btn.addEventListener('click', () => {
    displayValue.textContent = '';
})

const C_btn = document.querySelector('.C');

C_btn.addEventListener('click', () => {
    let copyDisplayValue = displayValue.textContent.split('');
    copyDisplayValue.pop();
    displayValue.textContent = copyDisplayValue.join('');
})

const result_btn = document.querySelector('.result');

result_btn.addEventListener('click', () => {

    calculate();
    operator = '';
})

const funcs = [add, subtract, multiply, divide, percentage];

for (let func of funcs) {

    let operator_btn = document.querySelector(`.${func.name}`);

    operator_btn.addEventListener('click', () => {
        if (operator !== '') {
            calculate();
            operator = func;

        } else {
            operator = func;
            toggle = true;
            num2 = Number(displayValue.textContent);
        }
    })
}

function calculate() {

    displayValue.textContent = operate(operator, num1, num2);
    num2 = Number(displayValue.textContent);

    toggle = true;

}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num2 - num1;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num2 / num1;
}

function percentage(num1, num2) {
    return num2/100 * num1;
}

function operate(operator, num1, num2) {
    return operator(num1, num2);
}


