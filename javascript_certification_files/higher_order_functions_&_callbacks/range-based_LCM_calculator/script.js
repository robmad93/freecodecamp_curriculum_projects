/*
User Stories

You should have a smallestCommons function that accepts an array of two numbers as an argument.
The smallestCommons function should return the smallest common multiple that is evenly divisible by both numbers and all sequential numbers in the range between them.
The function should handle input where the two numbers are not in numerical order.
*/

function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  let range = [];
  for (let i = min; i <= max; i++) {
    range.push(i);
  }
  let candidate = max;
  while (true) {
    let isValid = range.every(num => candidate % num === 0);

    if (isValid) {
      return candidate;
    }
    candidate += max;
  }
}