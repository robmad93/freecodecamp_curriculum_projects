function largestOfAll (arr) {
  let largestNumbers = [];
  let currentValue = -Infinity; // Negative infinity will always be smaller than any number
    for (let array of arr) {
      for (let number of array) {
        if (number > currentValue) {
          currentValue = number;
        }
      } largestNumbers.push(currentValue);
      currentValue = -Infinity;
    }
    return largestNumbers;
}
