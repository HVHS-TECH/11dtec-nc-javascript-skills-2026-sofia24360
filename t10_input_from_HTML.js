/****************************
Name of task: Input from HTML
****************************/




/*****************************
 Main code
******************************/
console.log("Running task 10");

const OUTPUT = document.getElementById("spaceForJavaScriptOutput")
const NAME_FIELD = document.getElementById("nameField")



/*******************************
 Fuctions
********************************/
function getFormInput(){
    let userName = NAME_FIELD.value;
    OUTPUT.innerHTML += "<p> Your name is " + userName + "</p>";
}