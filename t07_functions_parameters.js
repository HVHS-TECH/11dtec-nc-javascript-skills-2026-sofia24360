/****************************
Name of task: Functions parameters
****************************/



/*****************************
 Main code
******************************/
console.log("Running task 07");

displayWelcome("Chocolate bar", 4);
displayWelcome("Chips", 3);
displayWelcome("drink", 2.50);




/*******************************
 Fuctions
 *******************************/

 function displayWelcome(_name, _price){
    // Add a line to the html page
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    OUTPUT.innerHTML += _name+" : "+"$"_price;
 }