/* An alternative to the repeat function */

function repeatStringNumTimes(str, num) {
  let repeatedString = "";
  if (num > 0) {
    for (let i = 0; i < num; ++i) {
      repeatedString += str;
    } return repeatedString;
  } return "";
}