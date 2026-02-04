/* User Stories:

You should have a titleCase function that takes a string as an argument.
The titleCase function should return a string with the first letter of each word capitalized and the rest of the word in lower case.
titleCase("I like to code") should return "I Like To Code".
titleCase("javaScript is fun") should return "Javascript Is Fun". 
*/

function titleCase(str) {
  let stringSplit = str.split(" ");
  let titleCase = [];
  for (let word of stringSplit) {
    titleCase.push(word[0].toUpperCase() + word.slice(1).toLowerCase()); // Strings are immutable; therefore, I reconstructed the strings here.
  }
  return titleCase.join(" "); // Note: join() creates a new string, so it needs to be either directly returned or stored in a variable that is returned.
}
