//Задача 1. Розробити калькулятор

const adding = () => {
    const num1 = parseFloat(document.getElementById('first-number').value)
    const num2 = parseFloat(document.getElementById('second-number').value)
    const result = num1 + num2
    document.getElementById('result').value = result.toFixed(2)
}
const subtraction = () => {
    const num1 = parseFloat(document.getElementById('first-number').value)
    const num2 = parseFloat(document.getElementById('second-number').value)
    const result =  num1 - num2
    document.getElementById('result').value = result.toFixed(2)
}

const multiplication = () => {
    const num1 = parseFloat(document.getElementById('first-number').value)
    const num2 = parseFloat(document.getElementById('second-number').value)
    const result = num1 * num2
    document.getElementById('result').value = result.toFixed(2)
}

const division = () => {
    const num1 = parseFloat(document.getElementById('first-number').value)
    const num2 = parseFloat(document.getElementById('second-number').value)
    const result = num1 / num2
    document.getElementById('result').value = result.toFixed(2)
}

const buttons = document.getElementsByTagName('button')
buttons[0].onclick = adding
buttons[1].onclick = subtraction
buttons[2].onclick = multiplication
buttons[3].onclick = division