function appendtodisplay(input){
    display.value += input;
}
function cleardisplay(){
    display.value = "";
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
function percentage(input){
    display.value /= 100;
}


const display = document.getElementById("display");
