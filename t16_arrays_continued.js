/****************************
Name of task: Arrays Continued
****************************/




/*****************************
 Main code
******************************/
console.log("Running task 16");



const OUTPUT = document.getElementById("spaceForJavaScriptOutput")
const USER_ITEM = document.getElementById("userItem")


/*******************************
 Fuctions
********************************/
    let itemArray = ["You loath chocolate", "Chocolate is meh", "Chocolate is pretty good","Chocolate is the best thing EVER!!!!"];
function getFormInput(){
    let choice = USER_ITEM.value;
    itemArray.push("choice")
    OUTPUT.innerHTML += "You have added " + choice + " to the list"; 
}
