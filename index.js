const displayInput = document.getElementById("displayInput");



function appendToDisplay(input){
    if ( displayInput.value === "Error"){
        displayInput.value = "";
    }
    displayInput.value += input;
}

function clearDisplay() {
    displayInput.value = "";
}

function calculate(){
    try{
        displayInput.value = eval(displayInput.value)
    }
    catch{
        displayInput.value = "Error";
        if ( displayInput.value === "Error"){
            displayInput.value = "Invalid";
        }
    }
}