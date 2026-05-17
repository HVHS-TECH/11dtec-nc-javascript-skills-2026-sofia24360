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
    let userMoney = POCKET_MONEY.value;
    if (userMoney >= 4){
        OUTPUT.innerHTML += "<p> A chocolate bar costs $4. You CAN afford a chocolate bar. </p>";
    }
    else{
        OUTPUT.innerHTML += "<p> A chocolate bar costs $4. Sorry you CAN'T afford a chocolate bar </p>"
    }

    
}