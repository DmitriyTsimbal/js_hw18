const getUserYears = () => {
    const birthDate = new Date(document.getElementById('birth-date').value)
    const section = document.getElementById('result')
    if (isNaN(birthDate) || birthDate > Date.now()) {
        section.innerHTML = 'Invalid date inserted'
        return false;
    }
    const monthDifference = Date.now() - birthDate.getTime()
    const ageDate = new Date(monthDifference)
    const year = ageDate.getUTCFullYear()
    const age = Math.abs(year - 1970)
    section.innerHTML = `You are ${age} years old`

}

document.getElementById('get-age').onclick = getUserYears