//------ lib.js ------

const parseInput = function(inputString) {
    if(!inputString) {
        throw new Error('Input string cannot be empty.');
    }

    const firstCharacter = inputString[0];

    //checks if first character is an operator
    if(isNaN(firstCharacter)) {
        inputString = inputString.substring(1);
    }

    //skips first character
    const values = inputString.split(/[+-]/).map(function(number) {
        return parseInt(number);
    });

    //makes first value as negative
    if(firstCharacter == '-') {
        values[0] = -values[0];
    }

    const operators = inputString.split(/[0-9]/).filter((value) => {
        return value.length > 0;
    });

    const parsedInput = {
        'values': values,
        'operators': operators,
    };

    return parsedInput;
};

const sum = function(num1, num2) {
    return num1 + num2;
};

const subtract = function(num1, num2) {
    return num1 - num2;
};

module.exports = {
    parseInput,
    sum,
    subtract,
};