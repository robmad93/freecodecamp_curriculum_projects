/*
User Stories:

Create a frankenSplice function that accepts two arrays and an index.
Copy each element of the first array into the second array, in order, beginning at the given index, and return the resulting array.
The input arrays should remain the same after the function runs.
 */

function frankenSplice(arr1, arr2, index) {
  let arr1Copy = arr1.slice();
  let arr2Copy = arr2.slice();
  for (let i = 0; i < arr1Copy.length; i++) {
    arr2Copy.splice(index, 0, arr1Copy[i]);
    index++;
  }
  return arr2Copy;
}