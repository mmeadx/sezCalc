console.log("Calculate.js connected");

// Event delegation - https://javascript.info/event-delegation

const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator-keys');

const display = document.querySelector('.calc-screen'); // Set calc-screen to display pressed values
const history = document.querySelector('.history');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {

        // Define Key Click -- determine if number or operator
        const key = e.target; // find non-specific button
        const action = key.dataset.action; // if key is actionable
        const keyValue = key.textContent; // determine value of key press
        const screenDisplay = display.textContent; // numbers in calculator display
        const lastKey = calculator.dataset.lastKey;

        // Array.from(key.parentNode.children).forEach(y => y.classList.remove('is-depressed'))

        if (!action) { // if not an operator key
            if (screenDisplay === '0' || lastKey === 'operator' || lastKey === 'calculate') { // if 0 or an operator
                display.textContent = keyValue; // set display value as key pressed
                calculator.dataset.lastKey = 'integer';
            } else { // if not 0
                display.textContent = screenDisplay + keyValue;
            }
        }

        else if ( // if an operator key
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            // key.classList.add('is-depressed'); // adds 'is-depressed' class
            const firstNum = calculator.dataset.firstNum = screenDisplay; // grab first input number
            const operator = calculator.dataset.operator = action; // grab operator value
            const secondNum = screenDisplay;

            calculator.dataset.lastKey = 'operator'; // defines 'lastKey' as operator
            
        }

        else if (action === 'decimal') { // decimal factor - add decimal
            if (!screenDisplay.includes('.')) {
                display.textContent = screenDisplay + ".";
            }
            calculator.dataset.lastKey = 'decimal';
        }

        else if (action === 'clear') { // if clear key is pressed
            display.textContent = '0';
            calculator.dataset.lastKey = 'clear';
        }

        else if (action === 'calculate') { // if = sign is pressed

            if (screenDisplay !== '0') {
                const firstNum = calculator.dataset.firstNum;
                const operator = calculator.dataset.operator;
                const secondNum = screenDisplay; // grab second number input

                console.log(firstNum); // Display values in Console
                console.log(secondNum); // Display values in Console
                console.log(operator); // Display values in Console

                results = display.textContent = calculate(firstNum, operator, secondNum);
                history.textContent = historicalData(firstNum, operator, secondNum, results);

                var historyUpdate = history.textContent;
                console.log(historyUpdate);
                historyUpdate = document.getElementById('calcHist').value;
                

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