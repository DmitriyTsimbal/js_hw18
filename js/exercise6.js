//Подорож складається з 3 етапів.
// На кожному етапі користувач може вибрати один з видів транспорту (авто, автобус, літак - випадаючий список), харчування
// (сніданок, обід, вечеря – checkbоx) та одного з 3-х гідів(використати  - radio buttons). Ціни визначте самі. Підрахувати загальну вартість.


const travel = () => {
    const options = document.querySelectorAll('input')
    const select = document.querySelector('select')
    let sum = 0
    let totalSum = 0
    let index = 1
    const resultButton = document.createElement('button')
    resultButton.innerText = `Get sum`
    resultButton.addEventListener('click', handleClick)
    function handleClick() {
        index++
        for (let input of options)
            if (input.checked) sum += parseFloat(input.value);
        sum += parseFloat(select.value)
        console.log(sum)
        totalSum += sum

        const resultDiv = document.createElement('div')
        resultDiv.innerText = `Sum №${index-1}: ${ sum }`
        if (index > 3) {
            resultDiv.innerText += ` | Total sum ${ totalSum }`
            resultButton.innerText = 'Total sum gained'
            resultButton.disabled = true;
        }
        sum = 0
        document.body.append(resultDiv)
    }
    document.body.append(resultButton)
}

window.onload = () => {
    travel()
}