/*
User Stories

You should have a sumFibs function that accepts a number as an argument.
The sumFibs function should return the sum of all odd Fibonacci numbers that are less than or equal to the given number.
The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two previous ones.
Only the odd Fibonacci numbers should be added to the sum.
*/

function sumFibs(num) {
  let num1 = 1;
  let num2 = 1;
  let oddSum = 2; // both starting 1s are odd

  while (true) {
    let sum = num1 + num2;
    if (sum > num) break;

    if (sum % 2 !== 0) {
      oddSum += sum;
    }

    num1 = num2;
    num2 = sum;
  }

  return oddSum;
}