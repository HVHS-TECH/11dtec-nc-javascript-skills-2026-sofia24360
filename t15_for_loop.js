/****************************
Name of task: For Loops
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
    for (let rateArray=choice; rateArray<=3; rateArray=rateArray+1);{
        console.log += ("You think " + rateArray[choice] + "<br>");
}
    }
    
    
