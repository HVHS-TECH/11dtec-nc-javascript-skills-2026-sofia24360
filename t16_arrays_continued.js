/****************************
Name of task: Arrays Continued
****************************/




/*****************************
 Main code
******************************/
console.log("Running task 16");



const OUTPUT = document.getElementById("spaceForJavaScriptOutput")
const USER_CHOICE = document.getElementById("userChoice")


/*******************************
 Fuctions
********************************/
function getFormInput(){
    let itemArray = ["You loath chocolate", "Chocolate is meh", "Chocolate is pretty good","Chocolate is the best thing EVER!!!!"];
    itemArray.push("choice")
    let choice = USER_ITEM.value;
    OUTPUT.innerHTML += "You have added " + choice + "to the list";
    for(let i=0; i<itemArray.length; i++)
    OUTPUT.innerHTML += "These are the items on your shopping list: " + i + itemArray[i] + "<br>";
}



