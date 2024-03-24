/*1. Write a program to take “city” name as input from user. If
user enters “Karachi”, welcome the user like this:
“Welcome to city of lights”

function welcomeUser(cityName) {
    if (cityName.toLowerCase() === "karachi") {
        console.log("Welcome to the city of lights!");
    } else {
        console.log("Welcome to " + cityName + "!");
    }
}

function main() {
    var city = prompt("Enter the name of your city:");
    welcomeUser(city);
}

main(); */


/*2. Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the
user is female, give the message: Good Morning Ma’am.

function greetUser(gender) {
    if (gender.toLowerCase() === "male") {
        console.log("Good Morning Sir.");
    } else if (gender.toLowerCase() === "female") {
        console.log("Good Morning Ma'am.");
    } else {
        console.log("Good Morning!");
    }
}

function main() {
    var gender = prompt("Enter your gender (male/female):");
    greetUser(gender);
}

main();*/


/*3. Write a program to take input color of road traffic signal
from the user & show the message according to this table:

function trafficSignalMessage(color) {
    switch(color.toLowerCase()) {
        case "red":
            console.log("Stop! The light is red.");
            break;
        case "yellow":
            console.log("Get ready to stop! The light is about to turn red.");
            break;
        case "green":
            console.log("Go! The light is green.");
            break;
        default:
            console.log("Invalid input. Please enter a valid traffic signal color (red, yellow, or green).");
    }
}

function main() {
    var color = prompt("Enter the color of the traffic signal (red, yellow, or green):");
    trafficSignalMessage(color);
}

main();*/


/*4. Write a program to take input remaining fuel in car (in
    litres) from user. If the current fuel is less than 0.25litres,
    show the message “Please refill the fuel in your car”

    function checkFuel(remainingFuel) {
        if (remainingFuel < 0.25) {
            console.log("Please refill the fuel in your car.");
        } else {
            console.log("You have enough fuel. Keep driving safely!");
        }
    }
    
    function main() {
        var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in liters):"));
        checkFuel(remainingFuel);
    }
    
    main();*/


    /*5. Run this script, & check whether alert message would be
displayed or not. Record the outputs.
a. var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
    true

    b. var b = 82;
    if (b++ === 83){
    alert("given condition for variable b is true");
    }
    true*/

   /* c. var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}*/

/*d. var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
e. if (true){
alert("True");
}
if (false){
alert("False");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}

if (true){
    alert("True");
}

if (false){
    alert("False");
}*/


/*f. if("car" < "cat"){
    alert("car is smaller than cat");
    }

   answer = true*/



   /*6. Write a program to take input the marks obtained in three
subjects & total marks. Compute & show the resulting
percentage on your page. Take percentage & compute
grade as per following table:

function calculateGrade(subject1, subject2, subject3, totalMarks) {
    // Calculate total obtained marks
    var totalObtainedMarks = subject1 + subject2 + subject3;
    
    // Calculate percentage
    var percentage = (totalObtainedMarks / totalMarks) * 100;
    
    // Determine grade based on percentage
    var grade;
    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B';
    } else if (percentage >= 60) {
        grade = 'C';
    } else if (percentage >= 50) {
        grade = 'D';
    } else {
        grade = 'Fail';
    }
    
    // Display results
    console.log("Percentage: " + percentage.toFixed(2) + "%");
    console.log("Grade: " + grade);
}

function main() {
    var subject1 = parseInt(prompt("Enter marks obtained in first subject:"));
    var subject2 = parseInt(prompt("Enter marks obtained in second subject:"));
    var subject3 = parseInt(prompt("Enter marks obtained in third subject:"));
    var totalMarks = parseInt(prompt("Enter total marks:"));
    
    calculateGrade(subject1, subject2, subject3, totalMarks);
}

main();*/



/*7. Guess game:
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.

a. If user guesses the same number, show “Bingo! Correct
answer”.

// Generate a random secret number between 1 and 10
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt user to guess the secret number
var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Check if the user's guess matches the secret number
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer.");
} else {
    alert("Sorry, the correct answer was " + secretNumber + ". Try again!");
}*/

/*b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”.

// Generate a random secret number between 1 and 10
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt user to guess the secret number
var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Check if the user's guess matches the secret number
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer.");
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
    alert("Close enough to the correct answer.");
} else {
    alert("Sorry, the correct answer was " + secretNumber + ". Try again!");
}*/



/*8. Write a program to check whether the given number is
divisible by 3. Show the message to the user if the number
is divisible by 3.

// Function to check if a number is divisible by 3
function isDivisibleBy3(number) {
    return number % 3 === 0;
}

// Prompt the user to input a number
var userInput = parseInt(prompt("Enter a number:"));

// Check if the number is divisible by 3
if (isDivisibleBy3(userInput)) {
    console.log("The number " + userInput + " is divisible by 3.");
} else {
    console.log("The number " + userInput + " is not divisible by 3.");
}*/




/*9. Write a program that checks whether the given input is an
even number or an odd number.

// Function to check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

// Prompt the user to input a number
var userInput = parseInt(prompt("Enter a number:"));

// Check if the number is even or odd
if (isEven(userInput)) {
    console.log("The number " + userInput + " is even.");
} else {
    console.log("The number " + userInput + " is odd.");
}*/



/*10. Write a program that takes temperature as input and
shows a message based on following criteria

a. T > 40 then “It is too hot outside.”

// Prompt the user to input the temperature
var temperature = parseFloat(prompt("Enter the temperature:"));

// Check the temperature and display a message based on the criteria
if (temperature > 40) {
    console.log("It is too hot outside.");
}*/


/*b. T > 30 then “The Weather today is Normal.”

// Prompt the user to input the temperature
var temperature = parseFloat(prompt("Enter the temperature:"));

// Check if the temperature is greater than 30
if (temperature > 30) {
    console.log("The Weather today is Normal.");
}


//c. T > 20 then “Today’s Weather is cool.”

// Prompt the user to input the temperature
var temperature = parseFloat(prompt("Enter the temperature:"));

// Check if the temperature is greater than 20
if (temperature > 20) {
    console.log("Today’s Weather is cool.");
}


//d. T > 10 then “OMG! Today’s weather is so Cool.”

// Prompt the user to input the temperature
var temperature = parseFloat(prompt("Enter the temperature:"));

// Check if the temperature is greater than 10
if (temperature > 10) {
    console.log("OMG! Today’s weather is so Cool.");
}




11. Write a program to create a calculator for +,-,*, / & %
using if statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user.

// Prompt the user to enter the first number
var firstNumber = parseFloat(prompt("Enter the first number:"));

// Prompt the user to enter the second number
var secondNumber = parseFloat(prompt("Enter the second number:"));

// Prompt the user to choose an operation
var operation = prompt("Choose an operation (+, -, *, /, %):");

// Perform the selected operation based on user input
if (operation === "+") {
    var result = firstNumber + secondNumber;
    console.log("Result: " + result);
} else if (operation === "-") {
    var result = firstNumber - secondNumber;
    console.log("Result: " + result);
} else if (operation === "*") {
    var result = firstNumber * secondNumber;
    console.log("Result: " + result);
} else if (operation === "/") {
    if (secondNumber !== 0) {
        var result = firstNumber / secondNumber;
        console.log("Result: " + result);
    } else {
        console.log("Error: Division by zero is not allowed.");
    }
} else if (operation === "%") {
    if (secondNumber !== 0) {
        var result = firstNumber % secondNumber;
        console.log("Result: " + result);
    } else {
        console.log("Error: Modulus by zero is not allowed.");
    }
} else {
    console.log("Error: Invalid operation.");
}*/







