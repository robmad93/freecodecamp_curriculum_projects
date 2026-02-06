/*
User Stories:

You should have a function named sumAll that accepts an array of two numbers.
sumAll([n, m]) should return the sum of n and m plus the sum of all the numbers between them. The lowest number will not always come first. For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
  let sum = 0;
  if (arr[0] === arr[1]) {
    sum += (arr[0] + arr[1]);
  } else if (arr[0] < arr[1]) {
    for (let i = arr[0]; i <= arr[1]; i++) {
      sum += i;
    }
    } else {
      for (let i = arr[1]; i <= arr[0]; i++) {
        sum += i;
      }
    } return sum;
  }