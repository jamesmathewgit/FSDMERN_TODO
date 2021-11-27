var username = document.getElementById("Username");
var password1 = document.getElementById("Password1");

function test(callback) {
    if (username.value == "admin" && password1.value == "12345") {
        alert("Authorized Login Successful");
        callback();
    } else if (username.value == "admin" && password1.value != "12345") {
        alert("Incorrect Password");
    } else if (username.value != "admin" && password1.value == "12345") {
        alert("User Not Registered");
    } else {
        alert("Incorrect UserID and Password");
    }
}

function myFunction() {
    window.location.href = "todopage.html";

}