
//function declaration
function squareRoot(number1, number2) {
    const number1Square = number1 * number1;
    const number2Square = number2 * number2;
    const sum = number1Square + number2Square;
    const sumSquare = sum * sum;
    return sumSquare;
}

//function expression
const squareRoot = function(number1, number2) {
    const number1Square = number1 * number1;
    const number2Square = number2 * number2;
    const sum = number1Square + number2Square;
    const sumSquare = sum * sum;
    return sumSquare;
};

//Arrow function
const squareRoot = (number1, number2) => {
    const number1Square = number1 * number1;
    const number2Square = number2 * number2;
    const sum = number1Square + number2Square;
    const sumSquare = sum * sum;
    return sumSquare;
};

squareRoot = (5,6)
