import { increaseFunction } from './functions.js';
import { decreaseFunction } from './functions.js';
import { resetFunction } from './functions.js'



window.onload = () => {

let increaseIntervalId;
let decreaseIntervalId;

let indicators = document.querySelectorAll(".indicator")

/*---------------------------------------*/
// DECREASE 

let decreaseButton = document.querySelector("#decrease-box");



// mouseover & mouseout
decreaseButton.addEventListener("mouseover", () => {
    decreaseButton.style.background = "black";
});

decreaseButton.addEventListener("mouseout", () => {
    decreaseButton.style.background = "red";

});

decreaseButton.addEventListener("click", () => {
    clearInterval(increaseIntervalId)
    clearInterval(decreaseIntervalId)
    decreaseIntervalId = setInterval(decreaseFunction, 100);
    indicators.forEach(indicator => {
        indicator.style.background = "red";
        decreaseButton.style.background = "red";
    })
});

/*---------------------------------------*/
//RESET

let resetButton = document.querySelector("#reset-box");


// mouseover & mouseout
resetButton.addEventListener("mouseover", () => {
    resetButton.style.background = "black";

});

resetButton.addEventListener("mouseout", () => {
    resetButton.style.background = "blue";

});

resetButton.addEventListener("mousedown", () => {
    indicators.forEach(indicator => {
        indicator.style.background = "blue";
    })
});

resetButton.addEventListener("click", () => {
    resetFunction(increaseIntervalId, decreaseIntervalId)
    indicators.forEach(indicator => {
        indicator.style.background = "rgba(0, 0, 0, 0)";
    })
});



/*---------------------------------------*/
//INCREASE

let increaseButton = document.querySelector("#increase-box");


// mouseover & mouseout
increaseButton.addEventListener("mouseover", () => {
    increaseButton.style.background = "black";
});


increaseButton.addEventListener("mouseout", () => {
    increaseButton.style.background = "green";
});


increaseButton.addEventListener("mousedown", () => {
    increaseButton.style.background = "rgb(0, 180, 0)";
});

increaseButton.addEventListener("click", () => {
    clearInterval(increaseIntervalId)
    clearInterval(decreaseIntervalId)
    increaseIntervalId = setInterval(increaseFunction, 100);
    indicators.forEach(indicator => {
        indicator.style.background = "rgb(0, 180, 0)";
})
});
























}