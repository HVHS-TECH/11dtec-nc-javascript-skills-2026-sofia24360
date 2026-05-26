/****************************
Name of task: For Loop
****************************/




/*****************************
 Main code
******************************/
console.log("Running task 15");



const OUTPUT = document.getElementById("spaceForJavaScriptOutput")
const USER_CHOICE = document.getElementById("userChoice")


/*******************************
 Fuctions
********************************/
function getFormInput(){
    let rateArray = ["You loath chocolate", "Chocolate is meh", "Chocolate is pretty good","Chocolate is the best thing EVER!!!!"];
    let choice = USER_CHOICE.value;
    OUTPUT.innerHTML += "You think " + rateArray[choice] + "<br>";
}
