/****************************
Name of task: Arrays Continued
****************************/




/*****************************
 Main code
******************************/
console.log("Running task 16");



const OUTPUT = document.getElementById("spaceForJavaScriptOutput")
const USER_ITEM = document.getElementById("userItem")
let itemArray = ["milk", "bread", " yogurt", "cookies"];

/*******************************
 Fuctions
********************************/
    
function getFormInput(){
    let choice = USER_ITEM.value;
    itemArray.push("choice")
    OUTPUT.innerHTML += "You have added " + choice + " to the list";
    for(i=0; i<itemArray.length; i++){
        OUTPUT.innerHTML="These are the items on your shopping list: " + itemArray[i]+"<br>"
    }
}