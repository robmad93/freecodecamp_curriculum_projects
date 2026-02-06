/*
User Stories:

You should have a convertHTML function that accepts a string as an argument.

The convertHTML function should return a new string by converting special characters in the argument string to their corresponding HTML entities.

& should be converted to &amp;.
< should be converted to &lt;.
> should be converted to &gt;.
" should be converted to &quot;.
' should be converted to &apos;.
*/

function convertHTML(str) {
  const htmlEntities = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;"
};
  let newString = "";
  for (let char of str) {
    if (char in htmlEntities) {
      newString += htmlEntities[char];
    } else {
      newString += char;
    }
  } return newString;
}