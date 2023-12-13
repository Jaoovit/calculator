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

one.addEventListener('click', getFistNumber)
two.addEventListener('click', getFistNumber)

function getFistNumber(number) {
    calculator(number.target.innerText)
}

function calculator(firstNumber) {

    let firstNumberSelected = firstNumber
    scream.innerText = firstNumberSelected
}


