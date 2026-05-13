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
    const OUTPUT= document.getElementById("nameFeild");
    var userName = OUTPUT.value;
    OUTPUT.innerHTML = "<p>Your name is "+ userName +"</p>"

}