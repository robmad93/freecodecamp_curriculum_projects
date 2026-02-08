/*
User Stories:

You should have a function named steamrollArray.
The steamrollArray function should accept one argument: a nested array.
The function should flatten the nested array, accounting for varying levels of nesting.
Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
Global variables should not be used.
*/

function steamrollArray(arr) {
let newArr = [];
for (let i = 0; i < arr.length; i++) {
if (Array.isArray(arr[i])) {
newArr.push(...steamrollArray(arr[i])); // Calling teamrollArray() here is a good use of recursion. Also, the spread operator will turn any remaining array into individual values.
} else {
  newArr.push(arr[i]);
}
} return newArr;
}