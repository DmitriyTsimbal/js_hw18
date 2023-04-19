//Наперед задано у скрипті масив зі списком бажань.
// Після завантаження сторінки випадковим чином вибираються 3 і відображаються у окремих div (їх треба створити і додати на сторінку)


const wishList = ['new laptop', 'smart watch', 'wireless headphones', 'travel backpack', 'fitness tracker'];

const getRandomIndex = (usedIncludes) => {
    let index;
    do {
        index = Math.floor(Math.random() * wishList.length)
    } while (usedIncludes.includes(index));
    usedIncludes.push(index);
    return index
}

window.onload = function () {
    const usedIncludes = [];
    for (let i = 1; i < 4 && usedIncludes.length < wishList.length; i++) {
        const div = document.createElement('div');
        const index = getRandomIndex(usedIncludes);
        div.innerText = `Wish №${i}: ${wishList[index]}`
        document.body.append(div);
    }



}