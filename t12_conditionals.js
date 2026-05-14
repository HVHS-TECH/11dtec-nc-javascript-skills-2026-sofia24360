/****************************
Name of task: Data Types
****************************/




/*****************************
 Main code
******************************/
console.log("Running task 11");

const OUTPUT = document.getElementById("spaceForJavaScriptOutput")
const AGE_FIELD = document.getElementById("ageField")
const POCKET_MONEY = document.getElementById("pocketMoney")



/*******************************
 Fuctions
********************************/
function getFormInput(){
    let userAge = AGE_FIELD.value;
    OUTPUT.innerHTML += "<p> Your age is " + userAge + "</p>";
    let userMoney = POCKET_MONEY.value;
    OUTPUT.innerHTML += "<p> You have $" + userMoney + "</p>";
}