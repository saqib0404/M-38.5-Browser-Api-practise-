const getElementInnerTextById = (id) => {
    const numbercount = document.getElementById(id);
    const numberCountStr = numbercount.innerText;
    const numbercountValue = parseInt(numberCountStr);
    return numbercountValue;
}

const getFromLS = () => {
    const num = localStorage.getItem('number');
    let number = 0;
    if (num) {
        number = JSON.parse(num);
    }
    return number;
}

const increaseCount = () => {
    let newNumber = getFromLS();
    newNumber += 1;
    localStorage.setItem('number', JSON.stringify(newNumber))

    document.getElementById('number-count').innerText = newNumber;
}

document.getElementById('btn-reduce').addEventListener('click', () => {
    let newNumber = getFromLS();
    newNumber -= 1;
    localStorage.setItem('number', JSON.stringify(newNumber));

    document.getElementById('number-count').innerText = newNumber;
})

const displayCountedNumbers = () => {
    const number = localStorage.getItem('number');
    // console.log(number);
    document.getElementById('number-count').innerText = number;
}
displayCountedNumbers();