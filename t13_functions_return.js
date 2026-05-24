/****************************
Name of task: Functions Return
****************************/




/*****************************
 Main code
******************************/
console.log("Running task 13");



const OUTPUT = document.getElementById("spaceForJavaScriptOutput")
const POCKET_MONEY = document.getElementById("pocketMoney")
var change = (userMoney,4)


/*******************************
 Fuctions
********************************/
function getFormInput(){
    let userMoney = POCKET_MONEY.value;
    if (userMoney >= 4){
        OUTPUT.innerHTML += "<p> A chocolate bar costs $4. You CAN afford a chocolate bar. </p>";
    calculateChange()
        
    }
    else{
        OUTPUT.innerHTML += "<p> A chocolate bar costs $4. Sorry you CAN'T afford a chocolate bar </p>"
    }
}

function calculateChange(_pocketmoney, _price){
        let change = _pocketmoney - _price;
        OUTPUT.innerHTML +="<p>Your change is </p>" + change;
}