function updateName(){
    var userNameInput = document.getElementById("userName");
    var userName = userNameInput.value;

    if(userName) {
        var myNameElement = document.getElementById("myName");
        myNameElement.textContent = userName;

        userNameInput.value = "";
    }
}