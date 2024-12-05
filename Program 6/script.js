function performOperation(operation) {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result;

    switch (operation) {
        case 'sum':
            result = num1 + num2;
            break;
        case 'product':
            result = num1 * num2;
            break;
        case 'difference':
            result = num1 - num2;
            break;
        case 'quotient':
            result = num1 / num2;
            break;
        case 'remainder':
            result = num1 % num2;
            break;
        case 'power':
            result = Math.pow(num1, num2);
            break;
        case 'square':
            result = num1 * num1;
            break;
        case 'squareRoot':
            result = Math.sqrt(num1);
            break;
        default:
            result = "Invalid Operation";
    }

    document.getElementById('output').innerText = result;
}
