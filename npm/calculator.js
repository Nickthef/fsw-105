var readlineSync = require('readline-sync');

var firstNum = readlineSync.questionInt("Please enter your first number: ");
var secondNum = readlineSync.questionInt("please enter your second number: ");
var userOperation = readlineSync.question("Please enter the operation to perform (add, sub, mul, div): ");

// USE SWITCH STATEMENTS

// Function #1

function add(a, b) {
    return a + b;
}

// Function #2

function mul(a, b) {
    return a * b;
}

// Function #3

function div(a, b) {
    return a / b;
}

// Function #4

function sub(a, b) {
    return a - b;
}



function myCalculator(firstNum, secondNum, userOperation) {
    switch (userOperation) {
        case "add":
            return add(firstNum, secondNum)
            
        case "mul":
            return mul(firstNum, secondNum)
            
        case "div":
            return div(firstNum, secondNum)
            
        case "sub":
            return sub(firstNum, secondNum)
            
        default: 
            console.log("Error! Please try again!");

    }
}

console.log("The result is: " + myCalculator(firstNum, secondNum, userOperation));