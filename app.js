// Sum of Elements
let sumArray = [1, 2, 3, 4, 5];
let sum = sumArray.reduce((total, current) => total + current, 0);
console.log("Sum:", sum);

// Average of Elements
let averageArray = [10, 20, 30, 40, 50];
let average =
  averageArray.reduce((total, current) => total + current, 0) /
  averageArray.length;
console.log("Average:", average);

// Finding the Smallest/Largest Element
let findArray = [8, 2, 7, 3, 11];
let smallest = Math.min(...findArray);
let largest = Math.max(...findArray);
console.log("Smallest:", smallest);
console.log("Largest:", largest);

// Reverse an Array
let originalArray = [1, 2, 3, 4, 5];
let reversedArray = originalArray.reverse();
console.log("Reversed Array:", reversedArray);

// Search for an Element
let searchArray = [10, 20, 30, 40, 50];
let elementToFind = 30;
let position = searchArray.indexOf(elementToFind);
if (position !== -1) {
  console.log("Element found at position", position);
} else {
  console.log("Element not found");
}

// Counting Characters (Uppercase Letters)
let countString = "Hello World";
let uppercaseLetters = countString.match(/[A-Z]/g) || [];
let uppercaseCount = uppercaseLetters.length;
console.log("Number of uppercase letters:", uppercaseCount);

// Palindrome Check
function isPalindrome(str) {
  let reversedStr = str.split("").reverse().join("");
  if (str === reversedStr) {
    console.log(`The string "${str}" is a palindrome.`);
  } else {
    console.log(`The string "${str}" is not a palindrome.`);
  }
}

isPalindrome("racecar");

// Reverse a String
let reverseString = "javascript";
let reversedString = reverseString.split("").reverse().join("");
console.log("Reversed String:", reversedString);

// Removing Whitespace
let whitespaceString = "  Hello   World  ";
let modifiedString = whitespaceString.replace(/\s/g, "");
console.log("Modified String:", modifiedString);

// Checking for Substrings
let mainString = "JavaScript is a powerful language";
let substringToCheck = "powerful";
if (mainString.includes(substringToCheck)) {
  console.log(`The string contains the substring "${substringToCheck}".`);
} else {
  console.log(
    `The string does not contain the substring "${substringToCheck}".`
  );
}

// Multiplication Table
let multiplicationNumber = 7;
console.log(`Multiplication Table for ${multiplicationNumber}:`);
for (let i = 1; i <= 10; i++) {
  let result = multiplicationNumber * i;
  console.log(`${multiplicationNumber} x ${i} = ${result}`);
}

// Prime Numbers
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

let primeLimit = 20;
let primeNumbers = [];
for (let i = 2; i <= primeLimit; i++) {
  if (isPrime(i)) {
    primeNumbers.push(i);
  }
}
console.log(`Prime numbers up to ${primeLimit}: ${primeNumbers.join(", ")}`);

// Fibonacci Series
function generateFibonacci(count) {
  let fibonacciArray = [0, 1];
  for (let i = 2; i < count; i++) {
    let nextFibonacci = fibonacciArray[i - 1] + fibonacciArray[i - 2];
    fibonacciArray.push(nextFibonacci);
  }
  return fibonacciArray;
}

let fibonacciCount = 8;
let fibonacciSeries = generateFibonacci(fibonacciCount);
console.log(
  `Fibonacci Series (first ${fibonacciCount} numbers): ${fibonacciSeries.join(
    ", "
  )}`
);
