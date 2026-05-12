/****************************
Name of task: Input from HTML
****************************/




/*****************************
 Main code
******************************/
console.log("Running task 10");


<form onsubmit="return false;">
 <label for="formName">Name: </label>
 <input type="text" id="nameField" name="forName">
</form>



/*******************************
 Fuctions
********************************/
function getFormInput(){
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    let userName = NAME_FIELD.value;
    OUTPUT.innerHTML = "<p>Your name is "+ username +"</p>"

}