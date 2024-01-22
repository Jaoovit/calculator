const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const dot = document.querySelector('#dot')
const zero = document.querySelector('#zero')

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

let firstNumber = ''
let secondNumber = ''

one.addEventListener('click', function onClick() {
    scream.innerText += '1'
    if (operator == '') {
        return firstNumber += '1'
    } else if (operator == '+' || '-' || '*' || '/') return secondNumber += '1'
    
})

two.addEventListener('click', function onClick() {
    scream.innerText += '2'
    if (operator == '') {
        return firstNumber += '2'
    } else if (operator == '+' || '-' || '*' || '/') return secondNumber += '2'
    
})

three.addEventListener('click', function onClick() {
    scream.innerText += '3'
    if (operator == '') {
        return firstNumber += '3'
    } else if (operator == '+' || '-' || '*' || '/') return secondNumber += '3'
    
})

four.addEventListener('click', function onClick() {
    scream.innerText += '4'
    if (operator == '') {
        return firstNumber += '4'
    } else if (operator == '+' || '-' || '*' || '/') return secondNumber += '4'
    
})

five.addEventListener('click', function onClick() {
    scream.innerText += '5'
    if (operator == '') {
        return firstNumber += '5'
    } else if (operator == '+' || '-' || '*' || '/') return secondNumber += '5'
    
})

six.addEventListener('click', function onClick() {
    scream.innerText += '6'
    if (operator == '') {
        return firstNumber += '6'
    } else if (operator == '+' || '-' || '*' || '/') return secondNumber += '6'
    
})

seven.addEventListener('click', function onClick() {
    scream.innerText += '7'
    if (operator == '') {
        return firstNumber += '7'
    } else if (operator == '+' || '-' || '*' || '/') return secondNumber += '7'
    
})

eight.addEventListener('click', function onClick() {
    scream.innerText += '8'
    if (operator == '') {
        return firstNumber += '8'
    } else if (operator == '+' || '-' || '*' || '/') return secondNumber += '8'
    
})

nine.addEventListener('click', function onClick() {
    scream.innerText += '9'
    if (operator == '') {
        return firstNumber += '9'
    } else if (operator == '+' || '-' || '*' || '/') return secondNumber += '9'
    
})

zero.addEventListener('click', function onClick() {
    scream.innerText += '0'
    if (operator == '') {
        return firstNumber += '0'
    } else if (operator == '+' || '-' || '*' || '/') return secondNumber += '0'
    
})

dot.addEventListener('click', function onClick() {
    scream.innerText += '.'
    if (operator == '') {
        return firstNumber += '.'
    } else if (operator == '+' || '-' || '*' || '/') return secondNumber += '.'
    
})

let operator = ''

sum.addEventListener('click', function onClick() {
    scream.innerText += '+'
    operator = '+'
})
subt.addEventListener('click', function onClick() {
    scream.innerText += '-'
    operator = '-'
})
mult.addEventListener('click', function onClick() {
    scream.innerText += '*'
    operator = '*'
})
div.addEventListener('click', function onClick() {
    scream.innerText += '/'
    operator = '/'
})

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
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

clear.addEventListener('click', function onClick() {
    scream.innerText = ''
    firstNumber = ''
    secondNumber = ''
    operator = ''
})

equal.addEventListener('click', function onClick() {
    scream.innerText = operate(operator, Number(firstNumber), Number(secondNumber));
    console.log(firstNumber,secondNumber,operator);
    firstNumber = operate(operator, Number(firstNumber), Number(secondNumber));
    secondNumber = ''
    operator = ''
})
