const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');
let expression = "";
let isResultDisplayed = false;  

const operators = ['+', '-', '*', '/', '%'];

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.innerHTML;

        if (buttonValue === '=') {
            try {
                if (expression.includes('/0')) {
                    input.value = "Cannot divide by zero";
                    setTimeout(() => input.value = "", 2000);
                } else {
                    let result = eval(expression);
                    
                    if (result % 1 !== 0) {  
                        result = result.toFixed(2);
                    }
                    
                    input.value = result;
                    expression = result.toString();
                    isResultDisplayed = true;
                }
            } catch (error) {
                input.value = "Error";
                setTimeout(() => input.value = "", 2000);
            }
        }
        else if (buttonValue === 'AC') {
            expression = "";
            input.value = "";
            isResultDisplayed = false;
        }
        else if (buttonValue === 'DEL') {
            expression = expression.slice(0, -1);
            input.value = expression;
        }
        else {
            if (isResultDisplayed && !operators.includes(buttonValue)) {
                expression = "";
                isResultDisplayed = false; 
            }

            if (operators.includes(buttonValue) && operators.includes(expression.slice(-1))) {
                expression = expression.slice(0, -1) + buttonValue;
            }
            else if (buttonValue === '.' && expression.split(/[\+\-\*\/\%]/).pop().includes('.')) {
                return; 
            }
            else if (isResultDisplayed && operators.includes(buttonValue)) {
                isResultDisplayed = false;
            }
            else {
                expression += buttonValue;
            }

            input.value = expression;
        }
    });
});
