//2-Basic JavaScript Syntax:
window.onload = function() {
    alert("Welcome to my Resturunt!");
};
//------------------------------------------
// 3-Variables and Data Types:

let userName = "Mohammed"; 
let age = 20; 
let isMale = true;

console.log("Name:", userName);
console.log("Age:", age);
console.log("Is Male:", isMale);
//----------------------------------------
//4- Basic Operators:
document.addEventListener('DOMContentLoaded', function() {
    let num1 = 10;
    let num2 = 5;

    let addition = num1 + num2;
    let subtraction = num1 - num2;
    let multiplication = num1 * num2;
    let division = num1 / num2;

    document.getElementById("mathResults").innerHTML = `
        Addition: ${addition} <br>
        Subtraction: ${subtraction} <br>
        Multiplication: ${multiplication} <br>
        Division: ${division}`;
});

//------------------------------------------------------
//5-Conditionals (if-else statements):
function checkAge() {
    let ageInput = document.getElementById("age").value;
    let message = ageInput > 18 ? "Valid age" : "Age must be greater than 18";
    document.getElementById("ageMessage").innerHTML = message;
}

//--------------------------------------------------
// 6- Loops (for or while loop):
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//------------------------------------------------
// 7-Event Handling:
document.addEventListener('DOMContentLoaded', function() {
    function changeBackgroundColor() {
        document.getElementById("navbar").style.backgroundColor = "yellow";
    }

    // Ensure the function is globally accessible
    window.changeBackgroundColor = changeBackgroundColor;
});

//---------------------------------------------------
// 8-Validate Form
function validateEmail() {
    let email = document.getElementById("email").value;
    if (email === "") {
        alert("Please enter a valid email address.");
        return false; 
    }
    return true; 
}
function validatePassword() {
    let password = document.getElementById("password").value;    
    if (password.length < 5) {
        alert("Please Enter your password length more than 5");
        return false;
    }
    return true;
}