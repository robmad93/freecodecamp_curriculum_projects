/* The function iterates through the array and tests each element using the provided test function. At the end, it would return the first element where the test function returns true.

Example:

findElement([1, 3, 5, 8], num => num % 2 === 0) // returns 8
findElement([1, 3, 5], num => num % 2 === 0)    // returns undefined */


function findElement(arr, func) {
  for (let element of arr) {
    if (func(element)) {
      return element;
    }
  } return undefined;
}
