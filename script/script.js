const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    try{
    display.value = eval(display.value);
    } catch(error){
        display.value = 'Error';
    }
    if (display.value.includes('Infinity')) {
        display.value = 'Nem lehet';
    }
}