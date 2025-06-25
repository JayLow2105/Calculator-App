const display = document.getElementById('display');
let resultDisplayed = false;

function appendToDisplay(input) {
    if (resultDisplayed && !isNaN(input) || input === '.') {
        display.value = '';
        resultDisplayed = false;
    }
    display.value += input;
}

function clearDisplay() {
    display.value = '';
    resultDisplayed = false;
}

function calculate() {
    try {
        display.value = eval(display.value);
        resultDisplayed = true;
    }
    catch (error) {
        display.value = 'Error';
        resultDisplayed = false;
    }
}