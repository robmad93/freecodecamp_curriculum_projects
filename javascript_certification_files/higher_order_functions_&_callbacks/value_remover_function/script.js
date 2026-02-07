/*
User Stories:

You should have a destroyer function that accepts an array and one or more additional arguments.
The destroyer function should return a new array excluding all elements from the first argument that match any of the subsequent arguments.
The function must accept an indeterminate number of arguments.
*/

function destroyer(arr, ...args) {
  return arr.filter((item) => !args.includes(item));
}