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
