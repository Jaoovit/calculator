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

const clear = document.querySelector('#clear')
const del = document.querySelector('#delete')
const equal = document.querySelector('#equal')


const sum = document.querySelector('#add')
const subt = document.querySelector('#subtract')
const mult = document.querySelector('#multiply')
const div = document.querySelector('#divide')

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

///

let firstNumber = '2'
let secondNumber = '1'
let operator = ''

sum.addEventListener('click', function onClick() {
    scream.innerText = '+'
    operator = '+'
})
subt.addEventListener('click', function onClick() {
    scream.innerText = '-'
    operator = '-'
})
mult.addEventListener('click', function onClick() {
    scream.innerText = '*'
    operator = '*'
})
div.addEventListener('click', function onClick() {
    scream.innerText = '/'
    operator = '/'
})

///

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

console.log(operate(operator.multiply, Number(firstNumber), Number(secondNumber)))


    equal.addEventListener('click', function onClick() {
        scream.innerText = operate(operator, Number(firstNumber), Number(secondNumber));
    })
