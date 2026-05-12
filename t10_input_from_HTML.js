/****************************
Name of task: Input from HTML
****************************/




/*****************************
 Main code
******************************/
console.log("Running task 10");


 <form>
 <label for="formName">Name: </label>
 <input type="text" id="nameField" name="forName">

 </form>



/*******************************
 Fuctions
********************************/
function getFormInput(){
    const OUTPUT= document.getElementById("spaceForJavaScriptOutput");
    var userName = OUTPUT.value;
    OUTPUT.innerHTML = "<p>Your name is "+ userName +"</p>"

}