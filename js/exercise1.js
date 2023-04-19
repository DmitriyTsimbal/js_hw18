const dollarRate = 35;
const euroRate = 40;

const convert = () => {
    const insertedUAN = parseFloat(document.getElementById('uan').value)
    const usdResult = insertedUAN / dollarRate;
    const eurResult = insertedUAN / euroRate;
    document.getElementById('usd').value = usdResult.toFixed(2);
    document.getElementById('eur').value = eurResult.toFixed(2);
}

document.getElementById('convert').onclick = convert