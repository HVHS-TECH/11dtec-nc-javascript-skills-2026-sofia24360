/****************************
Name of task: Data Types
****************************/




/*****************************
 Main code
******************************/
console.log("Running task 11");

const OUTPUT = document.getElementById("spaceForJavaScriptOutput")
const NAME_FIELD = document.getElementById("nameField")
const POCKET_MONEY = document.getElementById("pocketMoney")



/*******************************
 Fuctions
********************************/
function getFormInput(){
    let userName = NAME_FIELD.value;
    OUTPUT.innerHTML += "<p> Your name is " + userName + "</p>"
    let pocketMoney = POCKET_MONEY.value;
    
}