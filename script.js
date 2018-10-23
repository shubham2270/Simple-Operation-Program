let firstNumber = document.getElementById("firstnumber");
let secondNumber = document.getElementById("secondnumber");
let button = document.getElementById("button");
let display = document.getElementById("display");
let oper = document.getElementById("operation");
let reset = document.getElementById("reset");

let displayStyle = getComputedStyle(display);
let defaultFontSize = displayStyle.fontSize;
let defaultScale = displayStyle.transform;

let alertMsg = document.getElementById("alertMsg");
let alertMsg1 = document.getElementById("alertMsg1");

let alertMsgStyle = getComputedStyle(alertMsg);
let defaultMsgStyleScale = alertMsgStyle.transform

let alertMsgStyle1 = getComputedStyle(alertMsg1);
let defaultMsgStyle1Scale = alertMsgStyle.transform


function emptyValue(){
    if (firstNumber.value === "" || secondNumber.value === ""){
        alertMsg.textContent = "Please input value on both fields";
        display.textContent = "";
    } else {
        alertMsg.textContent = "";
    }
}

function onReset(){
    alertMsg1.textContent = "";
    alertMsg.textContent = "";
    display.textContent = "Result Here!";
    alertMsg.style.transform = defaultMsgStyleScale;
    alertMsg1.style.transform = defaultMsgStyle1Scale;
    display.style.transform = defaultScale;
}

function onLargeNo(){
    if (display.textContent.length > 14){
        display.style.fontSize = "40px";
    } else {
        display.style.fontSize = defaultFontSize;
    }
}

function animate(){
    alertMsg.style.transform = "scale(1)";    
    alertMsg1.style.transform = "scale(1)";
    display.style.transform = "scale(1)";    
}

function add(){
    if (oper.value === "addition"){
        display.textContent = Number(firstNumber.value) + Number(secondNumber.value); 
        alertMsg1.textContent = "";
    } else if (oper.value === "substraction"){
        display.textContent = Number(firstNumber.value) - Number(secondNumber.value);
        alertMsg1.textContent = "";
    } else if (oper.value === "division"){
        display.textContent = Number(firstNumber.value) / Number(secondNumber.value);
        alertMsg1.textContent = "";
    } else if (oper.value === "multiply"){
        display.textContent = Number(firstNumber.value) * Number(secondNumber.value);
        alertMsg1.textContent = "";
    }  else if (oper.value === "sqroot"){
        display.textContent = Number(firstNumber.value) ** Number(secondNumber.value);
        alertMsg1.textContent = "";
    } else if (oper.value === "") {
        alertMsg1.textContent = "Please select Operation type";
        display.textContent = "";
    }
}

button.addEventListener("click", add);
button.addEventListener("click", emptyValue);
button.addEventListener("click", onLargeNo);
reset.addEventListener("click", onReset);
button.addEventListener("click", animate);


