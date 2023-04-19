//Відобразити таблицю 3*4 з випадковими числами (її треба динамічно створити і вставити на сторінку)

const getRandomNumber = () => {
    return Math.floor(Math.random() * 10000)
}
const createTable = () => {
    const table = document.createElement('table');
    for (let rows = 0; rows < 3; rows++){
        const tr = document.createElement('tr');
        table.append(tr)
        for (let columns = 0; columns < 4; columns++){
            const td = document.createElement('td');
            td.innerText = getRandomNumber()
            tr.append(td)
        }
    }
    document.body.append(table)
}
window.onload = () => {
    createTable()
}
