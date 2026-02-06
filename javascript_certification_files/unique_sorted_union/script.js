/* 
User Stories:

You should have a function named uniteUnique.
The uniteUnique function should accept two or more arrays as arguments.
The function should return a new array that contains unique values from the argument arrays, in the order they are first found in the arguments. For example, an input like [1, 2, 4], [2, 3, 5] would have an output of [1, 2, 4, 3, 5].
 */

function uniteUnique(...arr) {
  let values = [...arr].flat(); // flat() will convert an array of arrays into a single array.
  let uniqueSet = new Set(values);
  let uniqueArray = [...uniqueSet];
  return uniqueArray;
}