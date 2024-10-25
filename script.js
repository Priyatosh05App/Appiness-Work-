const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');
let expression = "";
let memory = 0;

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
                    setTimeout(() => {
                        expression = "";
                        input.value = "";
                    }, 3000); // Clear the input after 3 seconds
                }
            } catch (error) {
                input.value = "Error";
                setTimeout(() => input.value = "", 2000);
            }
        } else if (buttonValue === 'AC') {
            expression = "";
            input.value = "";
        } else if (buttonValue === 'mc') {
            memory = 0; // Clear memory
        } else if (buttonValue === 'mr') {
            input.value = memory; // Recall memory
        } else if (buttonValue === 'm-') {
            memory -= parseFloat(input.value); // Memory minus
        } else if (buttonValue === 'm+') {
            memory += parseFloat(input.value); // Memory plus
        } else if (buttonValue === '√x') {
            expression = Math.sqrt(parseFloat(input.value)).toString();
            input.value = expression;
        } else if (buttonValue === '+/-') {
            input.value = (parseFloat(input.value) * -1).toString();
            expression = input.value;
        } else if (buttonValue === 'π') {
            expression += Math.PI.toString();
            input.value = expression;
        } else if (buttonValue === '^') {
            expression += '**'; // Use ** for exponentiation in JS
            input.value = expression;
        } else if (buttonValue === 'R2') {
            expression = parseFloat(input.value).toFixed(2);
            input.value = expression;
        } else if (buttonValue === 'R0') {
            expression = Math.round(parseFloat(input.value)).toString();
            input.value = expression;
        } else if (buttonValue === 'DEL') {
            expression = expression.slice(0, -1);
            input.value = expression;
        } else {
            expression += buttonValue;
            input.value = expression;
        }
    });
});
