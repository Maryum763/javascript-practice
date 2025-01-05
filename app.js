//---------ARROW FUN()----------

// 1. SQUARE OF Number

var numbers = [1, 2, 3, 4, 5];
var squareNumbers = (arr) => arr.map((num) => num ** 2); //using arrow function to apply square function
console.log(squareNumbers(numbers));

// 2. Sum of Array

var numbers = [1, 2, 3, 4, 5];
var sumArray = (arr) => arr.reduce((a, b) => a + b, 0); // using reduce fun to calculate all element
console.log(sumArray(numbers));

//3. filter even numbers

var numbers = [1, 2, 3, 4, 5];
var filterEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0); // using filter function to filter only even numbers
console.log(filterEvenNumbers(numbers));

//------------STRINGS----------

//4. Reverse String

var str = "hello World";
var reverseString = (s) => s.split("").reverse().join("");
console.log(reverseString(str));

//5.Count Vowels

var str = "hello world";
var countVowels = (s) =>
  s.split("").filter((char) => "aeiou".includes(char)).length;
console.log(countVowels(str));

//6.Check Palindrome

var str = "madam";
var checkPalindrome = (s) => s === s.split("").reverse("").join("");
// using split , reverse and join fun() to check it is true or not if it print True otherwise false
console.log(checkPalindrome(str));

//------------Arrays---------------

//7.Find Max Number

var numbers = [1, 2, 3, 4, 5];
var findMaxNumber = (arr) => Math.max(...arr);
console.log(findMaxNumber(numbers));

// 8. Remove Duplictes

var numbers = [1, 2, 2, 3, 4, 3, 5, 6, 6];
var removeDuplicates = (arr) => [...new Set(arr)]; //using set obj to remove duplicate no.
console.log(removeDuplicates(numbers));

//9.Merge Array

var arr1 = [1, 2, 3];
var arr2 = [3, 4, 5];

var mergeArrays = (arr1, arr2) => [...new Set([...arr1, ...arr2])];
// using set obj to merge and remove duplicate no.
console.log(mergeArrays(arr1, arr2));

//----------For Loops--------

//10. Factorial Calculation

var num = 5;
var FactorialCalculation = (num) => {
  let result = 1;
  for (
    let i = 1;
    i <= num;
    i++
  ) //for loop is used for to repeat a block of statement multiple times until the condition is true
  {
    result *= i;
  }
  return result;
};

console.log(FactorialCalculation(num));

// -------------while Loop------

//11. SUM of DIgits using whlie loop

var num = 12345;
var sumOfDigits = (num) => {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
};
console.log(sumOfDigits(num));

//13. Using do-while loop to print numbers from 1 to 20

var i = 1;
do {
  console.log(i);
  i++;
} while (i <= 20);
