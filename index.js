/* 1. program to find sum of first and last digit of a number. Using while loop */

function sumFirstAndLastDigit(number) {
    // Ensure number is non-negative
    number = Math.abs(number);

    // Initialize variables
    let lastDigit = number % 10;
    let firstDigit = lastDigit;
    while (number >= 10) {
        number = Math.floor(number / 10);
        firstDigit = number;
    }

    // Calculate and return the sum
    return firstDigit + lastDigit;
}

const number = parseInt(prompt("Enter a number:"));
const result = sumFirstAndLastDigit(number);
console.log(`Sum of first and last digit of ${number} is ${result}`);

/* 2. program to count number of digits in a number. Using while loop */

function countDigits(number) {
    // Ensure number is non-negative
    number = Math.abs(number);

    // Initialize digit count to 0
    let count = 0;

    // Count digits using a while loop
    while (number > 0) {
        number = Math.floor(number / 10); // Remove the last digit
        count++; // Increment count
    }

    return count;
}

const number = parseInt(prompt("Enter a number:"));
const digitCount = countDigits(number);
console.log(`Number of digits in ${number} is ${digitCount}`);

/* 3. Program to Print the Fibonacci Sequence */

function fibonacciSequence(numTerms) {
    let fibonacci = [0, 1]; // Initialize the sequence with the first two terms

    // Generate subsequent terms using the Fibonacci formula
    for (let i = 2; i < numTerms; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci;
}

// Example usage
const numTerms = parseInt(prompt("Enter the number of terms for Fibonacci sequence:"));
const sequence = fibonacciSequence(numTerms);
console.log(`Fibonacci sequence up to ${numTerms} terms: ${sequence.join(", ")}`);

/* 4. JavaScript Program to Check Armstrong Number */

function isArmstrongNumber(number) {
    // Convert the number to a string to iterate over its digits
    const strNumber = number.toString();
    const numDigits = strNumber.length;

    // Initialize sum
    let sum = 0;

    // Calculate sum of each digit raised to the power of the number of digits
    for (let i = 0; i < numDigits; i++) {
        sum += Math.pow(parseInt(strNumber[i]), numDigits);
    }

    // Check if the sum is equal to the original number
    return sum === number;
}


const number = parseInt(prompt("Enter a number to check if it's an Armstrong number:"));
if (isArmstrongNumber(number)) {
    console.log(`${number} is an Armstrong number.`);
} else {
    console.log(`${number} is not an Armstrong number.`);
}

/* 5. JavaScript Program to Find the Palindrome Number or not */

function palindromeCheck(number) {
    let numStr = number.toString();
    let numArr = numStr.split('');
    return numArr.every((num, index) => num === numArr[numArr.length - 1 - index]);
}

// Checking the number is Palindrome
console.log(palindromeCheck(121));
console.log(palindromeCheck(12321));
console.log(palindromeCheck(12345));