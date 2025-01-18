const display=document.getElementById('display');
const decimalButton=document.querySelector('input[value="."]');

function appendValue(value) {
    
    if (value === '.' && display.value.includes('.')) {
        return;
    }
    display.value += value;
    toggleDecimalButton();
}

function appendValue(value){
    display.value+=value;
    toggleDecimalButton();

}
function clearDisplay(){
display.value='';
toggleDecimalButton();

};

function deleteLast(){
    display.value=display.value.toString().slice(0,-1);
    toggleDecimalButton();

};
function calculate(){
    try{
        display.value=eval(display.value)
    }
    catch{
        display.value='error'
    }
};

function toggleDecimalButton() {
    
    decimalButton.disabled = display.value.includes('.');
}

clearDisplay();