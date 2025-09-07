/*********************************
 * PART 1: Variables & Conditionals
 *********************************/
let userName = "Leilah";   // String variable
let userAge = 21;          // Number variable
let isStudent = true;      // Boolean variable

// Conditional example
if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

/*********************************
 * PART 2: Custom Functions
 *********************************/
// Function 1: Greeting user
function greetUser() {
  let name = prompt("Enter your name:");
  document.getElementById("output").innerHTML = "Hello, " + name + "! 👋";
}

// Function 2: Even/Odd Checker
function checkEvenOdd() {
  let number = parseInt(prompt("Enter a number:"));
  if (isNaN(number)) {
    document.getElementById("output").innerHTML = "❌ Please enter a valid number.";
  } else if (number % 2 === 0) {
    document.getElementById("output").innerHTML = number + " is Even ✅";
  } else {
    document.getElementById("output").innerHTML = number + " is Odd 🔵";
  }
}

/*********************************
 * PART 3: Loops
 *********************************/
function showLoopExamples() {
  let list = document.getElementById("list-output");
  list.innerHTML = ""; // Clear previous list

  // Loop 1: For loop (numbers 1–5)
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number: " + i;
    list.appendChild(li);
  }

  // Loop 2: While loop (countdown)
  let countdown = 3;
  let result = "";
  while (countdown > 0) {
    result += countdown + "... ";
    countdown--;
  }
  result += "Go!";
  document.getElementById("loop-result").innerHTML = result;
}

/*********************************
 * PART 4: DOM Interactions
 *********************************/
// 1. Updating text content (output element)
// 2. Adding list items dynamically (list-output element)
// 3. Updating another paragraph with loop result (loop-result element)
