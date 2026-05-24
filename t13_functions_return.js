/****************************
Name of task: Functions Return
****************************/




/*****************************
 Main code
******************************/
console.log("Running task 13");



const OUTPUT = document.getElementById("spaceForJavaScriptOutput")
const POCKET_MONEY = document.getElementById("pocketMoney")



/*******************************
 Fuctions
********************************/
function getFormInput(){
    let userMoney = POCKET_MONEY.value;
    if (userMoney >= 4){
        OUTPUT.innerHTML += "<p> A chocolate bar costs $4. You CAN afford a chocolate bar. </p>";
    calculatechange()
        
    }
    else{
        OUTPUT.innerHTML += "<p> A chocolate bar costs $4. Sorry you CAN'T afford a chocolate bar </p>"
    }
}

function calculatechange(_pocketmoney, _price){
        let change = _pocketmoney - _price;
        OUTPUT.innerHTML +="<p>Your change is </p>" + change
}