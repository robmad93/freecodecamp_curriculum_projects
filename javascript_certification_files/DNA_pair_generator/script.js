/*
Note: I am very proud of this solution. It's one of my most elegant solutions to date (as of 06/02/2026).
User Stories:

You should have a pairElement function that takes a string of any length as an argument.
The pairElement function should return a 2d array, where each inner array has two strings inside, the first string is one base from the input, and the second string the paired base.
When given A, the function should pair it with T.
When given T, the function should pair it with A.
When given C, the function should pair it with G.
When given G, the function should pair it with C.
*/

function pairElement(str) {
  let pairArray = [];
  const basePairs = {
    A: "T",
    T: "A",
    G: "C",
    C: "G"
  };
  for (let char of str) {
    pairArray.push([char, basePairs[char]])
  }
  return pairArray;
}
