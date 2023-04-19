//Користувач задає кількість оцінок і натискає на кнопку «get table».
// В результаті формується таблиця з input, куди користувач вводить оцінки. Після цього натискає на кнопку “get sum” і знаходить середнє значення.

const createTable = () => {
    const tableSection = document.getElementById('table-section')
    tableSection.innerHTML = ''
    let inputsCount = document.querySelector('input').value;
    const table = document.createElement('table')
    let tr = document.createElement('tr')
    table.append(tr)
    for (let columns = 1, tdCount = 1; columns <= inputsCount; columns++, tdCount++) {
        const td = document.createElement('td')
        const form = document.createElement('form')
        const input = document.createElement('input')
        input.className = 'values'
        form.append(input)
        td.append(form)
        tr.append(td)
        if (tdCount % 4 === 0){
            tr = document.createElement('tr')
            table.append(tr)
        }
    }
    tableSection.append(table)
}

const getAverage = () => {
    const averageDiv = document.createElement('div')
    document.body.append(averageDiv)
    const getTableButton = document.getElementById('get-table');
    getTableButton.onclick = createTable
    const getAverageButton = document.getElementById('get-sum')
    getAverageButton.addEventListener('click', () => {
        const inputsValues = document.getElementsByClassName('values')
        let average = 0
        for (let input of inputsValues){
            average += parseFloat(input.value)
        }
        average /= inputsValues.length
        averageDiv.innerText = `Sum = ${average}`
    })
}
window.onload = () => {
    getAverage()
}