/*
User Stories:

You should have a sumPrimes function that accepts a number as an argument.
The sumPrimes function should return the sum of all prime numbers less than or equal to the provided number.
If the input number is less than 2, the function should return 0.

*/

function sumPrimes(num) {
  let sum = 0;

  for (let i = 2; i <= num; i++) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) { // If i has a divisor larger than its square root, it must also have one smaller. Hence, only need to check up to the square root of i.
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      sum += i;
    }
  }

  return sum;
}
