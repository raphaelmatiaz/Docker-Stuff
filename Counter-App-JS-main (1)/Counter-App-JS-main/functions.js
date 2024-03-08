

let currentNumber = 0;

export const increaseFunction = () => {
    let currentNumberElement = document.querySelector("#current-number");
    currentNumber++;
    currentNumberElement.innerText = currentNumber;
};

export const decreaseFunction = () => {
    let currentNumberElement = document.querySelector("#current-number");
    currentNumber--;
    currentNumberElement.innerText = currentNumber;
};

export const resetFunction = (a, b) => {
    clearInterval(a);
    clearInterval(b);
    let currentNumberElement = document.querySelector("#current-number");
    currentNumber = 0
    currentNumberElement.innerText = currentNumber;
};








