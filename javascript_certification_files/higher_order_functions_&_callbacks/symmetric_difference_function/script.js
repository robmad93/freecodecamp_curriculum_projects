/*
User Stories:

Your function diffArray should return an array.
Your function should take two arguments, both of which are arrays.
Your function should make use of the filter method.
Your function should return the symmetric difference of the two arrays.
Your function should return an empty array if there is no symmetric difference.
*/

function diffArray(arr1, arr2) {
  let symmetricDifference1 = arr1.filter((item) => !arr2.includes(item));
  let symmetricDifference2 = arr2.filter((item) => !arr1.includes(item));
  return symmetricDifference1.concat(symmetricDifference2);
  } 
  