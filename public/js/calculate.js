console.log("Calculate.js connected"); // Check for Connection

// Event delegation - https://javascript.info/event-delegation

// Grab parts of page
const calculator = document.querySelector('.calculator');  // Full Calculator
const keys = calculator.querySelector('.calculator-keys'); // Calculator Keys
const display = document.querySelector('.calc-screen'); // Calculator Screen
const history = document.querySelector('.history'); // History of calculations

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {

        // Define Key Click -- 
        const key = e.target; // find non-specific button
        const action = key.dataset.action; // if key is actionable
        const keyValue = key.textContent; // determine value of key press
        const screenDisplay = display.textContent; // numbers in calculator display
        const lastKey = calculator.dataset.lastKey; // last key pressed -- type

        if (!action) { // if not an operator key
            if (screenDisplay === '0' || lastKey === 'operator' || lastKey === 'calculate') { // if 0 or an operator or calculate
                display.textContent = keyValue; 
                calculator.dataset.lastKey = 'integer'; // set as int
            } else { // if not 0
                display.textContent = screenDisplay + keyValue; // add to string
            }
        }
        else if ( // if an operator key
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            const firstNum = calculator.dataset.firstNum = screenDisplay; // grab first input number
            const operator = calculator.dataset.operator = action; // grab operator value
            const secondNum = screenDisplay; // second number 

            calculator.dataset.lastKey = 'operator'; // defines 'lastKey' as operator
            
        }

        else if (action === 'decimal') { // decimal factor - add decimal
            if (!screenDisplay.includes('.')) { // prevents more than one decimal
                display.textContent = screenDisplay + ".";
            }
            calculator.dataset.lastKey = 'decimal'; // set last key as decimal
        }

        else if (action === 'clear') { // if clear key is pressed
            display.textContent = '0';
            calculator.dataset.lastKey = 'clear'; // set last key as clear
        }

        else if (action === 'calculate') { // if = sign is pressed

            if (screenDisplay !== '0') {
                const firstNum = calculator.dataset.firstNum;
                const operator = calculator.dataset.operator;
                const secondNum = screenDisplay; 

                // console.log(firstNum); // Display values in Console
                // console.log(secondNum); // Display values in Console
                // console.log(operator); // Display values in Console

                results = display.textContent = calculate(firstNum, operator, secondNum); // calculates and displays results
                document.getElementById("calcHist").value = historicalData(firstNum, operator, secondNum, results);
                document.getElementById("calcForm").submit();

                calculator.dataset.lastKey = 'calculate';
            }

        }
    }
});

// Calculate function 
function calculate(n1, op, n2) {
    let results = '';

    if (op === 'add') {
        results = parseFloat(n1) + parseFloat(n2);
    } else if (op === 'subtract') {
        results = parseFloat(n1) - parseFloat(n2);
    } else if (op === 'multiply') {
        results = parseFloat(n1) * parseFloat(n2);
    } else if (op === 'divide') {
        results = parseFloat(n1) / parseFloat(n2);
    }

    return results;
}

// To return equation with symbols
function historicalData(n1, op, n2, result) {
    let fullOp = '';

    if (op === 'add') {
        fullOp = (n1 + " + " + n2 + " = " + result);
    } else if (op === 'subtract') {
        fullOp = (n1 + " - " + n2 + " = " + result);
    } else if (op === 'multiply') {
        fullOp = (n1 + " x " + n2 + " = " + result);
    } else if (op === 'divide') {
        fullOp = (n1 + " ÷ " + n2 + " = " + result);
    }

    return fullOp;
}