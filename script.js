// i did learn that prasefloat return regular calculation into float number like 100/3 = 33.333333333

const display = document.getElementById("Display");
let currentInput = ""; 
let numbers = []; 
let operators = []; 

// its been made with array approach other than the every opration got its function, it makes the code easier and cleaner for me


// here how we translate the buttons to input into the display
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function() {
        const value = button.getAttribute("data-num");

        // clear button
        if (button.classList.contains("btn-clear")) {
            clearDisplay();
        } 
        // equal button
        else if (button.classList.contains("btn-equal")) {
            calculateResult();
        } 
        // operator buttons
        else if (['+', '-', '*', '/'].includes(value)) {
            addOperator(value);
        } 
        // For numbers and decimal
        else {
            appendToInput(value);
        }
    });
});

// display.innertext "display the clicked button to display screen"
function appendToInput(value) {
    currentInput += value;
    display.innerText = currentInput;
}

function addOperator(operator) {
    if (currentInput !== "") {
        numbers.push(parseFloat(currentInput)); // Push the current number to the numbers array
        operators.push(operator); // Push the operator to the operators array
        currentInput = ""; // Reset current input to allow for the next number
    }
}

function calculateResult() {
    if (currentInput !== "") {
        numbers.push(parseFloat(currentInput)); // Push the last number
    }

    let result = numbers[0]; // Start with the first number

    // Iterate over operators and numbers to perform the calculations
    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === "+") {
            result += numbers[i + 1];
        } else if (operators[i] === "-") {
            result -= numbers[i + 1];
        } else if (operators[i] === "*") {
            result *= numbers[i + 1];
        } else if (operators[i] === "/") {
            result /= numbers[i + 1];
        }
    }
    
    display.innerText = result; // Display the result
    resetCalculator(); // Reset for the next calculation
}

function clearDisplay() {
    currentInput = "";
    numbers = [];
    operators = [];
    display.innerText = "0";
}

function resetCalculator() {
    currentInput = "";
    numbers = [];
    operators = [];
}

