const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const scream = document.querySelector('#scream')
const equal = document.querySelector('#equal')

function add(a,b) {
    return a + b
}

function subtract(a,b) {
    return a - b
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    return a / b
}

function getFirstNumber() {
    return one.innerText + two.innerText
}

console.log(getFirstNumber())

let firstNumber = ''
let secondNumber = ''
let operator = {
    add: '+',
    subtract: '-',
    multiply: '*',
    divide: '/',
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a,b)
        case '-':
            return subtract(a,b)
        case '*':
            return multiply(a,b)
        case '/':
            if (b === 0) return null
            else return divide(a,b)
        default:
            return null
    }
}

console.log(operate(operator.add, Number(firstNumber), Number(secondNumber)))