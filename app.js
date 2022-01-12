let displayValue = document.querySelector('.displayValue');
const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

for (let digit = 0; digit <= digits.length -1; digit++) {
    const digitButton = document.querySelector(`.${digits[digit]}`);
    digitButton.addEventListener('click', () => {
        let copyDisplayValue = displayValue.textContent.split('');
        copyDisplayValue.push(`${digit}`);
        displayValue.textContent = copyDisplayValue.join('');
    })
    
}

const AC_btn = document.querySelector('.AC');

AC_btn.addEventListener('click', () => {
    displayValue.textContent = '';
})

const C = document.querySelector('.C');

C.addEventListener('click', () => {
    let copyDisplayValue = displayValue.textContent.split('');
    copyDisplayValue.pop();
    displayValue.textContent = copyDisplayValue.join('');
})

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator) {
    return operator;
}

