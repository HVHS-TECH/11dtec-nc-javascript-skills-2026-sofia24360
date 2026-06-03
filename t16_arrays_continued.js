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
    let itemArray = ["milk", "chocolate", "honey","water"];
function getFormInput(){
    let choice = USER_ITEM.value;
    itemArray.push("choice")
    OUTPUT.innerHTML += "You have added " + choice + " to the list";
}
function itemList(){
    OUTPUT.innerHTML+="<br> These are the items on your shopping list: <br>";
    for(i=0; i<itemArray.length; i++){
    OUTPUT.innerHTML+= i + ": " + itemArray[i]+"<br>"
    }
}