do {
    action = prompt(`What would you like to do? (Only + - / * allowed)`);

    if (!action || action.trim() !== '+' && action.trim() !== '-' && action.trim() !== '*' && action.trim() !== '/') {
        console.log('Please enter a valid action.');
    }
} while (!action || action.trim() !== '+' && action.trim() !== '-' && action.trim() !== '*' && action.trim() !== '/');

do {
    operandsCount = prompt('How many operands?');

    if (!operandsCount || isNaN(parseInt(operandsCount.trim())) || parseInt(operandsCount.trim()) < 2 || parseInt(operandsCount.trim()) > 6) {
        console.log('Please enter a valid number of operands.');
    }
} while (!operandsCount || isNaN(parseInt(operandsCount.trim())) || parseInt(operandsCount.trim()) < 2 || parseInt(operandsCount.trim()) > 6);

i = 0;
result = null;

while (i < parseInt(operandsCount.trim())) {
    do {
        operands = prompt(`Enter operand ${i + 1}`);

        if (isNaN(parseFloat(operands.trim()))) {
            console.log('Please enter a number');
        } else {
            operands = parseFloat(operands.trim());
        }

        switch (action) {
            case '+':
                result = result ? result + operands : operands;
                break;

            case '-':
                result = result ? result - operands : operands;
                break;

            case '*':
                result = result ? result * operands : operands;
                break;

            case '/':
                result = result ? result / operands : operands;
                break;

            default:
                break;
        }

    } while (isNaN(parseFloat(operands)));
    i++;
}

console.log(`The result is ${result}`);
