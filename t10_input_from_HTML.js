/****************************
Name of task: Input from HTML
****************************/




/*****************************
 Main code
******************************/
console.log("Running task 10");


 


/*******************************
 Fuctions
********************************/
function getFormInput(){
    const NAME_FIELD= document.getElementById("nameFeild");
    var userName = NAME_FIELD.value;
    NAME_FIELD.innerHTML = "<p>Your name is "+ userName +"</p>"

}