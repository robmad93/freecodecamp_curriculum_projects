/*
User Stories:

You should have a getIndexToIns function that takes two arguments: an array and a number.
You should use the sort method to sort the array in ascending order.
Your getIndexToIns function should return the lowest index at which the number should be inserted by using the findIndex method.
Your getIndexToIns function should always return a number.
*/

function getIndexToIns(arr, num) {
  let sortedArray = arr.sort((a, b) => a - b); // Sort numbers in ascending order.
  const lowestIndex = (element) => element >= num;
  const findLowestIndex = sortedArray.findIndex(lowestIndex);
  if (findLowestIndex === -1 && arr.length === 0) {
    return 0;
  } else if (findLowestIndex === -1 && arr.length > 0) {
    return arr.length;
  } else {
    return findLowestIndex;
  }
}
