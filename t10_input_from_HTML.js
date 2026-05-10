/****************************
Name of task: Input from HTML
****************************/




/*****************************
 Main code
******************************/
console.log("Running task 10");

<form>
    <input type="text">
    <input type="submit">
</form>

<form onsubmit="return false;">
    <label for="forName">Name:</label>
    <input type="text" id="usersname" name= "formName">
    <input type="submit" onClick = getFormInput()>
</form>






/*******************************
 Fuctions
 *******************************/
function getFormInput() {
    const USERS_NAME = document.getElementById("usersname");
    let userName = USERS_NAME.value;
    OUTPUT.innerHTML = "<p>Your name is "+userName+ "</p>";
}