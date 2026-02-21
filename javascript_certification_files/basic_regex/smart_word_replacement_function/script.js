/*
User Stories:

You should create a function named myReplace.
The myReplace function should take three arguments: a string, a word to be replaced, and the word to replace it with.
The myReplace function should return the new string with the replacement.
You should preserve the case of the first character in the original word when you are replacing it.
*/

function myReplace(str, wordToReplace, wordReplacement) {
  if (/^[A-Z]/.test(wordToReplace)) {
    wordReplacement = wordReplacement[0].toUpperCase() + wordReplacement.slice(1);
  }
  else {
    wordReplacement = wordReplacement[0].toLowerCase() + wordReplacement.slice(1);
  }
return str.replace(wordToReplace, wordReplacement)
}