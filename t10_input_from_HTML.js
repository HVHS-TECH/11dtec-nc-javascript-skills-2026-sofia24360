/****************************
Name of task: Input from HTML
****************************/




/*****************************
 Main code
******************************/
console.log("Running task 10");

let userName = NAME_FIELD.ariaValueMax;
/*******************************
 Fuctions
********************************/
function getFormInput(){
    const NAME_FIELD= document.getElementById("nameFeild");
    
    NAME_FIELD.innerHTML = "<p>Your name is "+ userName +"</p>"

}